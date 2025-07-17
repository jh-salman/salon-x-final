import React from 'react';

function Screen1() {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <p style={styles.education}>HARPER ELLIS EDUCATION</p>
        <h1 style={styles.title}>THE LEGACY PROGRAM</h1>
        <h2 style={styles.subtitle}>FOR EVERY ERA OF YOUR SUCCESS</h2>

        <button style={styles.button}>WELCOME</button>
      </div>

      <div style={styles.logoWrapper}>
        <div style={styles.xLogo}>
          <span style={styles.xLeft}>X</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 20px',
    color: 'white',
    fontFamily: 'sans-serif',
    boxSizing: 'border-box',
  },
  innerContainer: {
    textAlign: 'center',
    marginTop: '80px',
  },
  education: {
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  subtitle: {
    fontSize: '16px',
    fontWeight: 'normal',
    marginBottom: '30px',
  },
  button: {
    background: 'transparent',
    border: '1px solid white',
    borderRadius: '30px',
    color: 'white',
    padding: '10px 30px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  logoWrapper: {
    marginBottom: '20px',
  },
  xLogo: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
    transform: 'rotate(0deg)',
  },
  xLeft: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
  },
};

export default Screen1;
