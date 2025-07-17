import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router.jsx'
import { AppProvider } from './context/AppContext.jsx'
import ScreenController from './components/ScreenController.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div style={{
    backgroundColor:"black"
   }}>
    <AppProvider>

    {/* <RouterProvider router={router} /> */}
    <ScreenController />
    </AppProvider>
   </div>
  </StrictMode>,
)
