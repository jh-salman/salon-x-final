import React from 'react'

const WaitingList = () => {
  const waitingClients = [
    {
      name: 'John Doe',
      service: 'Need Attention',

    },
    {
      name: 'Jane Smith',
      service: 'Need Attention',
    },
    {
      name: 'Alice Johnson',
      service: 'Need Attention',

    }
  ]

  return (
    <div style={containerStyle}>
      <style>
      {`
       
        @media (min-width: 360px) and (max-width: 388px) {
          .waiting-card-0 {
            width: 300px !important;
          }
          .waiting-card-1 {
            width: 310px !important;
          }
          .waiting-card-2 {
            width: 320px !important;
          }
          .waiting-list {
            width: 75% !important;
          }
        }
        .waiting-inner {
          clip-path: polygon(0 0, 91% 0, 93% 100%, 0% 100%);
        }
      `}
      </style>
      <div className='waiting-list' style={waitingListStyle}>
        <div style={innerFlexStyle}>
          <div style={indicatorDotStyle}>
          </div>
          <h1 style={waitingListHeaderTextStyle}>Waiting List</h1>
        </div>
        <div></div>
        
      </div>
      <div style={clientsContainerStyle}>
        {waitingClients.map((client, index) => (
          <div key={index} className={`waiting-card waiting-card-${index}`} style={{ ...cardBaseStyle, width: index === 0 ? "355px" : index === 1 ? "366.9px" : "383.2px" }} >
            <div className="waiting-inner" style={{ ...waitingInnerBaseStyle, width: index === 0 ? "373px" : index === 1 ? "383px" : "394px" }}>
              <h1 style={clientNameStyle}>{client.name}</h1>
              <p style={clientServiceStyle}>{client.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  width: "393px"
};
const waitingListStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 10px",
  borderRadius: "0",
  width: "87%",
  background: "linear-gradient(180deg, #2D2D3A 0%, #000000 100%)",
  clipPath: "polygon(0 0, 91% 0, 93% 100%, 0% 100%)"
};
const innerFlexStyle = {
  display: "flex"
};
const indicatorDotStyle = {
  width: "10px",
  height: "10px",
  background: "yellow",
  borderRadius: "50%"
};
const waitingListHeaderTextStyle = {
  color: "yellow",
  fontSize: "0.6rem",
  fontWeight: "bold",
  paddingLeft: "10px"
};
const clientsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "393px",
  borderRadius: "10px",
  padding: "0"
};
const cardBaseStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1px",
  background: "linear-gradient(180deg #fff 100%, #000000 100%)",
  margin: "5px 0px"
};
const waitingInnerBaseStyle = {
  background: "linear-gradient(180deg, #2D2D3A 0%, #000000 100%)",
  color: "white",
  height: "40px",
  minHeight: "40px",
  marginTop: "5px",
  padding: "5px 10px"
};
const clientNameStyle = {
  fontSize: "0.7rem",
  textAlign: "left"
};
const clientServiceStyle = {
  fontSize: "0.5rem",
  textAlign: "left"
};

export default WaitingList
