import { ReactMonacoEditor } from './Editor'
import { isChrome } from '@wing-playground/shared/src/utils'
import { VscWarning } from 'react-icons/vsc';
import { tutorials as mainTutorials, Tutorial } from './tutorials/main';
import { tutorials as bucketTutorial } from './tutorials/resource/bucket';
import { tutorials as counterTutorial } from './tutorials/resource/counter';
import { tutorials as topicTutorial } from './tutorials/resource/topic';

import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

const tutorialRoutes = [
  {
    path: '/',
    tutorials: mainTutorials
  }, {
    path: '/bucket',
    tutorials: bucketTutorial
  }, {
    path: '/counter',
    tutorials: counterTutorial
  }, {
    path: '/topic',
    tutorials: topicTutorial
  }
];

function AppView({ tutorials }: { tutorials: Tutorial[] }) {
  return (
    <div className="max-h-full h-full flex flex-col text-slate-700">
      { isChrome() ? <ReactMonacoEditor tutorials={tutorials} /> :
      <div className='h-full flex justify-center content-center items-center'>
        <div className='h-24 text-xl flex flex-row justify-center content-center items-center text-[#f1f0f1]'>
          <VscWarning className='text-amber-500'/>
          <span>This playground uses <a href="https://webcontainers.io/" className='text-teal-500'> Web Containers </a> and only works on Google Chrome.</span>
          </div>
      </div> }
        </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
       {tutorialRoutes.map(({ path, tutorials}) =>
        <Route key={path} path={path} element={<AppView tutorials={tutorials}/>}/>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App
