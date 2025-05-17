"use client"

import { Button } from "@/components/ui/button"
import { useWalletModal } from "@/hooks/use-wallet-modal"
import { useWallet } from "@solana/wallet-adapter-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { MouseGlowEffect } from "@/components/mouse-glow-effect"

export function HeroSection() {
  const { setVisible } = useWalletModal()
  const { connected } = useWallet()
  const router = useRouter()

  const handleCTA = () => {
    if (connected) {
      router.push("#demo")
    } else {
      setVisible(true)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <MouseGlowEffect />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Still breathing? <br />
                <span className="text-rose-500">Let your wallet know.</span>
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                A safety net for your decentralized life. Set up automated alerts if your wallet goes inactive.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" onClick={handleCTA} className="button-hover relative overflow-hidden group">
                <span className="relative z-10">Set Your HeartPing</span>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover-border">
                <a href="#how-it-works">Learn More</a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-lg blur-3xl" />
              <div className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full flex items-center justify-center hover-glow">
                <div className="pulse-animation w-24 h-24 rounded-full bg-rose-500/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-rose-500/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-rose-500/50 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-rose-500 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
