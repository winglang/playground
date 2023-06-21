import { useEffect } from 'react';
import { ReactMonacoEditor } from './Editor'
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";


function App() {
  usePreventSave({enable: true});

  return (
    <div className="max-h-full h-full flex flex-col">
      <ReactMonacoEditor />
      {/* { isChrome() ? <ReactMonacoEditor /> :
      <div className='h-full flex justify-center content-center items-center'>
        <div className='h-24 text-xl flex flex-row justify-center content-center items-center text-[#f1f0f1]'>
          <VscWarning className='text-amber-500'/>
          <span>This playground uses <a href="https://webcontainers.io/" className='text-teal-500'> Web Containers </a> and only works on Google Chrome.</span>
        </div>
      </div> } */}
    </div>
  )
}

export default App
