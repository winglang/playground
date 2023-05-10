import './App.css'
import { ReactMonacoEditor } from './Editor'
import { Header } from './Header'
import { isChrome } from './utils'
import { VscWarning } from "react-icons/vsc";

function App() {
  return (
    <div className="max-h-full h-full flex flex-col text-slate-700">
      {/* <Header /> */}
      { isChrome() ? <ReactMonacoEditor /> : 
      <div className='h-full flex justify-center content-center items-center'>
        <div className='h-24 text-xl flex flex-row justify-center content-center items-center text-[#f1f0f1]'>
          <VscWarning className='text-amber-500'/> 
          <span>This playground uses <a href="https://webcontainers.io/" className='text-teal-500'> Web Containers </a> and only works on Google Chrome.</span>
        </div>
      </div> }
    </div>
  )
}

export default App
