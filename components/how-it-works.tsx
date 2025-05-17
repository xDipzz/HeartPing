"use client"

import { CheckCircle2, Wallet, Clock, MessageSquare, Users } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorks() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple steps to secure your digital legacy
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              HeartPing makes it easy to set up automated alerts if your wallet goes inactive for a specified period.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Connect wallet</h3>
            <p className="text-sm text-center text-muted-foreground">Link your Solana wallet to HeartPing</p>
          </motion.div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="h-px w-full bg-border" />
          </div>
          <motion.div
            className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Set threshold</h3>
            <p className="text-sm text-center text-muted-foreground">Choose your inactivity time period</p>
          </motion.div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="h-px w-full bg-border" />
          </div>
          <motion.div
            className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Customize ping</h3>
            <p className="text-sm text-center text-muted-foreground">Create your alert message and delivery method</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-3xl items-center gap-6 lg:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Add contacts</h3>
            <p className="text-sm text-center text-muted-foreground">
              Optionally add backup contacts to receive alerts
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center space-y-2 border rounded-lg p-4 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">You're protected</h3>
            <p className="text-sm text-center text-muted-foreground">
              HeartPing will monitor your wallet activity and send alerts when needed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
