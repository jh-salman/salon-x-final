import React from 'react';

const CompanyHeader = ({img}) => {
    const styles = {
        containerWrapper: {
            padding: '2px', // For border effect
            background: 'linear-gradient(to bottom, #00f0ff, black)',
            borderRadius: '12px',
            display: 'inline-block',
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
            width: '345px',
            height: "70px",
            marginTop: "12%"
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#111',
            borderRadius: '10px',
            padding: '5px 2rem',
            color: 'white',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)', // ✅ Cor
            //   width: '400px',
        },
        companyInfo: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: '2rem',
        },
        companyCode: {
            fontSize: '2rem',
            fontWeight: '800',
            color: 'white',
        },
        companyName: {
            fontSize: '0.3rem',
            color: '#aaa',
            marginTop: '-1.33px',
            letterSpacing: '1px',
        },
        actions: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60px',
            //   gap: '1rem',
        },
        actionText: {
            fontSize: '0.53rem',
            color: '#fff',
        },
        plusButton: {
            background: 'linear-gradient(145deg, #ff00cc, #00ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // For cross-browser support, you might add standard properties too:
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: " 10px 0"
        }

    };


    return (
      <>
        <style>
          {`
            @media (min-width: 360px) and (max-width: 380px) {
              .company-wrapper {
                width: 80% !important;
              }
            }
          `}
        </style>
        <div className="company-wrapper" style={styles.containerWrapper}>
          <div style={styles.container}>
            <img src={img} />
          </div>
        </div>
      </>
    );
};

export default CompanyHeader;
