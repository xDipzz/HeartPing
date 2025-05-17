"use client"

import type { OnboardingData } from "@/components/onboarding/onboarding-wizard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Clock, Mail, MessageSquare, Smartphone, Users, Bell } from "lucide-react"
import { useWallet } from "@solana/wallet-adapter-react"

export function StepConfirmation({
  data,
  updateData,
  onComplete,
}: {
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
  onComplete: () => void
}) {
  const { publicKey } = useWallet()

  const getInactivityPeriodText = () => {
    return `${data.inactivityPeriod} ${data.inactivityUnit}`
  }

  const getNotificationMethodsText = () => {
    const methods = []
    if (data.notificationMethods.email) methods.push("Email")
    if (data.notificationMethods.sms) methods.push("SMS")
    if (data.notificationMethods.onChain) methods.push("On-chain")
    if (data.notificationMethods.push) methods.push("Push")
    return methods.join(", ")
  }

  const getFrequencyText = () => {
    if (data.pingFrequency === "one-time") {
      return "One-time alert"
    } else {
      return `Recurring every ${data.recurringDays} days until activity is detected`
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">Review and confirm</h3>
        <p className="text-sm text-muted-foreground">Please review your HeartPing settings before activating.</p>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Wallet</CardTitle>
          <CardDescription>The wallet that will be monitored</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Check className="h-4 w-4 text-green-500" />
            <p className="font-mono text-sm">
              {publicKey?.toString().slice(0, 6)}...{publicKey?.toString().slice(-4)}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Inactivity threshold</CardTitle>
          <CardDescription>When alerts will be triggered</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <p>{getInactivityPeriodText()}</p>
          </div>
          <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
            <p>{getFrequencyText()}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Notification methods</CardTitle>
          <CardDescription>How you'll receive alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {data.notificationMethods.email && (
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <p>{data.contactDetails.email}</p>
            </div>
          )}
          {data.notificationMethods.sms && (
            <div className="flex items-center space-x-2">
              <Smartphone className="h-4 w-4 text-muted-foreground" />
              <p>{data.contactDetails.phone}</p>
            </div>
          )}
          {data.notificationMethods.onChain && (
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <p>On-chain messaging (Dialect)</p>
            </div>
          )}
          {data.notificationMethods.push && (
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <p>Push notifications</p>
            </div>
          )}
        </CardContent>
      </Card>

      {data.backupContacts.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Backup contacts</CardTitle>
            <CardDescription>Who else will be notified</CardDescription>
          </CardHeader>
          <CardContent>
            {data.backupContacts.map((contact, index) => (
              <div key={index} className="flex items-start space-x-2 mb-2">
                <Users className="h-4 w-4 text-muted-foreground mt-1" />
                <div>
                  <p>{contact.name}</p>
                  <p className="text-sm text-muted-foreground">{contact.email}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Alert message</CardTitle>
          <CardDescription>What will be sent</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm italic">"{data.pingMessage}"</p>
        </CardContent>
      </Card>
    </div>
  )
}
