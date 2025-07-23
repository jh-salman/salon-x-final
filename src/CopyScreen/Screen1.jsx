import ClientList from "../components/ClientList"
import CompanyHeader from "../components/CompanyHeader"
import DynamicDate from "../presentation/component/DynamicDate"
import HalfPinkCurved from "../components/HalfPinkCurved"
import BottomButton from "../components/phone-items/BottomButton"
import CurvedLine from "../components/phone-items/CurvedLine"
import Profile from "../components/Profile"
// import SetTimmer from "../components/screen2/SetTimmer"
import TopStats from "../components/TopStats"
import WaitingList from "../components/WaitingList"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MiniProfile from "../components/MiniProfile"

function Screen1() {

  const { setCurrentScreen, setSelectedClient } = useContext(AppContext);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        opacity: ""

      }}>
      {/* <HalfPinkCurved /> */}
      <MiniProfile />
      <div style={{
        zIndex: 10,
        position: 'absolute',
        top: '0',
        left: '0',
        color: 'red',
        paddingLeft: '5%',
        // background:'white',
        opacity: ""
      }}>
        {/* <DynamicDate /> */}
        {/* <TopStats /> */}

        <Profile />
        <CompanyHeader img="./companyname1.png" />
        {/* <SetTimmer /> */}
        <ClientList />

        <WaitingList />

      </div>
      <CurvedLine />
      <div style={{ position: "absolute", bottom: "30px", left: "20px", zIndex: "100" }}>
        <BottomButton />
      </div>





    </div>

  )
}

export default Screen1