import { createContext, useState } from "react";
export const AppContext = createContext();

export function AppProvider({ children }) {
  
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
  return (
    <AppContext.Provider value={{
      isOpen,
      toggle
    }}>
      {children}
    </AppContext.Provider>
  )
}