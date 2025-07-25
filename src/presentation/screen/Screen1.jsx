import React, { useContext, useState } from 'react'
import CurvedLine from '../../component/CurvedLine'
import Profile from '../../component/Profile';
import { AppContext } from '../../context/AppContext';
import CompanyHeader from '../../component/CompanyHeader';
import ClientList from '../../component/ClientList';
import SetTimmer from '../../component/SetTimmer';
import WaitingList from '../../component/WaitingList';
import BottomButton from '../../component/BottomButton';
import DynamicDate from '../../component/DynamicDate';
import TopStats from '../../component/TopStats';
import Screen2 from './Screen2';
import '../style/screen1.css';


function Screen1() {

    const {
        selectSlider,
        isTimer,
        layoutSlide,
        setLayoutSlide,
           } = useContext(AppContext);

  
    const handleSlide = () => {
        setLayoutSlide(true);
    };

    return (
        <div className="screen1-container">
            <div onClick={handleSlide} className="slide-handle touchableDiv">

            </div>
            <div className="date-screen1">
                <DynamicDate />
            </div>
            

            <div className={`layout-wrapper${layoutSlide ? ' translate' : ''}`}>
                <div className="screen1-background">
                    <div className="curvedline-container">
                        <CurvedLine />
                    </div>
                    <div>
                        <div className="profile-panel" style={{transform: selectSlider ? "translateX(-100%)" : "translateX(0)"}}>

                            <Profile />

                        </div>

                        <div className="topstats-panel">

                            <TopStats />

                        </div>
                        <div className='company-header' >
                            <CompanyHeader />
                            

                        </div>
                        <div className="client-list-wrapper client-list" style={{transform: isTimer ? "translateX(-100%)" : "translateX(0%)"}} >
                            <ClientList />

                        </div>
                        <div className="timer-panel" style={{transform: isTimer ? "translateX(0%)" : "translateX(-100%)"}}>

                            <SetTimmer />


                        </div>
                        <div className="waiting-list-wrapper waiting-list">
                            <WaitingList />

                        </div>
                        <div className="buttons-wrapper buttons">
                            <BottomButton />

                        </div>
                    </div>
                </div>

            </div>
            <div style={{ position: "relative", height: "852px", width: "100%", overflow: "hidden", zIndex: "1" }}>
                <div className="screen2-wrapper">
                        <Screen2 />
                </div>


            </div>
        </div>
    )
}

export default Screen1
