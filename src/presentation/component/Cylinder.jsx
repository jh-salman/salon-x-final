import React, { useState, useRef, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
// import GlassBall from './GlassBall';

function Cylinder() {
  const { thermoValue, setThermoValue} = useContext(AppContext)
  const [progress, setProgress] = useState(thermoValue);
  useEffect(() => {
    console.log("thermoValue", thermoValue);
    setProgress(thermoValue);
  }, [thermoValue]);
  const [rotateBall, setRotateBall] = useState(false);
  // For muse button draggable ball
  const [ballOffset, setBallOffset] = useState(0);
  const ballRef = useRef(null);
  const buttonRef = useRef(null);

  const interpolateColor = (progress) => {
    // Always return solid pink at full opacity for overlay (no gradient, no alpha)
    const pink = [182, 54, 234]; // solid pink
    return `rgba(${pink.join(',')}, 1)`;
  };

  const totalBarHeight = 1500;
  const fillHeight = (progress / 100) * totalBarHeight;
  const fillY = 234 + (totalBarHeight - fillHeight);

  console.log("progress", progress);

  return (
    <div style={{
      position:"relative"
    }}>
      <div style={{  }}>
        <svg
          width="48"
          height="400"
          viewBox="0 0 458 2005"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <path
            d="M3.01598 157.14V1817.52C3.01598 1817.52 -2.98346 1995.19 217.508 2001.83C438 2008.47 455 1817.52 455 1817.52L438.001 157.14C438.001 157.14 411.501 13.6701 237.508 3.4581C63.5142 -6.75392 3.01598 157.14 3.01598 157.14Z"
            stroke="url(#cylinder3D)"
            strokeWidth="5"
            filter="url(#cylinderOuterGlow)"
          />
          <path
            d="M11.0153 163.983V1811.9C11.0153 1811.9 5.25482 1988.24 216.966 1994.83C428.677 2001.42 445 1811.9 445 1811.9L428.678 163.983C428.678 163.983 403.233 21.5901 236.169 11.4547C69.1043 1.31927 11.0153 163.983 11.0153 163.983Z"
            stroke="url(#paint1_linear_48_9)"
            strokeWidth="5"
          />
          <path
            d="M11.0153 163.983V1811.9C11.0153 1811.9 5.25482 1988.24 216.966 1994.83C428.677 2001.42 445 1811.9 445 1811.9L428.678 163.983C428.678 163.983 403.233 21.5901 236.169 11.4547C69.1043 1.31927 11.0153 163.983 11.0153 163.983Z"
            stroke="#227ACB"
            strokeWidth="5"
          />
          <g filter="url(#filter0_d_48_9)">
          </g> */}

          {/* Custom vertical progress bar */}
          {/* Gradient defs for progress bar (unused, can be ignored for solid pink overlay) */}

          <g id="custom-progress">
            {/* Blue base progress bar */}
            <rect
              x="220"
              y="234"
              width="18"
              height={totalBarHeight}
              fill="rgb(0,191,255)"
              rx="4"
            />
            {/* Pink overlay progress bar - only render if progress > 0 */}
            {progress > 0 && (
              <rect
                x="220"
                y={fillY}
                width="18"
                height={fillHeight}
                fill={interpolateColor(progress)}
                rx="4"
              />
            )}
            {/* Blue static dots */}
            {[234, 534, 834, 1134, 1434].map((cy, idx) => (
              <circle key={`blue-${idx}`} cx="229" cy={cy} r="36" fill="rgb(0,191,255)" />
            ))}
            {/* Pink overlay dots, only render if fully within pink bar and progress > 0 */}
            {progress > 0 &&
              [234, 534, 834, 1134, 1434].map((cy, idx) => {
                const dotThreshold = 234 + totalBarHeight - fillHeight;
                return cy >= dotThreshold ? (
                  <circle
                    key={`pink-${idx}`}
                    cx="229"
                    cy={cy}
                    r="36"
                    fill={interpolateColor(progress)}
                  />
                ) : null;
              })}
          </g>

          {/* <defs>
            {/* Glow filter for cylinder */}
            <filter id="cylinderOuterGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feFlood flood-color="#B636EA" flood-opacity="1" result="flood" />
              <feComposite in="flood" in2="SourceGraphic" operator="in" result="coloredBlur" />
              <feGaussianBlur in="coloredBlur" stdDeviation="30" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* 3D gradient for cylinder */}
            <linearGradient id="cylinder3D" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFC0CB" />
              <stop offset="40%" stopColor="#FF69B4" />
              <stop offset="70%" stopColor="#9370DB" />
              <stop offset="100%" stopColor="#1E90FF" />
            </linearGradient>
            <radialGradient id="cylinderGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FFAD26" />
              <stop offset="100%" stopColor="#B636EA" />
            </radialGradient>
            <radialGradient
              id="dotOrange"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(229 471.5) rotate(90) scale(26.5 28)"
            >
              <stop stopColor="#FFAD26" />
              <stop offset="1" stopColor="#FF6826" />
            </radialGradient>
            <radialGradient
              id="dotBlue"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(229 471.5) rotate(90) scale(26.5 28)"
            >
              <stop stopColor="#00BFF5" />
              <stop offset="1" stopColor="#00A2F8" />
            </radialGradient>
            <radialGradient
              id="paintOrange"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(229 471.5) rotate(90) scale(26.5 28)"
            >
              <stop stopColor="#FFAD26" />
              <stop offset="1" stopColor="#FF6826" />
            </radialGradient>
           

          {/* <g filter="url(#filter1_ii_48_9)">
            <path
              d="M107.5 1919C107.5 1919 76.6153 1893.06 64.5 1871C50.2959 1845.14 47 1797.5 47 1797.5L51.5 164.5C51.5 164.5 64.4544 120.549 82 98.0002C92.6849 84.2683 100.238 75.1455 114 64.5C136.106 47.4009 150.115 39.579 177.5 34.0002C197.399 29.9464 207.193 28 227.5 28C244.683 28 256.757 30.1373 273.5 34.0002C293.165 38.537 305.204 45.3125 322 56.5C341.955 69.7912 351.455 78.9402 366 98.0002C383.862 121.406 394 168 394 168V1811C394 1811 389.166 1849.8 379.5 1872.5C371.157 1892.1 351 1919 351 1919C351 1919 357.576 1921.05 359.5 1924.5C361.495 1928.08 359.5 1935 359.5 1935C359.5 1935 348.405 1943.42 341.5 1947C328.083 1953.95 322.366 1956.81 308 1961.5C284.835 1969.06 268.828 1969.64 244.5 1971C220.326 1972.36 206.976 1971.38 183 1968C149.183 1963.24 109 1947 101.5 1935C94 1923 100.5 1924.5 107.5 1919Z"
              fill="url(#paint6_linear_48_9)"
              fillOpacity="0.05"
            />
          </g> */}
          {/* <path
            d="M107.5 1919C107.5 1919 76.6153 1893.06 64.5 1871C50.2959 1845.14 47 1797.5 47 1797.5L51.5 164.5C51.5 164.5 64.4544 120.549 82 98.0002C92.6849 84.2683 100.238 75.1455 114 64.5C136.106 47.4009 150.115 39.579 177.5 34.0002C197.399 29.9464 207.193 28 227.5 28C244.683 28 256.757 30.1373 273.5 34.0002C293.165 38.537 305.204 45.3125 322 56.5C341.955 69.7912 351.455 78.9402 366 98.0002C383.862 121.406 394 168 394 168V1811C394 1811 389.166 1849.8 379.5 1872.5C371.157 1892.1 351 1919 351 1919M107.5 1919C100.5 1924.5 94 1923 101.5 1935C109 1947 149.183 1963.24 183 1968C206.976 1971.38 220.325 1972.36 244.5 1971C268.828 1969.64 284.835 1969.06 308 1961.5C322.366 1956.81 328.083 1953.95 341.5 1947C348.405 1943.42 359.5 1935 359.5 1935C359.5 1935 361.495 1928.08 359.5 1924.5 357.576 1921.05 351 1919 351 1919"
            stroke="#FCFCFC"
            strokeOpacity="0.05"
          />
          <defs>
            <filter
              id="filter0_d_48_9"
              x="197"
              y="234"
              width="64"
              height="1217"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_48_9" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_48_9" result="shape" />
            </filter>
            <filter
              id="filter1_ii_48_9"
              x="46.5"
              y="7.5"
              width="373"
              height="1989.59"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="25" dy="25" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_48_9" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-20" />
              <feGaussianBlur stdDeviation="40" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0338737 0 0 0 0 0.438097 0 0 0 0 0.932148 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_48_9" result="effect2_innerShadow_48_9" />
            </filter>
            <linearGradient id="paint0_linear_48_9" x1="-32.9987" y1="1002.7" x2="454.984" y2="1002.7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1CABE6" />
              <stop offset="0.490385" stopColor="#1D0EF2" stopOpacity="0.862692" />
              <stop offset="1" stopColor="#B636EA" />
            </linearGradient>
            <linearGradient id="paint1_linear_48_9" x1="-23.5651" y1="1003.2" x2="444.985" y2="1003.2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1CABE6" />
              <stop offset="1" stopColor="#464EA8" />
            </linearGradient>
            <linearGradient id="paint2_linear_48_9" x1="229.5" y1="234" x2="229.5" y2="1443" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0034C9" />
              <stop offset="1" stopColor="#001037" />
            </linearGradient>
            <radialGradient id="paint3_radial_48_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(229 471.5) rotate(90) scale(26.5 28)">
              <stop stopColor="#00BFF5" />
              <stop offset="1" stopColor="#00A2F8" />
            </radialGradient>
            <radialGradient id="paint4_radial_48_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(229 752.5) rotate(90) scale(26.5 28)">
              <stop stopColor="#00BFF5" />
              <stop offset="1" stopColor="#00A2F8" />
            </radialGradient>
            <radialGradient id="paint5_radial_48_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(229 1033.5) rotate(90) scale(26.5 28)">
              <stop stopColor="#00BFF5" />
              <stop offset="1" stopColor="#00A2F8" />
            </radialGradient>
            <linearGradient id="paint6_linear_48_9" x1="220.5" y1="28" x2="220.5" y2="1969.85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D9D9D9" />
              <stop offset="1" stopColor="#737373" />
            </linearGradient>
            <radialGradient id="paint7_radial_48_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(229 234.5) rotate(90) scale(26.5 28)">
              <stop stopColor="#00BFF5" />
              <stop offset="1" stopColor="#00A2F8" />
            </radialGradient>
          </defs> */}
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          top: "253px",
          right: "12",

          zIndex: 5,

        }}
      >
        <img src='/glass-ball.svg' width={48} />
      </div>

      <div
        // className={rotateBall ? "rotating-ball" : ""}
        className={"rotating-ball"}
        style={{
          position: "absolute",
          top: "260px",
          right: "8px",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          // backgroundColor: "#FF6826",
          zIndex: 1,
          boxShadow: "0 0 20px rgba(46, 115, 244, 0.8), 0 0 40px rgba(21, 152, 228, 0.6), 0 0 60px rgba(255, 104, 38, 0.4)",
        }}
      >
        <svg width="30" height="30" viewBox="0 0 532 532" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_ii_59_9)">
            <path d="M532 266C532 412.908 412.908 532 266 532C119.092 532 0 412.908 0 266C0 119.092 119.092 0 266 0C412.908 0 532 119.092 532 266Z" fill="url(#paint0_radial_59_9)" />
          </g>
          <defs>
            <filter id="filter0_ii_59_9" x="-10" y="-10" width="552" height="552" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="10" dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.388235 0 0 0 0 0.992157 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_59_9" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-10" dy="-10" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.694118 0 0 0 0 0.388235 0 0 0 0 0.992157 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_59_9" result="effect2_innerShadow_59_9" />
            </filter>
            <radialGradient id="paint0_radial_59_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(151.5 184) rotate(71.7876) scale(366.353)">
              <stop stop-color="#D1A1FA" />
              <stop offset="0.308053" stop-color="#4E30E9" />
              <stop offset="0.888714" stop-color="#24147B" />
            </radialGradient>
          </defs>
        </svg>

      </div>
      {/* Rotating ball animation styles */}
      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotating-ball {
          animation: spin 4s linear infinite;
        }
      `}
      </style>

      {/* Muse button */}
       {/* <div style={{
        position: 'absolute',
        top: '300px',
        right: '-60px',
        // transform: 'translateX(-50%)',
        scale:"0.2"

      }}>
        <div
          ref={buttonRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: "20px 60px",
            borderRadius: "50px",
            backgroundColor: "#0A0A0A",
            border: "2px solid #302EFF",
            boxShadow: "0 0 10px rgba(48, 46, 255, 0.8)",
            cursor: 'pointer',
            color: "#FF6826",
            fontSize: "24px",
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
              height: "50px",
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
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "radial-gradient(circle at center, #FF6826, #FFA500)",
                boxShadow: "0 0 20px #FF6826, 0 0 40px rgba(255, 104, 38, 0.5)",
                cursor: "grab",
                top: "5px",
              }}
            />
          </div>
          muse
        </div>
      </div>  */}
    </div>
  )
}

//This c
export default Cylinder;