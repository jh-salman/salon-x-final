import React, { useContext, useState } from 'react'
import CurvedLine from '../component/CurvedLine'
import Profile from '../component/Profile';
import { AppContext } from '../../context/AppContext';
import CompanyHeader from '../component/CompanyHeader';
import TopStats from '../../components/TopStats';
import ClientList from '../../components/ClientList';
import SetTimmer from '../../components/screen2/SetTimmer';
import WaitingList from '../../components/WaitingList';
import BottomButton from '../../components/phone-items/BottomButton';
import Screen2 from './Screen2';
import { useNavigate } from 'react-router-dom';
import TransparentButton from '../component/TransparentButton';
import TimeBar from '../component/TimeBar';
import Cylinder from '../component/Cylinder';
import DynamicDate from '../component/DynamicDate';
import HalfPinkCurved from '../component/HalfPinkCurved';
import Name from '../component/Name';
import ClientReviewButtons from '../component/ClientReviewButtons';
import SocialIink from '../component/SocialIink';


function Screen1() {
    const navigate = useNavigate();
    //   const [animateRight, setAnimateRight] = useState(false);
    // const { isTimer, openTimerSlider, selectSlider } = useContext(AppContext);
    const handleIncrease = () => {
        setThermoValue(prev => {
            const updated = Math.min(prev + 20, 100); // 100-এর বেশি যাবে না
            console.log("Updated thermoValue:", updated);
            return updated;
        });
    };

    const {
        selectSlider,
        setSelectSlider,
        isTimer,
        setIsTimer,
        openTimerSlider,
        setOpenTimerSlider, layoutSlide,
        setLayoutSlide, thermoValue,
        setThermoValue } = useContext(AppContext);

    const selectedClientData = {
        name: "Jon Klein",
        service: "Full lived-in color",
        price: 220,
        color: "#00d5ff",
        consultationDate: "8.15.2025",
        duration: "45 min",
        notes: "Redken shades EQ 7N. 7WB. No left developer.\nNext time use more 7N\nA Kool dude!!!\nSister in law is pregnant and expecting twins. They just\n started rebuilding the cabin. Jennifer is going to FSU",
        services: [
            { name: "Balayage", price: 150 },
            { name: "Toner Application", price: 60 }
        ],
        recommendations: [
            { name: "Deep Conditioning Treatment", price: 50 }
        ],
        homeCare: [
            { name: "Rusk: Rusk COLORxConditioner", price: 25, img: "./img1.png" },
            { name: "Rusk: Rusk VHAB Shampoo", price: 30, img: "./img2.png" },

        ]
    }
    const handleSlide = () => {
        setLayoutSlide(true);
    };

    return (
        <div style={{ position: "relative", }}>
            <div onClick={handleSlide} style={{ height: "400px", width: "40px", cursor: "pointer", position: "absolute", right: "0", top: "320px", zIndex: "1000" }} className="touchableDiv">

            </div>
            <div

                style={{
                    position: "absolute",
                    // background:"blue",
                    top: "20px",
                    right: "5px",
                    zIndex: "10000",
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",

                }}
                className="date"
            >
                <DynamicDate />
            </div>
            {/* <div onClick={handleSlide} style={{ height: "40px", width: "50px", background:"red",borderRadius:"50%",cursor: "pointer", position: "absolute", left: "0", top: "320px", zIndex: "1000" }} className="touchableDiv">

            </div> */}

            <div style={{
                position: "relative",
                transform: layoutSlide ? "translateX(-110%)" : "translateX(0)",
                transition: "transform 0.5s ease",
                zIndex: "100"

            }}>
                <div class style={{
                    position: "absolute",
                    // width: "100%",
                    background: "black",
                    zIndex: "10",

                }}>
                    <div style={{
                        position: "absolute",
                        top: "-10px",
                        right: "-375px"
                    }}>
                        <CurvedLine />
                    </div>
                    <div style={{
                        zIndex: "100",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    }} className="screen2">

                        {/* <Screen2 /> */}
                    </div>
                    <div style={{
                    }}>
                        <div style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "380px",
                            height: "250px",
                            zIndex: "2",        //   backgroundColor: "red",
                            transition: "transform 0.5s ease",
                            transform: selectSlider ? "translateX(-100%)" : "translateX(0)"
                        }}>

                            <Profile />


                        </div>

                        <div style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "380px",
                            height: "250px",
                            //   backgroundColor: "red",
                            zIndex: '1'
                            //   transition: "transform 0.5s ease",
                            //   transform: selectSlider ? "translateX(-100%)" : "translateX(0)"
                        }}>
                            <TopStats />



                        </div>
                        <div className='company-header' style={{
                            width: "370px",
                            height: "70px",
                            // background:"blue",
                            top: "270px",
                            position: "absolute",
                            left: "0"
                        }} >
                            <CompanyHeader />
                            {/* <CompanyHeader /> */}

                        </div>
                        <div className="client-list" style={{
                            width: "335px",
                            height: "200px",
                            // background:"blue",
                            top: "370px",
                            position: "absolute",
                            left: "0",
                            transition: "transform 0.5s ease",
                            transform: isTimer ? "translateX(-100%)" : "translateX(0%)"
                        }}>
                            <ClientList />

                        </div>
                        <div style={{
                            position: "absolute",
                            top: "340px",
                            left: "0",
                            width: "380px",
                            height: "250px",
                            zIndex: "2",
                            //   backgroundColor: "red",
                            transition: "transform 0.5s ease",
                            transform: isTimer ? "translateX(0%)" : "translateX(-100%)"
                        }}>

                            <SetTimmer />


                        </div>
                        <div className="waiting-list"
                            style={{
                                position: "absolute",
                                top: "565px",
                                left: "0",
                                width: "380px",
                                height: "250px",
                                zIndex: "2"
                            }}>
                            <WaitingList />

                        </div>
                        <div className="buttons"
                            style={{
                                position: "absolute",
                                backgroundColor: "red",
                                top: "800px",
                                //   bottom:"20px",
                                left: "-15px",
                                background: "black",
                                width: "400px",
                                height: "70px",
                                zIndex: "20"
                            }}>
                            <BottomButton />

                        </div>
                    </div>
                </div>

            </div>
            <div style={{ position: "relative", height: "852px", width: "393px", overflow: "hidden", zIndex: "1" }}>





                <div style={{ position: "relative", height: "100%", width: "100%", }}>
                    <div style={{
                        position: "absolute",
                        top: "-10px",
                        right: "18px"
                    }}>
                        <HalfPinkCurved />
                    </div>
                    {/* <div onClick={() => {
                        navigate("/screen1")
                        setSelectSlider(false);
                        setIsTimer(false);
                        setOpenTimerSlider(false);
                    }} style={{
                        position: "absolute",
                        zIndex: "10",
                        top: "10px",
                        left: "10px", color: "#fff", fontSize: "20px"
                    }}>
                        <p  > Back </p>
                    </div> */}
                    <div style={{ width: "292px", height: "141px", position: "relative", margin: "10px auto", }} className="profile-and-name-number">
                        <img style={{ position: "absolute", left: "30%" }} src='./avatar.png' />
                        <div style={{ position: "absolute", bottom: "-38%", left: "-15%" }}>
                            <Name />
                        </div>

                    </div>

                    <div style={{
                        position: "absolute",
                        top: "41%",
                        right: "19px",
                    }}>
                        <TimeBar />
                    </div>
                    <div style={{ position: "absolute", top: "300px", right: "19px", zIndex: "1" }} className="cylinder">

                        <Cylinder />
                        {/* <Muse /> */}


                    </div>
                    <div className="middle-card-section" style={{ position: "absolute", top: "20%", left: "0%", height: "500px", width: "390px", paddingLeft: "12px" }}>

                        {/* consultation  */}
                        <div onClick={handleIncrease} style={{ marginTop: '20px', position: "absolute", left: "10px", width: "360px", height: "118px", padding: "0 10px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px", border: "1px solid white" }}>
                            <div style={{
                                position: "absolute", top: "-10px", left: "33%"
                            }}>
                                <TransparentButton title={"Consultation"} />
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}>
                                <span style={{
                                    color: " #AAAAAA",
                                    fontSize: '14px',
                                    display: 'inline-block',
                                    marginRight: '10px',
                                    paddingRight: "20px",
                                    position: 'relative',
                                    top: '10px'
                                }}>{selectedClientData?.consultationDate}
                                </span>
                                <span style={{ fontSize: '14px', color: " #AAAAAA", position: 'relative', top: '10px' }}>
                                    {selectedClientData?.duration}</span>
                            </div>
                            <p style={{
                                marginTop: '10px',
                                fontFamily: " Lato",
                                fontWeight: 400,
                                fontStyle: "Regular",
                                fontSize: "12px",
                                lineHeight: "9.99px",
                                width: "288px",
                                paddingBottom: "5px",
                                color: "white"
                            }}>
                                <br />
                                {selectedClientData?.notes}
                            </p>
                        </div>

                        <div onClick={handleIncrease} style={{ marginTop: '20px', position: "absolute", top: "29%", width: "311px", height: "153px", padding: "0 10px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px", border: "1px solid white" }}>
                            <div style={{
                                position: "absolute", top: "-10px", left: "38%"
                            }}>
                                <TransparentButton title={"Services"} />
                            </div>

                            <div>
                                {selectedClientData?.services?.map((service, index) => (
                                    <div key={index} style={{
                                        display: "flex", justifyContent: "space-between", alignItems: "center",
                                        padding: "0 10px", marginTop: "20px", color: " #AAAAAA", fontSize: "12px"
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <div style={{
                                                width: "10px", height: "10px", borderRadius: "50%",
                                                backgroundColor: "blue"
                                            }}></div>
                                            <span>{service.name}</span>
                                        </div>
                                        <span>${service.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{
                                position: "absolute", top: "72px", left: "38%"
                            }}>
                                <TransparentButton title={"Recomandation"} />
                            </div>


                            <div style={{ position: "absolute", top: "100px", left: "10px", width: "275px" }}>
                                {selectedClientData?.recommendations?.map((rec, index) => (
                                    <div key={index} style={{
                                        display: "flex", justifyContent: "space-between", alignItems: "center",
                                        padding: "10px", color: " #AAAAAA", fontSize: "11px", width: "100%"
                                    }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <div style={{
                                                width: "10px", height: "10px", borderRadius: "50%",
                                                backgroundColor: "white"
                                            }}></div>
                                            <span>{rec.name}</span>
                                        </div>
                                        <span>${rec.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Home and Care */}
                    </div>
                    <div onClick={handleIncrease} style={{ marginTop: '20px', position: "absolute", top: "55%", left: "12px", width: "311px", height: "118px", padding: "0 10px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px", border: "1px solid white" }}>
                        <div style={{
                            position: "absolute", top: "-15px", left: "38%"
                        }}>
                            <TransparentButton title={"Home Care"} />
                        </div>
                        <div style={{ paddingTop: "15px" }}>
                            {selectedClientData?.homeCare?.map((item, index) => (
                                <div key={index} style={{
                                    display: "flex", justifyContent: "space-between", alignItems: "center",
                                    padding: "0 10px", color: " #AAAAAA", fontSize: "11px"
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <div >
                                            <img src={item.img} />
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                    <span>${item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="messages-button" style={{
                        position: "absolute",
                        top: "660px", left: "28%"
                    }}>
                        <TransparentButton title="Messages/update" />
                    </div>

                    <div onClick={handleIncrease} className="clientReviewButton" style={{ position: "absolute", bottom: "30px", left: "-16px" }}>
                        <ClientReviewButtons />
                    </div>
                    <div className="clientReviewButton" style={{ position: "absolute", bottom: "20px", left: "60px" }}>
                        <SocialIink />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Screen1
