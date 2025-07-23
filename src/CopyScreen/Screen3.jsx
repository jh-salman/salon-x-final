// import ClientList from "../components/ClientList"
// import { useScreenContext } from "../context/ScreenContext";

import CompanyHeader from "../components/CompanyHeader"

import CurvedLine from "../components/phone-items/CurvedLine"
import SetTimmer from "../components/screen2/SetTimmer"
import TopStats from "../components/TopStats"
import WaitingList from "../components/WaitingList"
import DynamicDate from "../presentation/component/DynamicDate";
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import MiniProfile from "../components/MiniProfile"
import HalfPinkCurved from "../presentation/component/HalfPinkCurved"


function Screen3() {
  // const { setCurrentScreen } = useScreenContext();
  const { currentScreen, setCurrentScreen } = useContext(AppContext);
  //  const { setCurrentScreen, setSelectedClient } = useContext(AppContext);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        zIndex: 10,
      }}
    >  <div>
        <MiniProfile />
        {/* <HalfPinkCurved /> */}
      </div>

      <div
        style={{
          zIndex: 10,
          position: "absolute",
          top: "0",
          left: "0",
          color: "red",
          paddingLeft: "5%",
        }}
      >
        {/* <DynamicDate /> */}

        <TopStats />
        <CompanyHeader img="./companyname1.png" />
        <SetTimmer onTimerSet={() => setCurrentScreen("screen4")} />
        <WaitingList />
      </div>
      <CurvedLine />
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "20px",
          zIndex: "100",
        }}
      >
        {/* <BottomButton /> */}
      </div>
    </div>
  );
}

export default Screen3