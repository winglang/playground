import React, { useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import convertTheme from "../../../packages/shared/src/monaco-themes/convert-tmtheme";
import darkPlusTMTheme from "../../../packages/shared/src/monaco-themes/dark_plus";
import lightPlusTMTheme from "../../../packages/shared/src/monaco-themes/light_plus";
import wingLanguageConfiguration from '../../../packages/shared/src/language-configurations/wing-configration.json';
import 'monaco-editor/esm/vs/editor/editor.all.js';

// support all editor features
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/quickInput/standaloneQuickInputService.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';

import * as monaco from 'monaco-editor';


function countLines(str) {
    return (str.match(/\n/g) || '').length + 1;
}

const wrapperStyle = {
    width: '100%',
    overflow: 'hidden',
  };

  const editorStyle = {
    width: 'calc(100% + 20px)', // adjust this value depending on the width of your scrollbar
    marginBottom: '-1em',
  };

const MonacoWrapper = ({ language, value, editorOptions, currentMode }) => {
    const compileEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

    const darkPlusTheme = convertTheme(darkPlusTMTheme);
    const lightPlusTheme = convertTheme(lightPlusTMTheme);

    let willMounts = 0;
    let mounts = 0;

    const editorWillMount = (monaco: any) => {
        if (willMounts > 0) {
            return;
        }
        try {
            monaco.languages.register({
                id: 'wing',
                extensions: ['.w', '.wing'],
                aliases: ['Wing', 'wing']
            });

            monaco.languages.setLanguageConfiguration('wing', wingLanguageConfiguration)
        } catch (error) {
            console.error(error);
        }
        //console.log('editor theme', editorTheme);
        monaco.editor.defineTheme('dark', darkPlusTheme);
        monaco.editor.defineTheme('light', lightPlusTheme);
        willMounts++;
    };

    const editorDidMount = (editor, monaco) => {
        if (mounts > 0) {
            return;
        }
        compileEditorRef.current = editor

        monaco.editor.defineTheme('myCustomTheme', {
            base: currentMode === 'dark' ? 'vs-dark' : 'vs', // can also be vs or hc-black
            inherit: true, // can also be false to completely replace the builtin rules
            rules: [],
            colors: currentMode === 'dark' ? 
            {
                'editor.background': '#334155', // Match your editor's background color here
                'editor.lineHighlightBackground': '#334155' // Match your editor's background color here
            } :
            {
                'editor.background': '#FFFFFF', // Match your editor's background color here
                'editor.lineHighlightBackground': '#FFFFFF' // Match your editor's background color here
            }
          });
        
        editor.updateOptions({ theme: 'myCustomTheme' });

        // Get the editor's DOM node
        const editorDomNode = editor.getDomNode();

        // Add a wheel event listener that prevents the default behavior
        if (editorDomNode) {
            editorDomNode.addEventListener('wheel', function(e) {
            e.preventDefault();
            }, { passive: false }); // use passive: false to make preventDefault() work in passive mode
        }
        
        mounts++;
    };
    
    const lines = countLines(value);
    const height = `${1.7*lines + 1}vh`;

    return (
        <div style={wrapperStyle}>
            <div style={editorStyle}>
                <Editor
                    key={"syntac-highlighter"}
                    data-testid={"syntax-highlighter"}
                    theme={currentMode}
                    options={{
                        ...editorOptions,
                        minimap: { enabled: false },
                        scrollbar: { vertical: "hidden", horizontal: "hidden" },
                        scrollBeyondLastLine: false, // disable scrolling beyond the last line
                        padding: { top: 10, bottom: 0 },
                        lineNumbers: "off",
                        readOnly: true,
                        autoSize: true,
                        autoHeight: true,
                        hover: false,
                        verticalScrollbarSize: 0,
                        renderIndentGuides: false, // Disable indent guides
                        renderLineHighlight: 'none',
                    }}
                    height={height}
                    defaultLanguage={language}
                    value={value}
                    onMount={editorDidMount}
                    beforeMount={editorWillMount}
                />
            </div>
        </div>
  );
};

export default MonacoWrapper;
