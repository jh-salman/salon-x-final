import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
// import Screen4 from '../../CopyScreen/Screen5';
// import { AppContext } from "../context/AppContext";

// import Screen4 from './screen4';

function SetTimmer() {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedHours, setSelectedHours] = useState(0);
    const [selectedMinutes, setSelectedMinutes] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const { set } = useContext(AppContext);
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
                style={{
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
                }}
            >
                <button
                    style={{
                        padding: "3px 10px",
                        backgroundColor: "#d1d5db",
                        color: "#111",
                        borderRadius: "8px",
                        border: "none",
                        fontSize: "10px",
                        right: "90px",
                        top: "50px",
                        position: "absolute"

                    }}
                    onClick={handleAddFiveMinutes}
                >
                    Add
                </button>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "15px",
                    position: "absolute",
                    bottom: "10px",
                    left: 10,

                    margin: "auto"
                }}>
                    <button
                      onClick={() => {
                        handleStart();
                        setTimeout(() => navigate("/screen3"), 100);
                      }}
                      style={{
                        padding: "6px 15px",
                        backgroundColor: "#d1d5db",
                        color: "#000",
                        borderRadius: "10px",
                        border: "none",
                        fontWeight: "bold"
                      }}
                    >
                      Start
                    </button>

                    <button style={{
                        padding: "6px 15px",
                        backgroundColor: "#d1d5db",
                        color: "#000",
                        borderRadius: "10px",
                        border: "none",
                        fontWeight: "bold"
                    }} onClick={handlePause}>Pause</button>

                    <button style={{
                        padding: "6px 15px",
                        backgroundColor: "#d1d5db",
                        color: "#000",
                        borderRadius: "10px",
                        border: "none",
                        fontWeight: "bold"
                    }} onClick={handleReset}>Reset</button>
                </div>

                <div style={{
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
                }}>
                    <span style={{ fontSize: "14px", color: "#000" }}>👥</span>
                </div>

                <div className='info' style={{ position: "absolute", left: 10, top: 10, }}>
                    <div style={{ textAlign: "center", fontSize: "16px", fontWeight: "500", marginBottom: "8px" }}>Jon Klein</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                        <div style={{
                            position: "relative",
                            width: "90px",
                            height: "90px",
                            borderRadius: "50%",
                            background: `conic-gradient(from 270deg, #FA1BFE ${getProgress() / 2}%, #7600F9 ${getProgress()}%,rgba(25, 54, 69, 0.24) ${getProgress()}%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
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
                                <div>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</div>
                                <div style={{ fontSize: "10px", color: "#d1d5db", fontWeight: "normal" }}>45 Mins</div>
                            </div>
                        </div>

                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}>
                                <div>{selectedHours} Hours</div>
                                <div>{selectedMinutes} Min</div>
                            </div>
                            <div style={{ display: "flex", gap: "30px", marginTop: "2px" }}>
                                <div style={{ fontSize: "9px", cursor: "pointer" }}>
                                    {[1, 2, 3].map(val => (
                                        <div key={val} onClick={() => setSelectedHours(val)} style={{ opacity: selectedHours === val ? 1 : 0.3 }}>{val}</div>
                                    ))}
                                </div>
                                <div style={{ fontSize: "9px", cursor: "pointer" }}>
                                    {[10, 20, 30].map(val => (
                                        <div key={val} onClick={() => setSelectedMinutes(val)} style={{ opacity: selectedMinutes === val ? 1 : 0.3 }}>{val}</div>
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
