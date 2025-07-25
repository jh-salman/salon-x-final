import React from "react";

const CustomSlider = ({ value, onChange }) => {
  // Dynamic styles that depend on the current value
  const filledTrackStyle = {
    position: "absolute",
    top: "50%",
    left: 0,
    height: "6px",
    width: `${value}%`,
    background: "linear-gradient(to right, #00f0ff, #9d00ff)",
    transform: "translateY(-50%)",
    borderRadius: "3px",
    zIndex: 1
  };
  const thumbContainerStyle = {
    position: "absolute",
    top: "60%",
    left: `calc(${value}% - 30px)`,
    transform: "translateY(-40%)",
    width: "60px",
    height: "60px",
    pointerEvents: "none",
    zIndex: 2
  };
  return (
    <div style={containerStyle}>
      <div style={{ position: "relative", width: "90%", height: "6px" }}>
        {/* Base Track */}
        <div style={baseTrackStyle} />

        {/* Filled Track */}
        <div style={filledTrackStyle} />

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={onChange}
          style={inputStyle}
        />

        {/* Custom SVG Thumb */}
        <div
          style={thumbContainerStyle}
          dangerouslySetInnerHTML={{__html: `
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <foreignObject x="0.631943" y="0.595692" width="58.7344" height="58.6817"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(5.09px);clip-path:url(#bgblur_0_913_22580_clip_path);height:100%;width:100%"></div></foreignObject><g filter="url(#filter0_d_913_22580)" data-figma-bg-blur-radius="10.1836">
              <ellipse cx="29.9991" cy="24.8448" rx="9" ry="8.97367" fill="url(#paint0_linear_913_22580)"/>
              <path d="M29.9991 16.3711C34.6949 16.3711 38.4991 20.1662 38.4991 24.8447C38.4991 29.5232 34.6949 33.3184 29.9991 33.3184C25.3033 33.3184 21.4991 29.5232 21.4991 24.8447C21.4992 20.1662 25.3034 16.3711 29.9991 16.3711Z" stroke="url(#paint1_linear_913_22580)"/>
              </g>
              <path d="M23.6742 36.1633C25.5981 37.1288 27.7345 37.5974 29.8872 37.5259C32.04 37.4544 34.1403 36.8451 35.9956 35.754C37.8509 34.6629 39.4018 33.1249 40.506 31.2809C41.6103 29.4369 42.2326 27.3461 42.3158 25.2C42.3991 23.0539 41.9407 20.9214 40.9826 18.9979C40.0245 17.0743 38.5975 15.4214 36.8323 14.1907C35.0671 12.9599 33.0202 12.1907 30.8794 11.9536C28.7386 11.7165 26.5724 12.019 24.5793 12.8335" stroke="url(#paint2_linear_913_22580)"/>
              <defs>
              <filter id="filter0_d_913_22580" x="0.631943" y="0.595692" width="58.7344" height="58.6817" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="5.0918"/>
              <feGaussianBlur stdDeviation="10.1836"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_913_22580"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_913_22580" result="shape"/>
              </filter>
              <clipPath id="bgblur_0_913_22580_clip_path" transform="translate(-0.631943 -0.595692)"><ellipse cx="29.9991" cy="24.8448" rx="9" ry="8.97367"/>
              </clipPath><linearGradient id="paint0_linear_913_22580" x1="20.9991" y1="24.8448" x2="39.1482" y2="24.8448" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA1BFE"/>
              <stop offset="1" stop-color="#7600F9"/>
              </linearGradient>
              <linearGradient id="paint1_linear_913_22580" x1="43.0637" y1="25.1868" x2="24.3328" y2="29.4917" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2CCEE0"/>
              <stop offset="1" stop-color="#D60DE5"/>
              </linearGradient>
              <linearGradient id="paint2_linear_913_22580" x1="43.9996" y1="25.3433" x2="26.4996" y2="25.3433" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00DDFF"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              </defs>
            </svg>
          `}}
        />

        {/* Thumb override */}
        <style>
          {`
            input[type=range] {
              -webkit-appearance: none;
            }
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 16px;
              width: 16px;
              background: transparent;
              border-radius: 50%;
              cursor: pointer;
              margin-top: -5px;
              position: relative;
              z-index: 3;
              border: none;
            }
            input[type=range]::-moz-range-thumb {
              height: 16px;
              width: 16px;
              background: rgba(0,0,0,0.3);
              border-radius: 50%;
              cursor: pointer;
              border: none;
            }
            input[type=range]::-ms-thumb {
              height: 16px;
              width: 16px;
              background: rgba(0,0,0,0.3);
              border-radius: 50%;
              cursor: pointer;
              border: none;
            }
            input[type=range]::-webkit-slider-runnable-track {
              height: 6px;
              background: transparent;
            }
            input[type=range]::-moz-range-track {
              height: 6px;
              background: transparent;
            }
            input[type=range]::-ms-track {
              height: 6px;
              background: transparent;
              border-color: transparent;
              color: transparent;
            }
          `}
        </style>
      </div>
    </div>
  );
};

const containerStyle = {
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  position: "relative"
};
const baseTrackStyle = {
  position: "absolute",
  top: "50%",
  left: 0,
  right: 0,
  height: "6px",
  background: "#444",
  transform: "translateY(-50%)",
  borderRadius: "3px",
  zIndex: 0
};
const inputStyle = {
  WebkitAppearance: "none",
  width: "100%",
  height: "60px",
  marginTop: "-27px",
  background: "transparent",
  cursor: "pointer",
  position: "relative",
  zIndex: 3
};

export default CustomSlider;