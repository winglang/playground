import { ReactMonacoEditor } from './Editor'
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";
import { isChrome } from '@wing-playground/shared/src/utils';


function App() {
  usePreventSave({enable: true});

  return (
    <div className="max-h-full h-full flex flex-col">
      {isChrome() && <ReactMonacoEditor/>}
      {!isChrome() &&
        <div className='h-full flex justify-center content-center items-center bg-[#293443]'>
          <div className='h-24 text-xl flex-row justify-center content-center items-center text-[#f1f0f1] text-center leading-relaxed'>
            <div>
              <span>Winglang playground experience works only on chrome on desktops.</span>
            </div>
            <div>
              <span>Please, open this page in chrome or try our  <a href="https://www.winglang.io/docs" className='text-teal-500'> getting started guide.</a></span>
            </div>
            </div>
        </div>
      }
    </div>
  )
}

export default App
