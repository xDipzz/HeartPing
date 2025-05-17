"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useWalletModal } from "@/hooks/use-wallet-modal"
import { useWallet } from "@solana/wallet-adapter-react"

export function CtaSection() {
  const { setVisible } = useWalletModal()
  const { connected } = useWallet()

  return (
    <section className="w-full py-12 md:py-24 bg-rose-500/5 border-t border-b border-rose-500/10">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to secure your digital legacy?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Set up your HeartPing in less than 5 minutes and gain peace of mind.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
            <Button
              size="lg"
              onClick={() => !connected && setVisible(true)}
              className="button-hover relative overflow-hidden group"
            >
              <span className="relative z-10">{connected ? "Set Up Your HeartPing" : "Connect Wallet to Start"}</span>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-border">
              <a href="#how-it-works">Learn More</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
