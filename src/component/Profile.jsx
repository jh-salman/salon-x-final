import React, { useContext, useRef, useState } from 'react';
import { AppContext } from '../context/AppContext';


function Profile() {
  const buttonRef = useRef(null);
  const [ballAtRight, setBallAtRight] = useState(false);
  const [ballOffset, setBallOffset] = useState(0);
  const { setSelectSlider, setIsTimer} = useContext(AppContext);
//   const [showScreen2, setShowScreen2] = useState(false);




  const handleMuseClick = () => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth - 20;
      const isMovingRight = !ballAtRight;

      setBallOffset(isMovingRight ? buttonWidth : 0);
      setTimeout(() => {
        setSelectSlider(isMovingRight);
        if (!isMovingRight) {
          setIsTimer(false);
        }
      }, 300);
      // context updated after slide
      setBallAtRight(isMovingRight);
    }
  };


  return (
  <div style={{
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    width: '360px',
    height: '250px',
    borderTopRightRadius: "600px",
    borderBottomRightRadius: "51px",
    padding: '16px',
    textAlign: 'center',
  }}>
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
            zIndex:10
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
              fontWeight: "900",
              fontFamily: "sans-serif",
              userSelect: "none",
              position: "relative",
              textShadow: "0 0 1px #FF6826, 0 0 2px rgba(255,104,38,0.8)"
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
