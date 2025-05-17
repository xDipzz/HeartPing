"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@/components/wallet-multi-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertCircle } from "lucide-react"

export default function DemoPage() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const { connected } = useWallet()

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">HeartPing Demo</h1>
          <p className="text-muted-foreground">Try out the HeartPing service on Solana devnet</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Set up your HeartPing</CardTitle>
            <CardDescription>Configure automated alerts for when your wallet goes inactive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!connected ? (
              <div className="text-center py-6 space-y-4">
                <p className="text-muted-foreground">Connect your wallet to get started</p>
                <div className="flex justify-center">
                  <WalletMultiButton />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>This is a demo running on Solana devnet. No real transactions will be made.</span>
                </div>
                <Button onClick={() => setShowOnboarding(true)} className="w-full">
                  Start Setup Wizard
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
            <CardDescription>A quick overview of the HeartPing service</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">1. Connect your wallet</h3>
              <p className="text-sm text-muted-foreground">Link your Solana wallet to HeartPing to monitor activity.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">2. Set your inactivity threshold</h3>
              <p className="text-sm text-muted-foreground">
                Choose how long your wallet can be inactive before alerts are sent.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">3. Configure notification methods</h3>
              <p className="text-sm text-muted-foreground">
                Select how you want to be notified (email, SMS, on-chain, push).
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">4. Add backup contacts (optional)</h3>
              <p className="text-sm text-muted-foreground">Add trusted individuals who will also receive alerts.</p>
            </div>
            <div className="flex items-center space-x-2 text-sm bg-amber-50 text-amber-900 p-3 rounded-md mt-4">
              <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
              <p>In this demo, no real alerts will be sent. This is for demonstration purposes only.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <OnboardingWizard open={showOnboarding} onOpenChange={setShowOnboarding} />
    </div>
  )
}
