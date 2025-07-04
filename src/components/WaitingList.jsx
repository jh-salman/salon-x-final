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
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    }}>
      <div style={{
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding: "10px",
        background:"black",
        borderRadius: "10px",
        width:"340px"
        
      }}>
        <div style={{
            width: "10px",
            height:"10px",
            background: "yellow",
            borderRadius: "50%",
          
           
        
        }}></div>
        <h1 style={{
            color: "yellow",
            fontSize: "0.6rem",
            fontWeight: "bold",
            
        }}>Waiting List</h1>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "350px",
        borderRadius: "10px",
        padding: " 0",

       
      }}>
        {waitingClients.map((client, index) => (
          <div key={index} style={{
            width: "100%",
            background: "black",
            color: "white",
            height: "40px",
            marginTop:"5px",
            padding:"5px",
            borderRadius: "10px",
            }}>
            <h1 style={{
                fontSize:"0.7rem",
                textAlign: "left",
            }}>{client.name}</h1>
            <p style={{
            fontSize: "0.5rem",
            textAlign: "left",
            }}>{client.service}</p>
          </div>
        ))}
      </div>
      <div style={{display: "flex", justifyContent:"space-between", alignItems:"center", width: "350px", marginTop: "5px", padding:"10px 0"}}>
        <div style={{
            height:"50px",
            width:"60px",
            background: "linear-gradient(to bottom,rgb(6, 6, 6),rgb(45, 46, 47))",
            borderRadius: "10px",
        }}><h3>1</h3></div>
        <div style={{
            height:"50px",
            width:"60px",
            background: "linear-gradient(to bottom,rgb(6, 6, 6),rgb(45, 46, 47))",
            borderRadius: "10px",
        }}><h3>2</h3></div>
        <div style={{
            height:"50px",
            width:"60px",
            background: "linear-gradient(to bottom,rgb(6, 6, 6),rgb(45, 46, 47))",
            borderRadius: "10px",
        }}><h3>3</h3></div>
        
      </div>
    </div>
  )
}

export default WaitingList
