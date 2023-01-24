import { createContext, useState } from "react";

const DonateContext = createContext();

const DonateProvider = ({ children }) => {
  const [donate, setDonate] = useState(false);
  
  const toggleDonate = () => {
    setDonate((prevDonate) => !prevDonate)
  }

  return (
    <DonateContext.Provider value={{ donate,toggleDonate }}>
      {children}
     </DonateContext.Provider>
   )
}

export { DonateProvider, DonateContext}
