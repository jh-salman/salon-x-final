import React from 'react'
import CylinderSlider from '../components/CylinderSlider'
// import GlassProgress from '../components/CopyCylinder'

const Cylinder = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      
      <div style={{ marginBottom: '50px' }}>
        <CylinderSlider />
      </div>
      
    </div>
  )
}

export default Cylinder
