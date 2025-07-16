import React from 'react';

const PhoneMockupWithSvg = () => {
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    minHeight: '100vh',
    padding: '2rem',
  };

  const phoneStyle = {
    width: '380px',
    height: '800px',
    borderRadius: '40px',
    border: '16px solid #222',
    boxShadow: '0 0 30px rgba(0,0,0,0.5)',
    backgroundColor: '#000',
    position: 'relative',
    overflow: 'hidden',
  };

  const notchStyle = {
    width: '150px',
    height: '30px',
    borderRadius: '20px',
    backgroundColor: '#222',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '10px',
    zIndex: 2,
  };

  const screenContentStyle = {
    width: '100%',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const svgStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div style={wrapperStyle}>
      <div style={phoneStyle}>
        <div style={notchStyle}></div>
        <div style={screenContentStyle}>
          <svg
            style={svgStyle}
            viewBox="-159263 -1048787 476 980"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="stroke-color-gradient"
                x1="0.81"
                y1="0.01"
                x2="0.83"
                y2="0.95"
              >
                <stop offset="0" stopColor="#ff18ec" />
                <stop offset="0.48" stopColor="#4645bf" />
                <stop offset="1" stopColor="#0ac5ea" />
              </linearGradient>
            </defs>
            <path
              d="M-158886,-1048769C-158886.390625,-1048754.375,-158886,-1048747,-158886,-1048747C-158886,-1048747,-158886.84375,-1048740.625,-158884,-1048729C-158880.171875,-1048713.25,-158883.3125,-1048720.375,-158876,-1048706C-158867.984375,-1048690.375,-158871.453125,-1048697.375,-158860,-1048684C-158848,-1048670,-158853.390625,-1048678.625,-158840,-1048666C-158829.390625,-1048656,-158825,-1048650,-158825,-1048650L-158817,-1048636L-158810,-1048619L-158805,-1048602L-158803,-1048586L-158803,-1048564L-158806,-1048538L-158811,-1048512L-158820,-1048476L-158829,-1048440L-158846,-1048377L-158856,-1048332L-158861,-1048303L-158865,-1048262L-158867,-1048215L-158865,-1048170L-158859,-1048120L-158853,-1048079L-158845,-1048036L-158837,-1047999L-158828,-1047959L-158820,-1047924L-158808,-1047880L-158803,-1047857L-158787,-1047809L-159263,-1047807L-159255,-1048787L-158885,-1048785C-158885,-1048785,-158885.71875,-1048779.625,-158886,-1048769"
              fill="#050409"
              stroke="url(#stroke-color-gradient)"
              strokeWidth="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockupWithSvg;
