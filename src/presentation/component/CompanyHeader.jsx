import React from 'react'

function CompanyHeader() {
    return (
        <div style={{
            padding: '2px', // For border effect
            background: 'linear-gradient(to bottom, #00f0ff, black)',
            borderRadius: '12px',
            display: 'inline-block',
            clipPath: 'polygon(0 0, 100% 0, 92.5% 100%, 0% 100%)',
            width: '345px',
            height: "70px",
            // marginTop: "12%"
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#111',
                borderRadius: '10px',
                padding: '5px 2rem',
                color: 'white',
                fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                clipPath: 'polygon(0 0, 100% 0, 92.5% 100%, 0% 100%)', // ✅ Cor
            }}>
                <div>
                    <img width={190} src='./levellogo.png' />
                </div>
                <p style={{
                fontSize: "21px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #ff00cc, #3333ff)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
                textAlign: "center"
                }}

>
                +
            </p>
            <div>
                <img width={50} src='./logo.png' />
            </div>


        </div>

        </div >
    )
}

export default CompanyHeader
