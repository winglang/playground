import { CloseAction, ErrorAction, MonacoLanguageClient } from 'monaco-languageclient';
import { BrowserMessageReader, BrowserMessageWriter } from 'vscode-languageserver-protocol/browser.js';
import { debounce } from 'lodash';
import LspWorker from './lsp.js?worker'

export interface startLspProps {
  onError: () => void
}

export const startLsp = ({ onError }: startLspProps) => {
  const lspWorker = new LspWorker()
  setTimeout(() => {
    const reader = new BrowserMessageReader(lspWorker);
    const writer = new BrowserMessageWriter(lspWorker);
    const languageClient = createLanguageClient({ reader, writer });
    languageClient.start();

    lspWorker.onerror = debounce((ev) => {
      lspWorker.terminate();
      onError();
      setTimeout(() => {
        startLsp({ onError });
      }, 5000);
    }, 500);
    reader.onClose(() => {
      languageClient.stop()
    });

    function createLanguageClient(transports: any) {
      return new MonacoLanguageClient({
        name: 'Wing Language Client',
        clientOptions: {
          // use a language id as a document selector
          documentSelector: [{ language: 'wing' }],
          // disable the default error handler
          errorHandler: {
            error: () => {
              console.log('lsp connection error')
              return ({ action: ErrorAction.Shutdown })
            },
            closed: () => {
              console.log('lsp connection closed')
              return ({ action: CloseAction.Restart })
            }
          }
        },
        // create a language client connection to the server running in the web worker
        connectionProvider: {
          get: () => {
            return Promise.resolve(transports);
          }
        }
      });
    }
  }, 4500)
}