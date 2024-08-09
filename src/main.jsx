import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeaderBar from './components/header'
import { MainContent } from './components/mainsection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderBar/>
    <MainContent/>
  </React.StrictMode>,
)

