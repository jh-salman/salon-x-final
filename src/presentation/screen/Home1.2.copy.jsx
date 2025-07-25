import React from 'react'

function Home1copy() {
  return (
    <div>
      
                 <div style={{ position: "relative", height: "100%", width: "100%", }}>
                    <div style={{
                        position: "absolute",
                        top: "-10px",
                        right: "18px"
                    }}>
                        <HalfPinkCurved />
                    </div>
                   
                    <div
                      className="profile-and-name-number"
                      style={{
                        width: "292px",
                        height: "141px",
                        position: "relative",
                        margin: "10px auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.01)",
                        borderRadius: "20px",
                        boxShadow: "0 0 10px 0 rgba(0,0,0,0.10)",
                        border: "1px solid #E8E8E8",
                      }}
                    >
                        <img
                          style={{
                            position: "absolute",
                            left: "30%",
                            top: "7%",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            border: "3px solid #E8E8E8",
                            objectFit: "cover",
                            background: "#f5f5f5"
                          }}
                          src='./avatar.png'
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-38%",
                            left: "-15%",
                            width: "180px"
                          }}
                        >
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
                    <div onClick={handleIncrease} style={{ marginTop: '20px', position: "absolute", top: "58%", left: "12px", width: "311px", height: "118px", padding: "0 10px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px", border: "1px solid white" }}>
                        <div style={{
                            position: "absolute", top: "-15px", left: "38%"
                        }}>
                            <TransparentButton title={"Home Care"} />
                        </div>
                        <div style={{ paddingTop: "25px" }}>
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
                    <div
                      className="messages-button"
                      style={{
                        position: "absolute",
                        top: "660px",
                        left: "28%",
                        width: "150px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.09)",
                        borderRadius: "12px",
                        border: "1px solid #E8E8E8",
                        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.06)",
                        zIndex: 2,
                      }}
                    >
                        <TransparentButton title="Messages/update" />
                    </div>

                    <div
                      className="clientReviewButton"
                      style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "-12px",
                        width: "170px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        borderRadius: "16px",
                        border: "1px solid #E8E8E8",
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
                        zIndex: 2,
                      }}
                    >
                        {/* <ClientReviewButtons /> */}
                        <RebookAndCheckout onClick={handleIncrease}/>
                    </div>
                    <div
                      className="clientReviewButton"
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "60px",
                        width: "80px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#fff",
                        borderRadius: "16px",
                        border: "1px solid #E8E8E8",
                        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
                        zIndex: 2,
                      }}
                    >
                        <SocialIink />
                    </div>

                </div> 
    </div>
  )
}

export default Home1copy
