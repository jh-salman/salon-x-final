import React from 'react';

const CurvedPanel = () => {
  const appContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#111',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  };

  const mainContentStyle = {
    padding: '2rem',
    position: 'relative',
    zIndex: 2,
    color: 'white',
  };

  const curvedPanelStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '300px',
    height: '100vh',
    background: 'linear-gradient(to bottom, #4b006e, #05001c)',
    // Curved border using clip-path (mimics an SVG path for a wavy edge)
    clipPath: 'path("M 0 0 Q 60 200 0 400 Q 60 600 0 800 L 300 800 L 300 0 Z")',
    zIndex: 1,
    // Pseudo-gradient border effect (simulate with box-shadow for now)
    boxShadow: '-2px 0 0 0 #ff00cc',
    // Remove border radius and shadow from original
  };

  return (
    <div style={appContainerStyle}>
      <div style={mainContentStyle}>
        <h1>Main Content</h1>
      </div>
      <div style={curvedPanelStyle}>
        {/* Your side panel content here */}
      </div>
    </div>
  );
};

export default CurvedPanel;