import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ClientCard = ({ name, service, price, color, isActive, showTimer, clipPath, onClick }) => {
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
    <div style={{ ...cardBg, cursor: 'pointer' }} onClick={onClick} role="button" tabIndex={0}>
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
            <div
              style={{ color: '#888', fontSize: '0.4rem', textAlign: 'right', lineHeight: '1.2', cursor: 'pointer' }}
            >
              set<br />timer
            </div>
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

  const { setCurrentScreen, setSelectedClientData } = useContext(AppContext);

  // Unique clipPaths
  const clip1 = 'polygon(0 0, 96% 0, 93% 100%, 0% 100%)';
  const clip2 = 'polygon(0 0, 93% 0, 91% 100%, 0% 100%)';
  const clip3 = 'polygon(0 0, 90.7% 0, 89.8% 100%, 0% 100%)';
  const clip4 = 'polygon(0 0, 89.8% 0, 89.8% 100%, 0% 100%)';

  const handleClientClick = (clientData) => {
    setSelectedClientData(clientData);
    setCurrentScreen("screen4");
  };

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
        onClick={() => handleClientClick({
          name: "Cristi Curls",
          service: "Extension install",
          price: 300,
          color: "#ff5ad8",
          consultationDate: "7.2.2025",
          duration: "30 min",
          notes: "Redken shades EQ 7N. 7WB. No left developer.\nNext time use more 7N\nA Kool dude!!!\nSister in law is pregnant and expecting twins. They just started rebuilding the cabin. Jennifer is going to FSU",
          services: [
            { name: "Hair Gloss Treatment", price: 70 },
            { name: "Blonding Service", price: 120 }
          ],
          recommendations: [
            { name: "Blonding Service", price: 120 }
          ],
          homeCare: "Use sulfate-free shampoo and conditioner. Apply hair mask weekly."
        })}
      />
      <ClientCard
        name="Candy Smiles"
        service="Full lived-in color"
        price={220}
        color="#00d5ff"
        isActive={true}
        showTimer={true}
        clipPath={clip2}
        onClick={() => handleClientClick({
          name: "Candy Smiles",
          service: "Full lived-in color",
          price: 220,
          color: "#00d5ff",
          consultationDate: "8.15.2025",
          duration: "45 min",
          notes: "Used Wella Koleston 8/43 and 9/16.\nClient requested warmer tones.\nNext appointment: balayage touch-up.",
          services: [
            { name: "Balayage", price: 150 },
            { name: "Toner Application", price: 60 }
          ],
          recommendations: [
            { name: "Deep Conditioning Treatment", price: 50 }
          ],
          homeCare: "Avoid washing hair daily. Use color-protecting shampoo and conditioner."
        })}
      />
      <ClientCard
        name="Joe Styles"
        service="Men’s haircut and color"
        price={125}
        color="#c47aff"
        isActive={true}
        showTimer={true}
        clipPath={clip3}
        onClick={() => handleClientClick({
          name: "Joe Styles",
          service: "Men’s haircut and color",
          price: 125,
          color: "#c47aff",
          consultationDate: "9.5.2025",
          duration: "40 min",
          notes: "Used Redken for men’s color.\nTrimmed sides and blended top.\nClient prefers natural look.",
          services: [
            { name: "Haircut", price: 60 },
            { name: "Color Touch-up", price: 65 }
          ],
          recommendations: [
            { name: "Scalp Treatment", price: 40 }
          ],
          homeCare: "Use moisturizing shampoo. Avoid heavy styling products."
        })}
      />
      <ClientCard
        name="Nita Haredoo"
        service="Extensions and color consultation"
        price={75}
        color="#888"
        isActive={false}
        showTimer={false}
        clipPath={clip4} 
        onClick={() => {
          setCurrentScreen("screen3");
        }}
      />
    </div>
  );
};

export default ClientList;
