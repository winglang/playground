import { ReactMonacoEditor } from './Editor'
import { tutorial as mainTutorial, Tutorial } from './tutorials/main';
import { tutorial as bucketTutorial } from './tutorials/resource/bucket';
import { tutorial as counterTutorial } from './tutorials/resource/counter';
import { tutorial as topicTutorial } from './tutorials/resource/topic';
import { tutorial as queueTutorial } from './tutorials/resource/queue';
import { tutorial as inflightTutorial } from './tutorials/inflight';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";

const tutorialRoutes = [
  {
    path: '/',
    tutorial: mainTutorial
  }, {
    path: '/bucket',
    tutorial: bucketTutorial
  }, {
    path: '/counter',
    tutorial: counterTutorial
  }, {
    path: '/topic',
    tutorial: topicTutorial
  }, {
    path: '/queue',
    tutorial: queueTutorial
  }, {
    path: '/preflight-inflight',
    tutorial: inflightTutorial
  }
];

function AppView({ tutorial }: { tutorial: Tutorial }) {

  return (
    <div className="max-h-full h-full flex flex-col">
      <ReactMonacoEditor tutorial={tutorial} />
      {/* { isChrome() ? <ReactMonacoEditor tutorials={tutorials} /> :
      <div className='h-full flex justify-center content-center items-center'>
        <div className='h-24 text-xl flex flex-row justify-center content-center items-center text-[#f1f0f1]'>
          <VscWarning className='text-amber-500'/>
          <span>This playground uses <a href="https://webcontainers.io/" className='text-teal-500'> Web Containers </a> and only works on Google Chrome.</span>
          </div>
      </div> } */}
    </div>
  )
}

function App() {
  usePreventSave({enable: true});

  return (
    <Router>
      <Routes>
       {tutorialRoutes.map(({ path, tutorial}) =>
        <Route key={path} path={path} element={<AppView tutorial={tutorial}/>}/>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App
