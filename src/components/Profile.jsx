import React, { useRef, useState } from 'react';
import Screen2 from '../CopyScreen/Screen2';
// import Screen2 from '../copyscreen/screen2.jsx';
// import stylistImg from './profile.png'; // make sure to place the image in this path or update accordingly

function Profile({ setCurrentScreen }) {
  const buttonRef = useRef(null);
  const [ballAtRight, setBallAtRight] = useState(false);
  const [ballOffset, setBallOffset] = useState(0);
  const [showScreen2, setShowScreen2] = useState(false);

  const handleMuseClick = () => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth - 20;
      if (!ballAtRight) {
        setBallOffset(buttonWidth);
        setTimeout(() => setShowScreen2(true), 300); // wait for animation
      } else {
        setBallOffset(0);
        setTimeout(() => setShowScreen2(false), 300);
      }
      setBallAtRight(!ballAtRight);
    }
  };

if (showScreen2) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '393px',
      height: '100vh',
      backgroundColor: '#000',
      zIndex: 9999,
      animation: 'slideIn 0.3s ease forwards'
    }}>
      <Screen2 />
    </div>
  );
}

  return (
    <div style={{ backgroundColor: 'transparent', width: '393px', height: '200px', padding: '16px', textAlign: 'center', borderRadius: '20px' }}>
      <div style={{ position: 'relative', marginBottom: '12px' }}>
        <img
          src="./profile.png"
          alt="Tiffany Styles"
          style={{
            width: '230px',
            height: '160px',
            objectFit: 'cover',
            borderRadius: '16px',
            margin: '0 auto',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-30px',
            left: '10%',
            transform: 'translateX(-50%)',
          }}
        >
          <div
            ref={buttonRef}
            onClick={handleMuseClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: "5px 20px",
              borderRadius: "50px",
              backgroundColor: "#0A0A0A",
              border: "2px solid #302EFF",
              boxShadow: "0 0 10px rgba(48, 46, 255, 0.8)",
              cursor: 'pointer',
              color: "#FF6826",
              fontSize: "10px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              userSelect: "none",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "20px",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: `${ballOffset}px`,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at center, #FF6826, #FFA500)",
                  boxShadow: "0 0 20px #FF6826, 0 0 40px rgba(255, 104, 38, 0.5)",
                  cursor: "pointer",
                  top: "1px",
                  transition: "left 0.3s ease",
                }}
              />
            </div>
            muse
          </div>
        </div>
      </div>
      <div style={{ color: '#CFFFFF', fontSize: '24px', fontWeight: '600' }}>Tiffany Styles</div>
    </div>
  );
}


// Animation for slide-in effect
// Inject style tag for slideIn animation
<style>
{`
@keyframes slideIn {
  0% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
`}
</style>

export default Profile;
