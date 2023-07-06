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
import { getBrowser, isChrome } from '@wing-playground/shared/src/utils';
import { useAnalytics } from '@wing-playground/shared/src/analytics/use-analytics';
import { LoadingStatus } from '@wing-playground/shared/src/loading-status';

const basePath = import.meta.env.VITE_TOUR_BASE_PATH === '/learn' ? '/learn' : '/';
const routePrefix = import.meta.env.VITE_TOUR_BASE_PATH === '/learn' ? 'learn' : '';

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

  const chrome = isChrome();
  if (!chrome) {
    const { analytics } = useAnalytics({ name: `tour: ${tutorial.name}`, state: LoadingStatus.Completed });
    analytics.track(`tour: ${tutorial.name}: blocked for device`, {
      device: getBrowser()
    });
  }

  return (
    <div className="max-h-full h-full flex flex-col">
      {chrome && <ReactMonacoEditor tutorial={tutorial} />}
      {!chrome &&
        <div className='h-full flex justify-center content-center items-center bg-[#293443]'>
          <div className='h-24 text-xl flex-row justify-center content-center items-center text-[#f1f0f1] text-center leading-relaxed'>
            <div>
              <span>Unfortunately, the Wing Tutorial is only compatible with Chrome for desktop at the moment.</span>
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
