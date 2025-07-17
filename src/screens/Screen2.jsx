import ClientList from "../components/ClientList"
import CompanyHeader from "../components/CompanyHeader"
import BottomButton from "../components/phone-items/BottomButton"
import CurvedLine from "../components/phone-items/CurvedLine"
import SetTimmer from "../components/screen2/SetTimmer"
import TopStats from "../components/TopStats"
import WaitingList from "../components/WaitingList"

function Screen2() {
  return (
   <div
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "black",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden",
                        opacity:""

                    }}>
                    <div style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        color: 'red',
                        paddingLeft: '5%',
                        // background:'white',
                        opacity:""
                    }}>
                        <TopStats />
                        <CompanyHeader img="./companyname1.png"/>
                        {/* <SetTimmer /> */}
                        <ClientList />
                        <WaitingList />

                    </div>
                    <CurvedLine />
                    <div style={{ position: "absolute", bottom: "30px", left: "20px", zIndex:"100" }}>
                        <BottomButton />
                    </div>




                </div>
        
    )
}

export default Screen2