"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqItems = [
    {
      question: "How does HeartPing know I'm inactive?",
      answer:
        'HeartPing monitors your wallet\'s activity on the Solana blockchain. If no transactions or "heartbeat" signals are detected within your chosen time frame, it triggers a reminder ping.',
    },
    {
      question: 'What qualifies as "activity"?',
      answer:
        'Wallet activity includes sending transactions, interacting with dApps, or explicitly sending a "heartbeat" signal through the app. You stay in control.',
    },
    {
      question: "Is this fully decentralized?",
      answer:
        "Yes. HeartPing uses smart contracts and on-chain logic on Solana. Your configuration is stored trustlessly — no centralized servers or third-party custodians involved.",
    },
    {
      question: "Can I use HeartPing anonymously?",
      answer:
        "Yes. You can use a self-custodied wallet without linking personal information. However, to use channels like SMS or Email, you'll need to provide those details.",
    },
    {
      question: "Will my alert message be stored on-chain?",
      answer:
        "Only if you choose to send it via Dialect (on-chain messaging). Otherwise, messages are stored off-chain, securely encrypted, and deleted after delivery.",
    },
    {
      question: "What if I become active again?",
      answer:
        "If you interact with your wallet (or ping HeartPing manually), the inactivity timer resets automatically — no alert will be sent.",
    },
    {
      question: "Can I stop or update my alert after setting it up?",
      answer:
        "Absolutely. You can connect your wallet anytime and modify or disable your HeartPing settings instantly.",
    },
    {
      question: "Can I add multiple backup contacts?",
      answer:
        "Yes. You can add several trusted recipients — like a spouse, friend, or legal advisor. You can also set different thresholds before each receives a ping.",
    },
    {
      question: "What happens if I don't respond after an alert is sent?",
      answer:
        "HeartPing can escalate alerts by notifying backup contacts or triggering more aggressive reminders (like multiple pings or different channels).",
    },
    {
      question: "Is HeartPing free?",
      answer:
        "The base service is free to use. Some alert channels like SMS may require a small fee to cover third-party costs (e.g. Twilio).",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about HeartPing.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-rose-500 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
