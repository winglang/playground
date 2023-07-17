import { useAnalytics } from '@wing-playground/shared/src/analytics/use-analytics';
import { ReactMonacoEditor } from './Editor'
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";
import { getBrowser, isWorkingWithWebContainer } from '@wing-playground/shared/src/utils';
import { LoadingStatus } from '@wing-playground/shared/src/loading-status';


function App() {
  usePreventSave({enable: true});

  const _isWorkingWithWebContainer = isWorkingWithWebContainer();
  if (!_isWorkingWithWebContainer) {
    const { track } = useAnalytics({ platform: "play", state: LoadingStatus.Completed });
    track("play_page_block", {
      device: getBrowser()
    });
  }

  return (
    <div className="max-h-full h-full flex flex-col">
      {_isWorkingWithWebContainer && <ReactMonacoEditor/>}
      {!_isWorkingWithWebContainer &&
        <div className='h-full flex justify-center content-center items-center bg-[#293443]'>
          <div className='h-24 text-xl flex-row justify-center content-center items-center text-[#f1f0f1] text-center leading-relaxed'>
            <div>
              <span>Unfortunately, the Wing Playground is only compatible with desktop Chromium-based, Firefox and Safari &gt; 16.4 at the moment.</span>
            </div>
            <div>
              <span>Please open this page in a different browser, or <a href="https://www.winglang.io/docs" className='text-teal-500'>get started</a> with Wing on your system.</span>
            </div>
            </div>
        </div>
      }
    </div>
  )
}

export default App;
