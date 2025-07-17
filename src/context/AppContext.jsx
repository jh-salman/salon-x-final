import React, { createContext, useState } from "react";

// Context তৈরি
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState("screen1");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedClientData, setSelectedClientData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        selectedClient,
        setSelectedClient,
        selectedClientData,
        setSelectedClientData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};