import { ReactMonacoEditor } from './Editor'
import { usePreventSave } from "@wing-playground/shared/src/use-prevent-save";

function App() {
  usePreventSave({enable: true});

  return (
    <div className="max-h-full h-full flex flex-col">
      <ReactMonacoEditor/>
    </div>
  )
}

export default App;
