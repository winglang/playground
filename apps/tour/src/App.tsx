import { ReactMonacoEditor } from './Editor'
import { tutorial as mainTutorial, Tutorial } from './tutorials/main';
import { tutorial as bucketTutorial } from './tutorials/resource/bucket';
import { tutorial as counterTutorial } from './tutorials/resource/counter';
import { tutorial as topicTutorial } from './tutorials/resource/topic';
import { tutorial as queueTutorial } from './tutorials/resource/queue';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";
import { isChrome } from '@wing-playground/shared/src/utils';

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
  }
];

function AppView({ tutorial }: { tutorial: Tutorial }) {
  return (
    <div className="max-h-full h-full flex flex-col">
      {isChrome() && <ReactMonacoEditor tutorial={tutorial} />}
      {!isChrome() &&
        <div className='h-full flex justify-center content-center items-center bg-[#293443]'>
          <div className='h-24 text-xl flex-row justify-center content-center items-center text-[#f1f0f1] text-center leading-relaxed'>
            <div>
              <span>Winglang learn experience works only on chrome on desktops.</span>
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
