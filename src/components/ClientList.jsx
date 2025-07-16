import React from 'react';

const ClientCard = ({ name, service, price, color, isActive, showTimer, clipPath }) => {
  const cardStyle = {
    background: 'black',
    color: 'white',
    borderRadius: '10px',
    marginBottom: '6px',
    padding: '0.25rem 3rem 0.35rem 0.75rem',
    // width: "150px",
    
    position: 'relative',
    // border: `2px solid ${isActive ? color : 'transparent'}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    ...(clipPath && { clipPath: clipPath }),

  };

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    
  };

  const nameStyle = {
    fontWeight: '600',
    fontSize: '0.8rem',
    color: 'white',
    textAlign: 'left',
  };

  const serviceStyle = {
    fontSize: '0.53rem',
    color: '#ccc',
    marginTop: '3px',
  };

  const priceStyle = {
    fontSize: '0.7rem',
    fontWeight: '500',
    marginRight: showTimer ? '1rem' : '0',
    color: '#ddd',
  };

  const timerStyle = {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    border: `3px solid ${color}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.45rem',
  };

  const circleDot = {
    width: '6px',
    height: '6px',
    background: color,
    borderRadius: '50%',
    position: 'absolute',
    bottom: '-3px',
    left: '10px',
    border: '2px solid #1a1a1a',
  };

  const cardBg ={
    background: `linear-gradient(to bottom, ${color}, black)`,
      ...(clipPath && { clipPath: clipPath }),
      borderRadius:"10px",
      padding:"2px",
      height:"42px",
      marginTop:"5px",
      width:"338px"
  }

  return (
    <div style={cardBg}>
      <div style={cardStyle}>
        <div style={infoStyle}>
          <span style={nameStyle}>{name}</span>
          <span style={serviceStyle}>{service}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={priceStyle}>${price}</span>
          {showTimer ? (
            <div style={timerStyle}>25</div>
          ) : (
            <span style={{ color: '#888', fontSize: '0.4rem', textAlign: 'right', lineHeight: '1.2' }}>
              set<br />timer
            </span>
          )}
        </div>
        {isActive && <div style={circleDot}></div>}
      </div>

    </div>

  );
};

const ClientList = () => {
  const wrapperStyle = {
    width: '400px',
    margin: '0.5rem auto',


  };

  // Unique clipPaths
  const clip1 = 'polygon(0 0, 96% 0, 93% 100%, 0% 100%)';
  const clip2 = 'polygon(0 0, 93% 0, 91% 100%, 0% 100%)';
  const clip3 = 'polygon(0 0, 90.7% 0, 89.8% 100%, 0% 100%)';
  const clip4 = 'polygon(0 0, 89.8% 0, 89.8% 100%, 0% 100%)';


  return (
    <div style={wrapperStyle}>
      <ClientCard
        name="Cristi Curls"
        service="Extension install"
        price={300}
        color="#ff5ad8"
        isActive={true}
        showTimer={true}
        clipPath={clip1}
      />
      <ClientCard
        name="Candy Smiles"
        service="Full lived-in color"
        price={220}
        color="#00d5ff"
        isActive={true}
        showTimer={true}
        clipPath={clip2}
      />
      <ClientCard
        name="Joe Styles"
        service="Men’s haircut and color"
        price={125}
        color="#c47aff"
        isActive={true}
        showTimer={true}
        clipPath={clip3}
      />
      <ClientCard
        name="Nita Haredoo"
        service="Extensions and color consultation"
        price={75}
        color="#888"
        isActive={false}
        showTimer={false}
        clipPath={clip4} 
      />
    </div>
  );
};

export default ClientList;
