import { useState, createContext } from "react";

export const NameContext = createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState("ikova");

  const value = { name, setName };

  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
};

