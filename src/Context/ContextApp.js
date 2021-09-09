import { createContext, useState } from "react";
export const AppContext = createContext();

export function AppProvider({ children }) {
  
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenPassword, setIsOpenPassword] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal)
    }
    
    const togglePassowrd = () => {
      setIsOpenPassword(!isOpenPassword);
    }
  
  return (
    <AppContext.Provider value={{
      isOpen,
      toggle,
      isOpenModal,
      toggleModal,
      setIsOpenModal,
      togglePassowrd,
      isOpenPassword,
      setIsOpenPassword,
      setIsOpen
    }}>
      {children}
    </AppContext.Provider>
  )
}