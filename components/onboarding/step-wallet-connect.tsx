"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@/hooks/use-wallet-modal"
import { Button } from "@/components/ui/button"
import { Wallet, AlertCircle, Check } from "lucide-react"
import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function StepWalletConnect({ onNext }: { onNext: () => void }) {
  const { publicKey, connected } = useWallet()
  const { setVisible } = useWalletModal()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // If wallet is connected, automatically proceed to next step
    if (connected) {
      onNext()
    }
  }, [connected, onNext])

  if (!isMounted) {
    return <div className="py-8">Loading wallet status...</div>
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">Connect your wallet</h3>
        <p className="text-sm text-muted-foreground">
          HeartPing needs to connect to your Solana wallet to monitor activity and set up alerts.
        </p>
      </div>

      {!connected ? (
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
            <Wallet className="h-8 w-8 text-muted-foreground" />
          </div>
          <Button onClick={() => setVisible(true)} className="w-full max-w-xs">
            Connect Wallet
          </Button>
          <p className="text-xs text-muted-foreground">
            Don't have a wallet?{" "}
            <a
              href="https://phantom.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:underline"
            >
              Get Phantom
            </a>{" "}
            or{" "}
            <a
              href="https://solflare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:underline"
            >
              Get Solflare
            </a>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
          <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <p className="font-medium">Wallet connected!</p>
          <p className="text-sm text-muted-foreground">
            Connected address: {publicKey?.toString().slice(0, 4)}...{publicKey?.toString().slice(-4)}
          </p>
        </div>
      )}

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          HeartPing only monitors wallet activity. It never has access to your funds or private keys.
        </AlertDescription>
      </Alert>
    </div>
  )
}
