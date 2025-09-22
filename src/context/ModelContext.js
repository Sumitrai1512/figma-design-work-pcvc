"use client"

import { createContext, useContext, useState } from "react"


const ModalContext = createContext()


export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false)

  function handleClick() {
    console.log("first")
    setOpen(true);
  }

  return (
    <ModalContext.Provider value={{ open, setOpen, handleClick }}>
      {children}
    </ModalContext.Provider>
  )
}


export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used inside a ModalProvider")
  }
  return context
}
