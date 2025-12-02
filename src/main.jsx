import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <SmoothScroll />


    <App />
  </React.StrictMode>
)
