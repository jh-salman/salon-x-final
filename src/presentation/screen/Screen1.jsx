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


function Screen1() {
//   const [animateRight, setAnimateRight] = useState(false);
  const {isTimer, openTimerSlider,selectSlider} = useContext(AppContext);

  return (
    <div style={{
        position:"relative",
        background:"white"
    }}>
     <div style={{
        position:"absolute",
        top:"-10px",
        right:"0"
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
          zIndex:"2",        //   backgroundColor: "red",
          transition: "transform 0.5s ease",
          transform: selectSlider ? "translateX(-100%)" : "translateX(0)"
        }}>
            {/* <TopStats /> */}
            <Profile />
            

        </div>
   
        <div style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "380px",
          height: "250px",
        //   backgroundColor: "red",
          zIndex:'1'
        //   transition: "transform 0.5s ease",
        //   transform: selectSlider ? "translateX(-100%)" : "translateX(0)"
        }}>
            <TopStats />
            
            

        </div>
        <div className='company-header'style={{
            width:"370px",
            height:"70px",
            // background:"blue",
            top:"270px",
            position:"absolute",
            left:"0"
        }} >
            {/* <CompanyHeader /> */}
            <CompanyHeader />

        </div>
        <div className="client-list" style={{
            width:"335px",
            height:"200px",
            // background:"blue",
            top:"370px",
            position:"absolute",
            left:"0",
            transition: "transform 0.5s ease",
            transform:  isTimer? "translateX(-100%)" : "translateX(0%)"
        }}>
            <ClientList />

        </div>
             <div style={{
          position: "absolute",
          top:"340px",
          left: "0",
          width: "380px",
          height: "250px",
          zIndex:"2",   
        //   backgroundColor: "red",
          transition: "transform 0.5s ease",
          transform:  isTimer? "translateX(0%)" : "translateX(-100%)"
        }}>
            {/* <TopStats /> */}
             {/* <Profile /> */}
             <SetTimmer />
            

         </div>  
        <div className="waiting-list"
        style={{
          position: "absolute",
          top:"565px",
          left: "0",
          width: "380px",
          height: "250px",
          zIndex:"2"}}>
            <WaitingList />

        </div>
        <div className="buttons"
        style={{
          position: "absolute",
          backgroundColor:"red",
          top:"800px",
        //   bottom:"20px",
          left: "-15px",
          background:"black",
          width: "400px",
          height: "70px",
          zIndex:"20"}}>
            <BottomButton />

        </div>
     </div>
    </div>
  )
}

export default Screen1
