import React, { createContext, useState } from "react";

// Context তৈরি
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState("screen1");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedClientData, setSelectedClientData] = useState(0);
  const [selectSlider, setSelectSlider] = useState(false);
  const [isTimer, setIsTimer] = useState(false);
  const [openTimerSlider, setOpenTimerSlider] = useState(false);
  const [layoutSlide, setLayoutSlide] = useState(false);
  const [thermoValue, setThermoValue] = useState(0);
  const [ballAtRight, setBallAtRight] = useState(false);
  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        selectedClient,
        setSelectedClient,
        selectedClientData,
        setSelectedClientData,
        selectSlider,
        setSelectSlider,
        isTimer,
        setIsTimer,
        openTimerSlider,
        setOpenTimerSlider,
        layoutSlide, 
        setLayoutSlide,
        thermoValue, 
        setThermoValue,
        ballAtRight,
        setBallAtRight
      }}
    >
      {children}
    </AppContext.Provider>
  );
};