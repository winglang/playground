import React from 'react'
import ReactDOM from 'react-dom/client'
import '@wing-playground/shared/src/index.css'

// eslint-disable-next-line no-undef
const WS = WingConsole;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WS.Console port={34443} layout={1} />
  </React.StrictMode>,
)
