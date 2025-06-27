import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLayouts from './Layouts/HomeLayouts/HomeLayouts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeLayouts />
  </StrictMode>,
)
