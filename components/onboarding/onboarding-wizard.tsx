"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { StepWalletConnect } from "@/components/onboarding/step-wallet-connect"
import { StepInactivityThreshold } from "@/components/onboarding/step-inactivity-threshold"
import { StepNotificationMethods } from "@/components/onboarding/step-notification-methods"
import { StepBackupContacts } from "@/components/onboarding/step-backup-contacts"
import { StepConfirmation } from "@/components/onboarding/step-confirmation"
import { StepperUI } from "@/components/onboarding/stepper-ui"
import { useWallet } from "@solana/wallet-adapter-react"

export type OnboardingData = {
  inactivityPeriod: number
  inactivityUnit: "days" | "weeks" | "months"
  notificationMethods: {
    email: boolean
    sms: boolean
    onChain: boolean
    push: boolean
  }
  contactDetails: {
    email: string
    phone: string
  }
  backupContacts: Array<{
    name: string
    email: string
    phone?: string
    walletAddress?: string
  }>
  pingMessage: string
  pingFrequency: "one-time" | "recurring"
  recurringDays?: number
}

const defaultData: OnboardingData = {
  inactivityPeriod: 30,
  inactivityUnit: "days",
  notificationMethods: {
    email: true,
    sms: false,
    onChain: false,
    push: false,
  },
  contactDetails: {
    email: "",
    phone: "",
  },
  backupContacts: [],
  pingMessage: "Hey, I haven't interacted with my wallet in a while. This is an automated reminder.",
  pingFrequency: "one-time",
}

export function OnboardingWizard({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<OnboardingData>(defaultData)
  const { connected } = useWallet()

  const steps = [
    { title: "Connect Wallet", description: "Link your Solana wallet" },
    { title: "Set Threshold", description: "Choose inactivity period" },
    { title: "Notifications", description: "How to reach you" },
    { title: "Backup Contacts", description: "Add trusted contacts" },
    { title: "Confirm", description: "Review and activate" },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = async () => {
    // Here you would submit the data to your backend or blockchain
    console.log("Submitting data:", data)

    // Simulate success
    setTimeout(() => {
      onOpenChange(false)
      // Reset for next time
      setCurrentStep(0)
      setData(defaultData)
    }, 1500)
  }

  const updateData = (newData: Partial<OnboardingData>) => {
    setData({ ...data, ...newData })
  }

  // Skip wallet connection step if already connected
  if (connected && currentStep === 0) {
    handleNext()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="p-6">
          <StepperUI steps={steps} currentStep={currentStep} />
        </div>

        <div className="px-6 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep === 0 && <StepWalletConnect onNext={handleNext} />}
              {currentStep === 1 && <StepInactivityThreshold data={data} updateData={updateData} />}
              {currentStep === 2 && <StepNotificationMethods data={data} updateData={updateData} />}
              {currentStep === 3 && <StepBackupContacts data={data} updateData={updateData} />}
              {currentStep === 4 && (
                <StepConfirmation data={data} updateData={updateData} onComplete={handleComplete} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 border-t flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
            Back
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>Continue</Button>
          ) : (
            <Button onClick={handleComplete} className="bg-rose-500 hover:bg-rose-600">
              Activate HeartPing
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
