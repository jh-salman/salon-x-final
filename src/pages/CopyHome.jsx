import React, { useState, useEffect } from 'react'
import Screen0 from '../CopyScreen/Screen0';
import Screen1 from '../CopyScreen/Screen1';
import Screen2 from '../CopyScreen/Screen2';
import Screen3 from '../CopyScreen/Screen3';
import Screen4 from '../CopyScreen/Screen5';

function CopyHome() {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen(1);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const itemStyle = {
    borderRadius: "24px",
    border: "none",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    fontSize: "20px",
    fontWeight: "bold",
    width: "392px",
    height: "851px",
    backgroundColor:"black",
    overflow:"hidden",
    position:"relative"
  };

  const screenWrapper = {
    background: "linear-gradient(180deg, #FF18EC 7.8%, #5333F1 52.06%, #00E7F9 99.27%)",
    width: "393px",
    height: "852px",
    borderRadius:"24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding:"2px"
  };

  const renderScreen = () => {
    switch(currentScreen) {
      case 0: return <Screen0 />;
      case 1: return <Screen1 />;
      default: return <Screen0 />;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#121212",
        position: "relative",
      }}
    >
      {/* Phone Frame */}
      <div style={screenWrapper}>
        <div style={itemStyle}>
          {renderScreen()}
        </div>
      </div>
    </div>
  )
}

export default CopyHome
