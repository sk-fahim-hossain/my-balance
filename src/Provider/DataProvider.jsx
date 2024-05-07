import React, { createContext, useEffect, useState } from "react";
import { children } from "react";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [userAuthData, setUserAuthData] = useState({});
  const [userBalanceInfo, setUserBalanceInfo] = useState({})

  

  const allData = {
    userAuthData,
    setUserAuthData,
    userBalanceInfo,
    setUserBalanceInfo,
  };
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
