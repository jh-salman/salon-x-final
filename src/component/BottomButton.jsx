import React from 'react'

const wrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "330px",
  marginLeft: "25px"
};
const cardWrapperStyle = {
  padding: "2px",
  borderRadius: "10px",
  background: "linear-gradient(180deg, rgba(177, 177, 177, 0.8) 0.24%, rgba(37, 41, 42, 0.64) 59.71%, rgba(41, 15, 43, 0.8) 88.97%)"
};
const buttonStyle = {
  width: "100px",
  height: "40px",
  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0.24%, rgba(89, 89, 90, 0.3) 100%)",
  borderRadius: "10px",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  color: "white",
  position: "relative"
};
const buttonTextStyle = {
  textAlign: "center",
  paddingTop: "10px",
  fontSize: "13px"
};
const badgeStyle = {
  position: "absolute",
  top: "1px",
  padding: "1px",
  right: "1px",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  border: "2px solid #FA1BFE",
  background: "linear-gradient(180deg, rgba(250, 27, 254, 0.144) 0.24%, rgba(250, 27, 254, 0.432) 100%)"
};
const badgeTextStyle = {
  textAlign: "center",
  fontSize: "10px"
};

function BottomButton() {
    return (
        <>
            <style>
            {`
              @media (min-width: 340px) and (max-width: 360px) {
                .bottom-button-wrapper {
                  transform: scale(0.7);
                  transform-origin: bottom center;
                }
              }
              @media (min-width: 361px) and (max-width: 388px) {
                .bottom-button-wrapper {
                  transform: scale(0.8);
                  transform-origin: bottom center;
                }
              }
            `}
            </style>
            <div className="bottom-button-wrapper" style={wrapperStyle}>
            <div style={cardWrapperStyle}>
                <div style={buttonStyle}>
                    <p style={buttonTextStyle}>Referrals</p>
                    <div style={badgeStyle}> <p style={badgeTextStyle}>3</p>
                    </div>
                </div>
            </div>
            <div style={cardWrapperStyle}>
                <div style={buttonStyle}>
                    <p style={buttonTextStyle}>Reviews</p>
                    <div style={{
                        position: "absolute", top: "1px", padding: "1px", right: "1px", width: "20px", height: "20px", borderRadius: "50%", border: "1px solid #09FAFE2B" , background: "linear-gradient(180deg, rgba(9, 250, 254, 0.136) 0.24%, rgba(5, 171, 248, 0.416) 100%)"
                    }}> <p style={badgeTextStyle}>2</p>
                    </div>
                </div>
            </div>
            <div style={cardWrapperStyle}>
                <div style={buttonStyle}>
                    <p style={buttonTextStyle}>Messages</p>
                    <div style={{
                        position: "absolute", top: "1px", padding: "1px", right: "1px", width: "20px", height: "20px", borderRadius: "50%", border: "2px solid #F4750F85", background: "linear-gradient(180deg, rgba(244, 117, 15, 0.416) 0.24%, rgba(247, 73, 6, 0.528) 100%)"
                    }}> <p style={badgeTextStyle}>7</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default BottomButton