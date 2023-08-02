import React from 'react'
import ReactDOM from 'react-dom/client'
import queryString from 'query-string';
import { Buffer } from 'buffer'
import '../temp/index.css'

// eslint-disable-next-line no-undef
const WS = WingConsole;

const parsed = queryString.parse(location.search);
let host = Buffer.from(parsed.host, "base64").toString("utf-8");
if (host.endsWith("/")) {
  host = host.substring(0, host.length - 1);
}
if (!host.startsWith("https://")) {
  host.replace("https://", "");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WS.Console server={{secure: true, host: host }} layout={1} />
  </React.StrictMode>,
)