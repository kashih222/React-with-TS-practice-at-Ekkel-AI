import { createContext, useState } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const [userName, setUserName] = useState("Muhammad Kashaf");
  const [age, setAge] = useState(24);

  return (
    <BioContext.Provider value={{ userName, setUserName, age, setAge }}>
      {children}
    </BioContext.Provider>
  );
};
