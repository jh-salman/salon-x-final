import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div style={{
    backgroundColor:"black"
   }}>
    <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
