import React from 'react';

const CurvedLink = () => {
  return (
    <svg width="100%" height="100vh" viewBox="0 0 200 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradientCurve" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00bfff" />
          <stop offset="50%" stopColor="#8a2be2" />
          <stop offset="100%" stopColor="#ff69b4" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#00ffff" flood-opacity="1"/>
          <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#ff00ff" flood-opacity="0.7"/>
        </filter>
      </defs>

      <path filter="url(#glow)"
       d="M 10 0 
           C 100 200, 130 300, 80 500
           S 270 10000, 10 1000"
        stroke="url(#gradientCurve)"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
};

export default CurvedLink;