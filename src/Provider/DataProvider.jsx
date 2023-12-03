import React, { createContext, useEffect, useState } from "react";
import { children } from "react";
import { addToDb, getUser } from "../components/utility/fakeDB";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userBalance = getUser();
    setUserData(userBalance);
  }, []);

  const updateUserAccount = (details) => {
    setUserData(details);
  };

  const allData = {
    userData,
    setUserData,
    updateUserAccount,
  };
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
