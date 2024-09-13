import React, { createContext, useState } from 'react';

export const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState('km'); 

  const changeUnit = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <UnitContext.Provider value={{ unit, changeUnit }}>
      {children}
    </UnitContext.Provider>
  );
};
