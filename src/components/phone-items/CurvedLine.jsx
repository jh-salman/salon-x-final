import React from 'react';

const CurvedLine = () => {


    const screenContentStyle = {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
    };
    const svgLine = {
        position: "absolute",
        zIndex: "100",
        right:"0",
        top:"0"
    };

    const svgStyle = {
        width: "436px",
        height: "940px",
        position: 'absolute',
        top: '-38px',
        left: '-34px',
        opacity: "1",
        // filter: "blur(2px)"
    };

    return (

        <div style={screenContentStyle}>
            <div style={svgLine}>
                <svg width="109" height="852" viewBox="0 0 109 852" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="0" y="-24" width="145.45" height="893.883"><div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(10px)', height: '100%', width: '100%' }}></div></foreignObject><g filter="url(#filter0_d_584_4656)" data-figma-bg-blur-radius="20">
                        <path d="M33.5 0C33.5 83.1628 68.9846 76.6622 90.9746 111.574C121.72 160.384 103.748 224.298 89.1074 280.096C70.6639 350.386 51 409.145 51 495C51 557.5 66.4999 657 112 829.5" stroke="url(#paint0_linear_584_4656)" stroke-width="3" />
                    </g>
                    <defs>
                        <filter id="filter0_d_584_4656" x="0" y="-24" width="145.45" height="893.883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="8" />
                            <feGaussianBlur stdDeviation="16" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0905796 0 0 0 0 0.158242 0 0 0 0 0.298077 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_584_4656" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_584_4656" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_584_4656" x1="-58.1297" y1="3.49738" x2="-58.1297" y2="852.002" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0721154" stop-color="#FF18EC" />
                            <stop offset="0.504808" stop-color="#5333F1" />
                            <stop offset="0.966346" stop-color="#00E7F9" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
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
                    style={{ filter: 'blur(10px)' }}
                    strokeLinecap="round"
                    d="M-158886,-1048769C-158886.390625,-1048754.375,-158886,-1048747,-158886,-1048747C-158886,-1048747,-158886.84375,-1048740.625,-158884,-1048729C-158880.171875,-1048713.25,-158883.3125,-1048720.375,-158876,-1048706C-158867.984375,-1048690.375,-158871.453125,-1048697.375,-158860,-1048684C-158848,-1048670,-158853.390625,-1048678.625,-158840,-1048666C-158829.390625,-1048656,-158825,-1048650,-158825,-1048650L-158817,-1048636L-158810,-1048619L-158805,-1048602L-158803,-1048586L-158803,-1048564L-158806,-1048538L-158811,-1048512L-158820,-1048476L-158829,-1048440L-158846,-1048377L-158856,-1048332L-158861,-1048303L-158865,-1048262L-158867,-1048215L-158865,-1048170L-158859,-1048120L-158853,-1048079L-158845,-1048036L-158837,-1047999L-158828,-1047959L-158820,-1047924L-158808,-1047880L-158803,-1047857L-158787,-1047809L-159263,-1047807L-159255,-1048787L-158885,-1048785C-158885,-1048785,-158885.71875,-1048779.625,-158886,-1048769"
                    fill="#050409"
                    stroke="url(#stroke-color-gradient)"
                    strokeWidth="5"
                />
            </svg>
        </div>
    );
};

export default CurvedLine;
