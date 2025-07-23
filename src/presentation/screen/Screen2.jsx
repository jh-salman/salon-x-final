import React, { useContext } from 'react'
import HalfPinkCurved from '../component/HalfPinkCurved'
import Name from '../component/Name'
import ClientReviewButtons from '../component/ClientReviewButtons'
import SocialIink from '../component/SocialIink'
import TransparentButton from '../component/TransparentButton'
import { AppContext } from '../../context/AppContext'
import DynamicDate from '../component/DynamicDate'
import Cylinder from '../component/Cylinder'
import Muse from '../component/Muse'
import TimeBar from '../component/TimeBar'
// import CylinderSlider from '../../components/CylinderSlider'

function Screen2() {
    const { selectedClientData } = useContext(AppContext);


    if (!selectedClientData || Object.keys(selectedClientData).length === 0) {
        return <div style={{ color: "white", textAlign: "center", marginTop: "50%" }}>Loading client data...</div>;
    }

    return (
        <div style={{ background: "black", }}>
            <div style={{
                position: "absolute",
                top: "0",
                right: "0"
            }}>
                <HalfPinkCurved />
            </div>
            <div style={{ width: "292px", height: "141px", position: "relative", margin: "10px auto", }} className="profile-and-name-number">
                <img style={{ position: "absolute", left: "30%" }} src='./avatar.png' />
                <div style={{ position: "absolute", bottom: "-38%", left: "-10%" }}>
                    <Name />
                </div>

            </div>
            <div className="date">
                <DynamicDate />
            </div>
            <div style={{
                position: "absolute",
                top: "43%",
                right: "10px",
            }}>
                <TimeBar />
            </div>
            <div className="cylinder">
                <div style={{position:"absolute", top:"20px", right:"0px", zIndex:"100"}}>
                    <Cylinder />
                    {/* <Muse /> */}
                </div>
                
            </div>
            <div className="middle-card-section" style={{ position: "absolute", top: "20%", left: "0%", height: "500px", width: "390px", paddingLeft: "12px" }}>

                {/* consultation  */}
                <div style={{ marginTop: '20px', position: "relative", width: "364px", height: "118px", padding: "0 10px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px", border: "1px solid white" }}>
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

                <div style={{ marginTop: '20px', position: "relative", width: "311px", height: "153px", padding: "0 10px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px", border: "1px solid white" }}>
                    <div style={{
                        position: "absolute", top: "-10px", left: "38%"
                    }}>
                        <TransparentButton title={"Services"} />
                    </div>

                    <div>
                        {selectedClientData?.services?.map((service, index) => (
                            <div key={index} style={{
                                display: "flex", justifyContent: "space-between", alignItems: "center",
                                padding: "0 10px", marginTop:"20px",color: " #AAAAAA", fontSize: "12px"
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
              <div style={{ marginTop: '20px', position: "absolute",top:"60%",left:"12px", width: "311px", height: "118px", padding: "0 10px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px", border: "1px solid white" }}>
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
            <div className="messages-button" style={{position:"absolute",
                top:"660px", left:"33%"
            }}>
                <TransparentButton title="Messages/update" />
            </div>

            <div className="clientReviewButton" style={{ position: "absolute", bottom: "1%", left: "-3px" }}>
                <ClientReviewButtons />
            </div>
            <div className="clientReviewButton" style={{ position: "absolute", bottom: "2%", left: "20%" }}>
                <SocialIink />
            </div>

        </div>
    )
}

export default Screen2
