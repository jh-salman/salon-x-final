import { useState } from "react"
import ClientList from "../components/ClientList"
import CompanyHeader from "../components/CompanyHeader"
import BottomButton from "../components/phone-items/BottomButton"
import CurvedLine from "../components/phone-items/CurvedLine"
// import SetTimmer from "../components/screen2/SetTimmer"
import TopStats from "../components/TopStats"
import WaitingList from "../components/WaitingList"
import Screen3 from "./Screen3"
import HalfPinkCurved from "../components/HalfPinkCurved"
import DynamicDate from "../components/DynamicDate"
import MiniProfile from "../components/MiniProfile"
// import Screen3 from "../screens/Screen3"

function Screen2() {
   const [currentScreen, setCurrentScreen] = useState(1);
   if (currentScreen === 3) {
  return <Screen3 />;
}
  return (
   <div
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden",
                        opacity:""

                    }}>
                       <MiniProfile />
                    <div style={{
                        zIndex: 100,
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        color: 'red',
                        paddingLeft: '5%',
                        // background:'white',
                       
                    }}>
                      <div style={{
                        
                      }}>
                        {/* <HalfPinkCurved />
                         */}
                         {/* <DynamicDate /> */}
                          <TopStats />
                      </div>
                        <CompanyHeader img="./companyname1.png"/>
                        {/* <SetTimmer /> */}
                        {/* <ClientList /> */}
                        <ClientList setCurrentScreen={setCurrentScreen} />
                        <WaitingList />

                    </div>
                       <CurvedLine />
                    <div style={{ position: "absolute", bottom: "30px", left: "20px", zIndex:"100" }}>
                        {/* <BottomButton /> */}
                    </div>




                </div>
        
    )
}

export default Screen2