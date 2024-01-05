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
    console.log(details);
    const { name, password } = details;
    userData.name = details.name;
    userData.password = details.password;
    // setUserData(details);
    console.log(userData);
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
