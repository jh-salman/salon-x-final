import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import CalendarComponent from '../components/Calendar';

function Screen5() {
  console.log("Rendering Screen5");
  const { setCurrentScreen } = useContext(AppContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <div style={{
        width: "393px",
        height: "852px",
        borderRadius: "24px",
        overflow: "hidden",
        backgroundColor: "black",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        {/* Temporary check to ensure something is rendering */}
        <div style={{ color: "white", textAlign: "center", marginTop: "20px" }}></div>

        <CalendarComponent />

        <div style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#0a0a0a",
          padding: "12px 0",
          borderTop: "1px solid #333",
          width: "100%",
        }}>
          <button
            onClick={() => setCurrentScreen("screen1")}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff", background: "none", border: "none" }}
          >
            ✂️<span style={{ fontSize: "12px", marginTop: "4px" }}>Stylist</span>
          </button>
          <button
            onClick={() => setCurrentScreen("screen2")}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff", background: "none", border: "none" }}
          >
            👤<span style={{ fontSize: "12px", marginTop: "4px" }}>Clients</span>
          </button>
          <button style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff", background: "none", border: "none" }}>
            ⚙️<span style={{ fontSize: "12px", marginTop: "4px" }}>Settings</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Screen5
