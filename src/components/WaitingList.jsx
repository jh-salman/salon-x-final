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
  const clip1 = 'polygon(0 0, 91% 0, 93% 100%, 0% 100%)';
  const clip2 = 'polygon(0 0, 91% 0, 93% 100%, 0% 100%)';
  const clip3 = 'polygon(0 0, 91% 0, 93% 100%, 0% 100%)';
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "center",
      // backgroundColor:"red",
      width: "393px"
    }}>
      <style>
      {`
        .waiting-list {
          width: 72%;
        }
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
      <div className='waiting-list' style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 10px",
        // background: "black",
        borderRadius: "0",
        width: "82%",
        background: "linear-gradient(180deg, #2D2D3A 0%, #000000 100%)",
        clipPath:'polygon(0 0, 91% 0, 93% 100%, 0% 100%)'


      }}>
        <div style={{display:"flex", }}>
          <div style={{
          width: "10px",
          height: "10px",
          background: "yellow",
          borderRadius: "50%",



        }}>
        </div>
        <h1 style={{
          color: "yellow",
          fontSize: "0.6rem",
          fontWeight: "bold",
          paddingLeft:"10px"

        }}>Waiting List</h1>
        </div>
        <div></div>
        
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "left",
        // justifyContent: "center",
        width: "393px",
        borderRadius: "10px",
        padding: " 0",
        // backgroundColor:"blue"


      }}>
        {waitingClients.map((client, index) => (
          <div key={index} className={`waiting-card waiting-card-${index}`} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1px",
            // border:" 1px solid",
            width: index === 0 ? "333px" : index === 1 ? "343px" : "353px",
            // clipPath: index === 0 ? clip1 : index === 1 ? clip2 : clip3,
            // borderImageSource: "linear-gradient(106.33deg, #FFFFFF 4.13%, rgba(38, 38, 38, 0.42) 12.08%)"
            backgroundColor: "linear-gradient(180deg #fff 100%, #000000 100%)",
            margin: "5px 0px"


          }} >
            <div className="waiting-inner" style={{
              width: index === 0 ? "333px" : index === 1 ? "343px" : "353px",
              background: "linear-gradient(180deg, #2D2D3A 0%, #000000 100%)",
              color: "white",
              height: "40px",
              minHeight: "40px",
              marginTop: "5px",
              // padding: "10px 5px",
              // clipPath: index === 0 ? clip1 : index === 1 ? clip2 : clip3,
              padding: "5px 10px"
            }}>
              <h1 style={{
                fontSize: "0.7rem",
                textAlign: "left",
              }}>{client.name}</h1>
              <p style={{
                fontSize: "0.5rem",
                textAlign: "left",
              }}>{client.service}</p>
            </div>


          </div>

        ))}
      </div>
   



    </div >
  )
}

export default WaitingList
