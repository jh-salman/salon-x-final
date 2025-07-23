import React, { useContext } from 'react'
import CalendarComponent from '../../components/Calendar'
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

function Screen3() {
    const { 
        selectSlider,
        setSelectSlider,
        isTimer,
        setIsTimer,
        openTimerSlider,
        setOpenTimerSlider } = useContext(AppContext);
        const navigate = useNavigate();
    return (
        <div>
            <CalendarComponent />
            <div style={{
                position: "absolute",
                top:"790px",
                left: "0",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#0a0a0a",
                padding: "12px 0",
                borderTop: "1px solid #333",
                width: "100%",
            }}>
                <button
                    onClick={() => navigate("/screen1")}
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
    )
}

export default Screen3
