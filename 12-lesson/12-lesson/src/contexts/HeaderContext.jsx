import { createContext, useState } from "react";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  
  const toggleShow = () => {
    setShow((prevShow)=> !prevShow)
  }

  return (
    <HeaderContext.Provider value={{ show,toggleShow }}>
      {children}
     </HeaderContext.Provider>
   )
}

export { HeaderProvider, HeaderContext}