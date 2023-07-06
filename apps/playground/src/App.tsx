import { useAnalytics } from '@wing-playground/shared/src/analytics/use-analytics';
import { ReactMonacoEditor } from './Editor'
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";
import { getBrowser, isChrome } from '@wing-playground/shared/src/utils';
import { LoadingStatus } from '@wing-playground/shared/src/loading-status';


function App() {
  usePreventSave({enable: true});

  const chrome = isChrome();
  if (!chrome) {
    const { analytics } = useAnalytics({ name: "playground", state: LoadingStatus.Completed });
    analytics.track("playground: blocked for device", {
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
              <span>The Winglang Learn experience is compatible exclusively with Chrome on desktop computers.</span>
            </div>
            <div>
            <span>Please open this page in Chrome, or consider trying our  <a href="https://www.winglang.io/docs" className='text-teal-500'> Getting Started guide.</a></span>
            </div>
            </div>
        </div>
      }
    </div>
  )
}

export default App;
