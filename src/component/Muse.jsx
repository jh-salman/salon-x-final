import React, { useRef, useState } from 'react'

function Muse() {
    const [progress, setProgress] = useState(0);
      const [rotateBall, setRotateBall] = useState(false);
      // For muse button draggable ball
      const [ballOffset, setBallOffset] = useState(0);
      const ballRef = useRef(null);
      const buttonRef = useRef(null);
    
     
   
      
      
  return (
    <div>
           <div style={{
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <div
          ref={buttonRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            padding: "4px 12px",
            borderRadius: "10px",
            backgroundColor: "#0A0A0A",
            border: "0.4px solid #302EFF",
            boxShadow: "0 0 1px rgba(48, 46, 255, 0.5)",
            cursor: 'pointer',
            color: "#FF6826",
            fontSize: "4.8px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            userSelect: "none",
            position: "relative"
          }}
          onClick={() => setRotateBall(!rotateBall)}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "10px",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <div
              ref={ballRef}
              onMouseDown={(e) => {
                e.preventDefault();
                const startX = e.clientX;
                const startOffset = ballOffset;
                const handleMouseMove = (moveEvent) => {
                  const delta = moveEvent.clientX - startX;
                  if (buttonRef.current) {
                    const buttonWidth = buttonRef.current.offsetWidth - 60;
                    const newOffset = Math.min(Math.max(startOffset + delta, 0), buttonWidth);
                    setBallOffset(newOffset);
                    const newProgress = (newOffset / buttonWidth) * 100;
                    setProgress(newProgress);
                  }
                };
                const handleMouseUp = () => {
                  window.removeEventListener("mousemove", handleMouseMove);
                  window.removeEventListener("mouseup", handleMouseUp);
                };
                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
              }}
              style={{
                position: "absolute",
                left: `${ballOffset}px`,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "radial-gradient(circle at center, #FF6826, #FFA500)",
                boxShadow: "0 0 2px #FF6826, 0 0 4px rgba(255, 104, 38, 0.3)",
                cursor: "grab",
                top: "1px",
              }}
            />
          </div>
          muse
        </div>
      </div> 
    </div>
  )
}

export default Muse
