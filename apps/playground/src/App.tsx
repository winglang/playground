import { useAnalytics } from '@wing-playground/shared/src/analytics/use-analytics';
import { ReactMonacoEditor } from './Editor'
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";
import { getBrowser, isChrome } from '@wing-playground/shared/src/utils';
import { LoadingStatus } from '@wing-playground/shared/src/loading-status';


function App() {
  usePreventSave({enable: true});

  const chrome = isChrome();
  if (!chrome) {
    const { track } = useAnalytics({ platform: "play", state: LoadingStatus.Completed });
    track("play_page_block", {
      device: getBrowser()
    });
  }

  return (
    <div className="max-h-full h-full flex flex-col">
      {chrome && <ReactMonacoEditor/>}
      {!chrome &&
        <div className='h-full flex justify-center content-center items-center bg-[#293443]'>
          <div className='h-24 text-xl flex-row justify-center content-center items-center text-[#f1f0f1] text-center leading-relaxed'>
            <div>
              <span>Unfortunately, the Wing Playground is only compatible with Chrome for desktop at the moment.</span>
            </div>
            <div>
              <span>Please open this page in Chrome, or <a href="https://www.winglang.io/docs" className='text-teal-500'>get started</a> with Wing on your system.</span>
            </div>
            </div>
        </div>
      }
    </div>
  )
}

export default App;
