"use client"

import { type FC, type ReactNode, useCallback } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import type { WalletName } from "@solana/wallet-adapter-base"
import { useWalletModal } from "@/hooks/use-wallet-modal"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export const WalletModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { wallets, select } = useWallet()
  const { visible, setVisible } = useWalletModal()
  const { toast } = useToast()

  const handleWalletClick = useCallback(
    async (walletName: WalletName) => {
      try {
        await select(walletName)
        setVisible(false)
      } catch (error) {
        console.error("Wallet connection error:", error)
        toast({
          title: "Connection Failed",
          description: "Could not connect to wallet. Please try again or try another wallet.",
          variant: "destructive",
        })
      }
    },
    [select, setVisible, toast],
  )

  return (
    <>
      {children}
      <Dialog open={visible} onOpenChange={setVisible}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Connect a wallet</DialogTitle>
            <DialogDescription>Connect your wallet to use HeartPing</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <h3 className="text-sm font-medium">Available Wallets</h3>
            <div className="grid grid-cols-2 gap-4">
              {wallets.map((wallet) => (
                <Button
                  key={wallet.adapter.name}
                  variant="outline"
                  className="flex items-center justify-start gap-2 h-14 px-4 hover:bg-muted/50 transition-colors"
                  onClick={() => handleWalletClick(wallet.adapter.name)}
                >
                  {wallet.adapter.icon && (
                    <img
                      src={wallet.adapter.icon || "/placeholder.svg"}
                      alt={wallet.adapter.name}
                      className="h-6 w-6"
                    />
                  )}
                  <span>{wallet.adapter.name}</span>
                </Button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-2">
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
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
