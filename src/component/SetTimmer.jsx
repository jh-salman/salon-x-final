import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function SetTimmer() {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedHours, setSelectedHours] = useState(0);
    const [selectedMinutes, setSelectedMinutes] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const navigate = useNavigate()

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        setIsRunning(false);
                    } else {
                        setMinutes((prev) => prev - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds((prev) => prev - 1);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, seconds, minutes]);

    const handleStart = () => {
        if (!isRunning) {
            let total = (selectedHours * 60 + selectedMinutes) * 60;
            if (total === 0) {
                total = minutes * 60 + seconds;
            }
            if (total > 0) {
                const mins = Math.floor(total / 60);
                const secs = total % 60;
                setMinutes(mins);
                setSeconds(secs);
                setTotalSeconds(total);
                setIsRunning(true);
                setCurrentScreen("screen4");
            }
        } else {
            setIsRunning(true);
        }
    };
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setMinutes(0);
        setSeconds(0);
        setTotalSeconds(0);
        setSelectedHours(0);
        setSelectedMinutes(0);
    };
    const handleAddFiveMinutes = () => {
        const addedMinutes = 5;
        setMinutes((prev) => prev + addedMinutes);
        setTotalSeconds((prev) => prev + addedMinutes * 60);
    };

    const getProgress = () => {
        const remaining = minutes * 60 + seconds;
        return totalSeconds ? ((totalSeconds - remaining) / totalSeconds) * 100 : 0;
    };


    return (
        <>
            <style>
                {`
          @media (min-width: 375px) and (max-width: 390px) {
            .responsive-width-box {
              width: 306px !important;
            }
          }
             @media (min-width: 360px) and (max-width: 374px) {
            .responsive-width-box {
              width: 286px !important;
            }
          }
             @media (min-width: 360px) and (max-width: 385px) {
            .info{
              
            }
          }
        `}
            </style>
            <div
                className="responsive-width-box"
                style={containerStyle}
            >
                <button
                    style={addButtonStyle}
                    onClick={handleAddFiveMinutes}
                >
                    Add
                </button>
                <div style={controlsWrapperStyle}>
                    <button
                      onClick={() => {
                        handleStart();
                        setTimeout(() => navigate("/screen3"), 100);
                      }}
                      style={controlButtonStyle}
                    >
                      Start
                    </button>

                    <button style={controlButtonStyle} onClick={handlePause}>Pause</button>

                    <button style={controlButtonStyle} onClick={handleReset}>Reset</button>
                </div>

                <div style={badgeStyle}>
                    <span style={{ fontSize: "14px", color: "#000" }}>👥</span>
                </div>

                <div className='info' style={infoContainerStyle}>
                    <div style={infoNameStyle}>Jon Klein</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                        <div style={timerWrapperStyle}>
                            <div style={{
                                ...timerCircleStyle,
                                background: `conic-gradient(from 270deg, #FA1BFE ${getProgress() / 2}%, #7600F9 ${getProgress()}%,rgba(25, 54, 69, 0.24) ${getProgress()}%)`
                            }}>
                                <div style={{
                                    position: "absolute",
                                    width: "65px",
                                    height: "65px",
                                    backgroundColor: "#110E16",
                                    borderRadius: "50%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px"
                                }}>
                                    <div style={timeTextStyle}>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</div>
                                    <div style={durationTextStyle}>45 Mins</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}>
                                <div>{selectedHours} Hours</div>
                                <div>{selectedMinutes} Min</div>
                            </div>
                            <div style={selectorsWrapperStyle}>
                                <div style={selectorOptionStyle}>
                                    {[1, 2, 3].map(val => (
                                        <div key={val} onClick={() => setSelectedHours(val)} style={{ ...selectorOptionStyle, opacity: selectedHours === val ? 1 : 0.3 }}>{val}</div>
                                    ))}
                                </div>
                                <div style={selectorOptionStyle}>
                                    {[10, 20, 30].map(val => (
                                        <div key={val} onClick={() => setSelectedMinutes(val)} style={{ ...selectorOptionStyle, opacity: selectedMinutes === val ? 1 : 0.3 }}>{val}</div>
                                    ))}
                                </div>
                            </div>
                        </div>


                    </div>


                </div>

            </div >
        </>
    );
}

export default SetTimmer

const containerStyle = {
  width: "340px",
  height: "210px",
  margin: "10px 0",
  background: "rgba(255, 255, 255, 0.04)",
  borderRadius: "20px",
  padding: "10px 20px",
  color: "white",
  fontFamily: "sans-serif",
  WebkitBackdropFilter: "blur(16px)",
  position: "relative",
  clipPath: "path('M0,0 H320 C280,100 280,200 320,300 H0 Z')",
};
const addButtonStyle = {
  padding: "3px 10px",
  backgroundColor: "#d1d5db",
  color: "#111",
  borderRadius: "8px",
  border: "none",
  fontSize: "10px",
  position: "absolute",
  right: "90px",
  top: "50px",
  cursor: "pointer"
};
const controlsWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  position: "absolute",
  bottom: "10px",
  left: "10px",
  margin: "auto"
};
const controlButtonStyle = {
  padding: "6px 15px",
  backgroundColor: "#d1d5db",
  color: "#000",
  borderRadius: "10px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer"
};
const badgeStyle = {
  position: "absolute",
  bottom: "10px",
  right: "70px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  padding: "6px",
  width: "26px",
  height: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const infoContainerStyle = {
  position: "absolute",
  left: "10px",
  top: "10px"
};
const infoNameStyle = {
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "500",
  marginBottom: "8px"
};
const timerWrapperStyle = {
  position: "relative"
};
const timerCircleStyle = {
  position: "relative",
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const timeTextStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  color: "white"
};
const durationTextStyle = {
  fontSize: "10px",
  color: "#d1d5db",
  fontWeight: "normal"
};
const selectorsWrapperStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "2px"
};
const selectorOptionStyle = {
  fontSize: "9px",
  cursor: "pointer"
};
