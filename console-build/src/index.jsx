import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WingConsole.Console port={34443} layout={2}/>
  </React.StrictMode>,
)
