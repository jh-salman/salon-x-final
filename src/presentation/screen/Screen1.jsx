import React, { useContext, useState } from 'react'
import CurvedLine from '../../component/CurvedLine'
import Profile from '../../component/Profile';
import { AppContext } from '../../context/AppContext';
import CompanyHeader from '../../component/CompanyHeader';
import ClientList from '../../component/ClientList';
import SetTimmer from '../../component/SetTimmer';
import WaitingList from '../../component/WaitingList';
import BottomButton from '../../component/BottomButton';
import { useNavigate } from 'react-router-dom';
import TransparentButton from '../../component/TransparentButton';
import TimeBar from '../../component/TimeBar';
import Cylinder from '../../component/Cylinder';
import DynamicDate from '../../component/DynamicDate';
import HalfPinkCurved from '../../component/HalfPinkCurved';
import Name from '../../component/Name';
import SocialIink from '../../component/SocialIink';
import RebookAndCheckout from '../../component/RebookAndCheckout';
import TopStats from '../../component/TopStats';
import Screen2 from './Screen2';


function Screen1() {
    const navigate = useNavigate();

    const handleIncrease = (e) => {
        e.stopPropagation();
        if (e.detail > 1) return;
        setThermoValue(prev => {
            const updated = Math.min(prev + 20, 100);
           
            return updated;
        });
        if (e?.currentTarget) {
            e.currentTarget.style.border = "1px solid #23a8ff";
        }
    };

    const {
        selectSlider,
        isTimer,
        layoutSlide,
        setLayoutSlide,
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
        <div style={{ position: "relative", height:"100%", width:"393px"
         }}>
            <div onClick={handleSlide} style={{ height: "400px", width: "40px", cursor: "pointer", position: "absolute", right: "0", top: "320px", zIndex: "1000" }} className="touchableDiv">

            </div>
            {/* <div

                style={{
                    position: "absolute",
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
            </div> */}
            

            <div style={{
                position: "relative",
                transform: layoutSlide ? "translateX(-110%)" : "translateX(0)",
                transition: "transform 0.5s ease",
                zIndex: "100",
                

            }}>
                <div class style={{
                    position: "absolute",
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
                    }}>
                        <div style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "380px",
                            height: "250px",
                            zIndex: "2",      
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
                            zIndex: '1'
                            
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
            <div style={{ position: "relative", height: "852px", width: "100%", overflow: "hidden", zIndex: "1" }}>
                <div style={{
                    position: "absolute", width:"393px", height: "852px",}}>
                        <Screen2 />
                </div>


            </div>
        </div>
    )
}

export default Screen1
