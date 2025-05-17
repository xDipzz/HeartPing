"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@/hooks/use-wallet-modal"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Loader2, Wallet } from "lucide-react"
import { formatWalletAddress } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

export function WalletMultiButton() {
  const { publicKey, wallet, disconnect, connecting, select, wallets, connected } = useWallet()
  const { setVisible } = useWalletModal()
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)

    // Manual wallet detection instead of auto-connect
    const detectWallet = async () => {
      try {
        // Check for Phantom
        if (window?.phantom?.solana?.isPhantom) {
          const phantomWallet = wallets.find((w) => w.adapter.name === "Phantom")
          if (phantomWallet) {
            console.log("Phantom wallet detected")
            return
          }
        }

        // Check for Solflare
        if (window?.solflare?.isSolflare) {
          const solflareWallet = wallets.find((w) => w.adapter.name === "Solflare")
          if (solflareWallet) {
            console.log("Solflare wallet detected")
            return
          }
        }
      } catch (error) {
        console.error("Error detecting wallet:", error)
      }
    }

    // Only run detection, don't auto-connect
    if (!connected) {
      detectWallet().catch(console.error)
    }
  }, [connected, wallets])

  // Handle manual wallet connection with error handling
  const handleConnectWallet = async (walletName: string) => {
    try {
      const selectedWallet = wallets.find((w) => w.adapter.name === walletName)
      if (selectedWallet) {
        await select(selectedWallet.adapter.name)
        setVisible(false)
      }
    } catch (error) {
      console.error("Wallet connection error:", error)
      toast({
        title: "Connection Failed",
        description: "Could not connect to wallet. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (!mounted) return null

  if (publicKey && connected) {
    return (
      <Button
        variant="outline"
        onClick={() => disconnect()}
        className="font-mono transition-all hover:bg-rose-500/10 border border-transparent hover:border-rose-500/30"
      >
        {wallet?.adapter.icon && (
          <img
            src={wallet.adapter.icon || "/placeholder.svg"}
            alt={wallet.adapter.name}
            className="h-4 w-4 mr-2 rounded-full"
          />
        )}
        {formatWalletAddress(publicKey.toString())}
      </Button>
    )
  }

  if (connecting) {
    return (
      <Button disabled className="min-w-[140px]">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting
      </Button>
    )
  }

  return (
    <Button onClick={() => setVisible(true)} className="transition-all hover:bg-rose-500/90 min-w-[140px]">
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  )
}
