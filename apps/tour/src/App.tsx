import { ReactMonacoEditor } from './Editor'
import { tutorial as mainTutorial, Tutorial } from './tutorials/main';
import { tutorial as bucketTutorial } from './tutorials/resource/bucket';
import { tutorial as counterTutorial } from './tutorials/resource/counter';
import { tutorial as topicTutorial } from './tutorials/resource/topic';
import { tutorial as queueTutorial } from './tutorials/resource/queue';
import { tutorial as inflightTutorial } from './tutorials/inflight/basic';
import { tutorial as markdownPlayground } from './tutorials/markdown-playground';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";

const basePath = import.meta.env.VITE_BASE_PATH === '/learn' ? '/learn' : '/';
const routePrefix = import.meta.env.VITE_BASE_PATH === '/learn' ? 'learn' : '';

const tutorialRoutes = [
  {
    path: basePath,
    tutorial: mainTutorial
  }, {
    path: `${routePrefix}/bucket`,
    tutorial: bucketTutorial
  }, {
    path: `${routePrefix}/counter`,
    tutorial: counterTutorial
  }, {
    path: `${routePrefix}/topic`,
    tutorial: topicTutorial
  }, {
    path: `${routePrefix}/queue`,
    tutorial: queueTutorial
  }, {
    path: `${routePrefix}/preflight-inflight`,
    tutorial: inflightTutorial
  }, {
    path: `${routePrefix}/markdown-playground`,
    tutorial: markdownPlayground
  }
];

function AppView({ tutorial }: { tutorial: Tutorial }) {

  return (
    <div className="max-h-full h-full flex flex-col">
      <ReactMonacoEditor tutorial={tutorial} />
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
        <Route path="*" element={<Navigate to={basePath} />} />
      </Routes>
    </Router>
  );
}

export default App;
