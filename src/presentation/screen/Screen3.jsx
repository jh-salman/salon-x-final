import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import CalendarComponent from '../../component/Calendar';

function Screen3() {
    const { 

        setSelectSlider,
        isTimer,
        setIsTimer,
        openTimerSlider,
        setOpenTimerSlider, setLayoutSlide } = useContext(AppContext);
        const navigate = useNavigate();
    return (
        <div style={{padding:"0 15px"}}>
           
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
                    onClick={() => {
                        navigate("/screen1")
                        setSelectSlider(false);
                        setIsTimer(false);
                        setOpenTimerSlider(false);
                        setLayoutSlide(false);
                    }}
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
