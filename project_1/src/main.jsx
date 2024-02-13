import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navigation from './component/navigation'
import './index.css'
import HeroSection from './component/hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
   <App/>
   <HeroSection/>
  </React.StrictMode>,
)
