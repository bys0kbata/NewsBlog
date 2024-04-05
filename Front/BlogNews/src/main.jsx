import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Headers from './component/Headers/Headers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headers />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
