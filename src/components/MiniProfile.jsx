import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import { ScreenContext } from '../context/ScreenContext'; // adjust the path as needed

function MiniProfile() {
  const { setSelectedClientData, setCurrentScreen } = useContext(AppContext);

  const handleClientClick = () => {
    setSelectedClientData({
      name: "Cristi Curls",
      service: "Extension install",
      price: 300,
      color: "#ff5ad8",
      consultationDate: "7.2.2025",
      duration: "30 min",
      notes: "Redken shades EQ 7N. 7WB. No left developer.\nNext time use more 7N\nA Kool dude!!!\nSister in law is pregnant and expecting twins. They just started rebuilding the cabin. Jennifer is going to FSU",
      services: [
        { name: "Hair Gloss Treatment", price: 70 },
        { name: "Blonding Service", price: 120 }
      ],
      recommendations: [
        { name: "Blonding Service", price: 120 }
      ],
      homeCare: "Use sulfate-free shampoo and conditioner. Apply hair mask weekly."
    });
    setCurrentScreen("screen4");
  };

  return (
    <div
      onClick={handleClientClick}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        width: '50px',
        height:"50px",
        borderRadius:"50%",
        zIndex: 200,

      }}
    >
      {/* <strong>Cristi Curls</strong> */}
     <div style={{textAlign:"center"}}>
         <p style={{ margin: '4px 0', fontSize: '7px' }}>Cristi Curls</p>
      <p style={{ margin: '4px 0', fontSize: '6px', color: '#000' }}>$300</p> 
     </div>
    </div>
  );
}

export default MiniProfile;
