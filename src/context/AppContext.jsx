import React, { createContext, useState } from "react";

// Context তৈরি
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState("screen1");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedClientData, setSelectedClientData] = useState(null);
  const [selectSlider, setSelectSlider] = useState(false);
  const [isTimer, setIsTimer] = useState(false);
  const [openTimerSlider, setOpenTimerSlider] = useState(false);

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
        setOpenTimerSlider
      }}
    >
      {children}
    </AppContext.Provider>
  );
};