import React from 'react'
import TopStats from '../components/TopStats'
import CompanyHeader from '../components/CompanyHeader'
import ClientList from '../components/ClientList'
import WaitingList from '../components/WaitingList'
import CurvedLine from '../components/phone-items/CurvedLine'
import BottomButton from '../components/phone-items/BottomButton'

function PhoneMockup3() {
  return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        }}>
            <div
                style={{
                    width: '393px',
                    aspectRatio: '393 /852',
                    padding: '4px',
                    background: 'linear-gradient(to right, pink, blue)',
                    borderRadius: '12px',
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "black",
                        borderRadius: "8px",
                        position: "relative",
                        overflow: "hidden",

                    }}>
                    <div style={{
                        zIndex: 10,
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        color: 'red',
                        paddingLeft: '5%'
                        // background:'white'
                    }}>
                        <TopStats />
                        <CompanyHeader />
                        <ClientList />
                        <WaitingList />

                    </div>
                    <CurvedLine />
                    <div style={{ position: "absolute", bottom: "30px", left: "20px", zIndex:"100" }}>
                        <BottomButton />
                    </div>




                </div>
            </div>


        </div>
    )
}
export default PhoneMockup3
