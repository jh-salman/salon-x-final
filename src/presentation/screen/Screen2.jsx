import React, { useContext } from 'react'
import '../style/screen2.css';
import HalfPinkCurved from '../../component/HalfPinkCurved'
import Name from '../../component/Name'
import SocialIink from '../../component/SocialIink'
import TransparentButton from '../../component/TransparentButton'
import { AppContext } from '../../context/AppContext'
import DynamicDate from '../../component/DynamicDate'
import Cylinder from '../../component/Cylinder'
import TimeBar from '../../component/TimeBar'
import { useNavigate } from 'react-router-dom'
import RebookAndCheckout from '../../component/RebookAndCheckout';


function Screen2() {
    const { 
        
        setSelectSlider,  
        setIsTimer,
        setOpenTimerSlider,
        setThermoValue } = useContext(AppContext);
  

    const selectedClientData ={
         name: "Jon Klein",
          service: "Full lived-in color",
          price: 220,
          color: "#00d5ff",
          consultationDate: "8.15.2025",
          duration: "45 min",
          notes: "Redken shades EQ 7N. 7WB. No left developer.\nNext time use more 7N\nA Kool dude!!!\nSister in law is pregnant and expecting twins. They just\n started rebuilding the cabin. Jennifer is going to FSU",
          services: [
            { name: "Balayage", price: 150 },
            { name: "Toner Application", price: 60 }
          ],
          recommendations: [
            { name: "Deep Conditioning Treatment", price: 50 }
          ],
          homeCare: [
            { name: "Rusk: Rusk COLORxConditioner", price: 25, img:"./img1.png" },
            { name: "Rusk: Rusk VHAB Shampoo", price: 30, img:"./img2.png" },
            
          ]
    }
    
   
    const navigate = useNavigate();
     const handleIncrease = (e) => {
        e.stopPropagation();
        if (e.detail > 1) return;
        setThermoValue(prev => {
            const updated = Math.min(prev + 20, 100); 
           
            return updated;
        });
        if (e?.currentTarget) {
            e.currentTarget.style.border = "1px solid #23a8ff";
        }
    };
    return (
        <div className="screen2-container">
            <div className="half-pink-container">
                <HalfPinkCurved />
            </div>
            <div onClick={() => {
                navigate("/screen1")
                setSelectSlider(false);
                setIsTimer(false);
                setOpenTimerSlider(false);
            }} className="back-button">
                <p > Back </p>
            </div>
            <div onClick={(e) => handleIncrease(e)} className="profile-and-name-number">
                <img className="profile-image" src='./avatar.png' />
                <div className="name-container">
                    <Name />
                </div>

            </div>
            <div className="date">
                <DynamicDate />
            </div>
            <div className="time-bar-container">
                <TimeBar />
            </div>
            <div className="cylinder-container">
               
                    <Cylinder />
                    {/* <Muse /> */}
               

            </div>
            <div className="middle-card-section">

                {/* consultation  */}
                <div onClick={(e) => handleIncrease(e)} className="consultation-card">
                    <div className="consultation-button-container">
                        <TransparentButton title={"Consultation"} />
                    </div>
                    <div className="consultation-info">
                        <span className="consultation-date">{selectedClientData?.consultationDate}
                        </span>
                        <span className="consultation-duration">
                            {selectedClientData?.duration}</span>
                    </div>
                    <p className="consultation-notes">
                        <br />
                        {selectedClientData?.notes}
                    </p>
                </div>

                <div onClick={(e) => handleIncrease(e)} className="services-card">
                    <div className="services-button-container">
                        <TransparentButton title={"Services"} />
                    </div>

                    <div>
                        {selectedClientData?.services?.map((service, index) => (
                            <div key={index} className="service-item">
                                <div className="service-name-container">
                                    <div className="service-dot"></div>
                                    <span>{service.name}</span>
                                </div>
                                <span>${service.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="recommendation-button-container">
                        <TransparentButton title={"Recomandation"} />
                    </div>


                    <div className="recommendation-list">
                        {selectedClientData?.recommendations?.map((rec, index) => (
                            <div key={index} className="recommendation-item">
                                <div className="recommendation-name-container">
                                    <div className="recommendation-dot"></div>
                                    <span>{rec.name}</span>
                                </div>
                                <span>${rec.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Home and Care */}
            </div>
            <div onClick={(e) => handleIncrease(e)} className="homecare-card">
                <div className="homecare-button-container">
                    <TransparentButton title={"Home Care"} />
                </div>
                <div className="homecare-list">
                    {selectedClientData?.homeCare?.map((item, index) => (
                        <div key={index} className="homecare-item">
                            <div className="homecare-name-container">
                                <div >
                                    <img src={item.img} />
                                </div>
                                <span>{item.name}</span>
                            </div>
                            <span>${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="messages-button">
                <TransparentButton title="Messages/update" />
            </div>

            <div className="client-review-button">
                {/* <ClientReviewButtons /> */}
                <RebookAndCheckout onClick={handleIncrease} />
            </div>
            <div className="client-review-button social-link-button">
                <SocialIink />
            </div>

        </div>
    )
}

export default Screen2
