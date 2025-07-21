import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/router.jsx'
import { AppProvider } from './context/AppContext.jsx'
// import ScreenController from './components/ScreenController.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <div style={{
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#121212",
      position: "relative",
    }}>
      <AppProvider>



        {/* Phone Frame */}
        <div style={{
          background: "linear-gradient(180deg, #FF18EC 7.8%, #5333F1 52.06%, #00E7F9 99.27%)",
          width: "393px",
          height: "852px",
          borderRadius: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px"

        }}>
          <div style={{
            borderRadius: "24px",
            border: "none",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            fontSize: "20px",
            fontWeight: "bold",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            overflow: "hidden",
            position: "relative",
            paddingLeft:"15px"
          }}>

            <RouterProvider router={router} />

          </div>

        </div>

      </AppProvider>
    </div>
  </StrictMode>,
)
