import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home/Home.jsx'
import Gallery from './Gallery/Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Gallery />
  </StrictMode>,
)
