"use client"

import { Shield, Zap, MessageCircle, Users, Lock, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesSection() {
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
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need for peace of mind
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              HeartPing provides a comprehensive solution for wallet inactivity alerts with powerful features.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Fully Decentralized</h3>
            <p className="text-sm text-muted-foreground">
              All logic runs on the Solana blockchain, ensuring your setup remains secure and trustless
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Custom Templates</h3>
            <p className="text-sm text-muted-foreground">
              Create personalized ping messages for different scenarios and recipients
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Multiple Channels</h3>
            <p className="text-sm text-muted-foreground">
              Send alerts via SMS, Email, on-chain Dialect messages, or Push notifications
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Backup Contacts</h3>
            <p className="text-sm text-muted-foreground">
              Add trusted individuals like family members, partners, or lawyers to receive alerts
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Privacy Focused</h3>
            <p className="text-sm text-muted-foreground">
              Your data remains encrypted and private, with no centralized storage of sensitive information
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start space-y-2 border rounded-lg p-6 bg-background hover-effect"
            variants={item}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Customizable Thresholds</h3>
            <p className="text-sm text-muted-foreground">
              Set different inactivity periods for different wallets or use cases
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
