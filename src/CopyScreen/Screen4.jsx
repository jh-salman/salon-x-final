import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";

import HalfPinkCurved from '../components/HalfPinkCurved';
import DynamicDate from '../presentation/component/DynamicDate';
import CylinderSlider from '../components/CylinderSlider';
// import Name from '../components/screen4/name';
import Compo from '../components/screen4/Compo';
import avatarImg from '/avatar.png';
import shampooImg from '/shampo.png';

const Screen4 = () => {
  const { selectedClientData } = useContext(AppContext);

  const today = new Date();
  if (!selectedClientData || Object.keys(selectedClientData).length === 0) {
    return <div style={{ color: "white", textAlign: "center", marginTop: "50%" }}>Loading client data...</div>;
  }


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        opacity: "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

      }}
    >
      {/* Phone Frame */}
      {/* <div style={screenWrapper}>
        <div style={itemStyle}> */}
      <div style={{
        fontFamily: 'Arial, sans-serif',
        background: 'black',
        color: 'white',
        padding: '20px',
        borderRadius: '20px',
        width: '393px',
        height: '852px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Right pink curve */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,


        }}>
          <HalfPinkCurved />

        </div>

        {/* Day */}
        <DynamicDate />

        {/* Profile */}
        <div style={{
          height: "141px",
          width: "292px",
          // background: "red",
          margin: "30px auto",
          position: "relative",


        }}>
          <div style={{ textAlign: "center" }}>
            <img src={avatarImg} alt="Avatar" />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: "-15px",
            left: "-20px",
            width: "292px",
            height: "40px"
          }}>
            {/* <div style={{
                        display: "flex",
                        justifyContent:"center",
                        alignItems:"center",
                      
                        margin:"5px auto",
                        fontSize:"16px"
                        
                    }}>
                    <img src='./nav.png' height={"120px"}/>
                        <p>Jon Klein  541-556-6923   :</p>
                       
                    </div> */}
            {/* <Name /> */}

          </div>
        </div>

        {/* Consultation */}
        <div style={{ marginTop: '20px', position: "relative", width: "364px", height: "118px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px" }}>
          <button
            style={{
              fontSize: "12px",
              height: "31px",
              width: "134px",
              border: "2px solid white",
              borderRadius: "8px",
              background: "transparent",
              color: "white",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              position: "absolute",
              top: "-20px",
              left: "30%"
            }}
          >
            Consultation
          </button>
          <span style={{
            color: " #AAAAAA",
            fontSize: '14px',
            display: 'inline-block',
            marginRight: '10px',
            paddingRight: "20px",
            position: 'relative',
            top: '10px'
          }}>{selectedClientData?.consultationDate}</span>
          <span style={{ fontSize: '14px', color: " #AAAAAA", position: 'relative', top: '10px' }}>{selectedClientData?.duration}</span>
          <p style={{
            marginTop: '10px',
            fontFamily: " Lato",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "12px",
            lineHeight: "9.99px",
            width: "288px",
            paddingBottom: "5px"
          }}>
            <br />
            {selectedClientData?.notes}
          </p>
        </div>


        {/* Services */}
        <div style={{
          width: "311px",
          borderRadius: "12px",
          height: "153px",
          background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)",
          fontSize: "13px",
          padding: " 10px",
          fontFamily: " Lato",
          fontWeight: 400,
          fontStyle: "Regular",
          position: "relative",
          margin: "20px 0"
        }}>
          <button
            style={{
              fontSize: "12px",
              height: "31px",
              width: "134px",
              border: "2px solid white",
              borderRadius: "8px",
              background: "black",
              color: "white",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              position: "absolute",
              top: "-14px",
              left: "30%"
            }}
          >
            Services
          </button>
          <Section items={selectedClientData?.services || []} />
          <button
            style={{
              fontSize: "12px",
              height: "31px",
              width: "134px",
              border: "2px solid white",
              borderRadius: "8px",
              background: "black",
              color: "white",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              position: "absolute",
              top: "85px",
              left: "30%"
            }}
          >
            Recommendations
          </button>
          <h4 style={{ borderBottom: '1px solid #444', padding: '10px', paddingBottom: "5px" }}></h4>
          {/* Recommendations */}
          <Section items={selectedClientData?.recommendations || []} />
        </div>

        {/* Home Care */}
        <div style={{ border: "1px solid white", marginTop: '30px', position: "relative", width: "311px", height: "118px", background: "linear-gradient(99.11deg, rgba(29, 18, 16, 0) 42.5%, rgba(217, 241, 244, 0.32) 108.55%)", borderRadius: "12px" }}>
          <button
            style={{
              fontSize: "12px",
              height: "31px",
              width: "134px",
              border: "2px solid white",
              borderRadius: "8px",
              background: "black",
              color: "white",
              padding: "0 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              position: "absolute",
              top: "-18px",
              left: "30%"
            }}
          >
            Home Care
          </button>
          {Array.isArray(selectedClientData?.homeCare)
            ? selectedClientData.homeCare.map((item, idx) => (
              <Product key={idx} name={item.name} price={item.price} />
            ))
            : <p style={{ color: "white", padding: "10px" }}>No Home Care data available</p>}
        </div>


        {/* Countdown circle */}
        <div style={{
          position: 'absolute',
          right: '8px',
          top: '360px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#0000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00f',
          border: '3px solid #555',
          fontSize: "12px"

        }}>
          32:16
        </div>
        <CylinderSlider />

        {/* Buttons */}
        <div style={{
          position: "absolute",
          bottom: "10px",
          right: "0%"
        }}>
   


        </div>

        {/* Social Icons */}
        <div style={{
          position: "absolute",
          bottom: "10px",
          right: "20%"
          // display: 'flex',
          // justifyContent: '',
          // marginTop: '20px',
          // fontSize: '20px',
          // padding: '0 10px'
        }}>
          <Compo />

        </div>
      </div>
    </div>
    //   </div>
    // </div>

  );
};

// Section Component
const Section = ({ title, items }) => (
  <div style={{ marginTop: '20px', }}>
    <h4 style={{ borderBottom: '0px solid #444', paddingBottom: '5px' }}>{title}</h4>
    {items.map((item, i) => (
      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            marginRight: '8px',
            background: item.selected ? '#0af' : '#888'
          }}></div>
          <span>{item.name}</span>
        </div>
        <span style={{
          fontWeight: 700,
          fontStretch: "bold",

        }}>{item.price}</span>
      </div>
    ))}
  </div>
);

// Product Card
const Product = ({ name, price }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',

  }}>
    <img src={shampooImg} alt="product" style={{ borderRadius: '6px' }} />
    <div style={{ flex: 1, marginLeft: '10px' }}>
      <p style={{ margin: 0, fontSize: '12px', width: "168px" }}>{name}</p>
    </div>
    <span style={{
      fontSize: '13px', fontFamily: "Lato", fontWeight: "400", marginRight: "10px", color: "#AAAAAA",
      borderImageSource: "linear-gradient(119.97deg, rgba(206, 206, 206, 0) 62.04%, #DEDEDE 96.48%)", borderImageSlice: 1

    }}>{" " + price + " >"}</span>
  </div>
);

export default Screen4;
