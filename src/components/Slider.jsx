import React, { useState } from "react";

const CustomSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div style={{
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0a0a0a"
    }}>
      <div style={{ position: "relative", width: "90%", height: "10px" }}>
        {/* Glowing Track */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, #00f0ff, #00f0ff)",
          transform: "translateY(-50%)",
          boxShadow: "0 0 8px #00f0ff"
        }} />

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          style={{
            WebkitAppearance: "none",
            width: "100%",
            height: "10px",
            background: "transparent",
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            pointerEvents: "auto",
          }}
        />

        {/* Thumb override */}
        <style>
          {`
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 40px;
              width: 40px;
              border-radius: 50%;
              background: radial-gradient(circle at center, #ff00f5, #9d00ff);
              box-shadow:
                0 0 0 4px rgba(0, 255, 255, 0.3),
                0 0 0 8px rgba(0, 255, 255, 0.2);
              cursor: pointer;
              position: relative;
              z-index: 2;
            }
            input[type=range]::-moz-range-thumb {
              height: 40px;
              width: 40px;
              border-radius: 50%;
              background: radial-gradient(circle at center, #ff00f5, #9d00ff);
              box-shadow:
                0 0 0 4px rgba(0, 255, 255, 0.3),
                0 0 0 8px rgba(0, 255, 255, 0.2);
              cursor: pointer;
              position: relative;
              z-index: 2;
            }
            input[type=range]::-ms-thumb {
              height: 40px;
              width: 40px;
              border-radius: 50%;
              background: radial-gradient(circle at center, #ff00f5, #9d00ff);
              box-shadow:
                0 0 0 4px rgba(0, 255, 255, 0.3),
                0 0 0 8px rgba(0, 255, 255, 0.2);
              cursor: pointer;
              position: relative;
              z-index: 2;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default CustomSlider;
