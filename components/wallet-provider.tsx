"use client"

import { type FC, type ReactNode, useMemo } from "react"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"
import { WalletModalProvider as CustomWalletModalProvider } from "@/components/wallet-modal-provider"
import { WalletModalProvider } from "@/hooks/use-wallet-modal"

export const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  // Only use the most common and reliable wallet adapters
  const wallets = useMemo(() => [new PhantomWalletAdapter(), new SolflareWalletAdapter()], [network])

  return (
    <ConnectionProvider endpoint={endpoint}>
      {/* Disable autoConnect to prevent automatic connection errors */}
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>
          <CustomWalletModalProvider>{children}</CustomWalletModalProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
