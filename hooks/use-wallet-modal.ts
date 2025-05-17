"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface WalletModalContextState {
  visible: boolean
  setVisible: (open: boolean) => void
}

const WalletModalContext = createContext<WalletModalContextState>({
  visible: false,
  setVisible: () => null,
})

export function WalletModalProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false)

  return (
    <WalletModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </WalletModalContext.Provider>
  )
}

export const useWalletModal = () => useContext(WalletModalContext)
