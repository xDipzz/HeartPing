"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { OnboardingData } from "@/components/onboarding/onboarding-wizard"
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react"

export function StepNotificationMethods({
  data,
  updateData,
}: {
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}) {
  const handleNotificationMethodChange = (method: keyof OnboardingData["notificationMethods"], checked: boolean) => {
    updateData({
      notificationMethods: {
        ...data.notificationMethods,
        [method]: checked,
      },
    })
  }

  const handleContactDetailsChange = (field: keyof OnboardingData["contactDetails"], value: string) => {
    updateData({
      contactDetails: {
        ...data.contactDetails,
        [field]: value,
      },
    })
  }

  const handlePingMessageChange = (value: string) => {
    updateData({ pingMessage: value })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">Notification methods</h3>
        <p className="text-sm text-muted-foreground">
          Choose how you want to receive alerts when your wallet becomes inactive.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Alert methods</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="email"
                checked={data.notificationMethods.email}
                onCheckedChange={(checked) => handleNotificationMethodChange("email", checked === true)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="email" className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Label>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="sms"
                checked={data.notificationMethods.sms}
                onCheckedChange={(checked) => handleNotificationMethodChange("sms", checked === true)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="sms" className="flex items-center space-x-1">
                  <Smartphone className="h-4 w-4" />
                  <span>SMS</span>
                </Label>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="onChain"
                checked={data.notificationMethods.onChain}
                onCheckedChange={(checked) => handleNotificationMethodChange("onChain", checked === true)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="onChain" className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>On-chain (Dialect)</span>
                </Label>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="push"
                checked={data.notificationMethods.push}
                onCheckedChange={(checked) => handleNotificationMethodChange("push", checked === true)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="push" className="flex items-center space-x-1">
                  <Bell className="h-4 w-4" />
                  <span>Push notification</span>
                </Label>
              </div>
            </div>
          </div>
        </div>

        {data.notificationMethods.email && (
          <div className="space-y-2">
            <Label htmlFor="email-address">Email address</Label>
            <Input
              id="email-address"
              type="email"
              placeholder="your@email.com"
              value={data.contactDetails.email}
              onChange={(e) => handleContactDetailsChange("email", e.target.value)}
            />
          </div>
        )}

        {data.notificationMethods.sms && (
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone number</Label>
            <Input
              id="phone-number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={data.contactDetails.phone}
              onChange={(e) => handleContactDetailsChange("phone", e.target.value)}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="ping-message">Alert message</Label>
          <Textarea
            id="ping-message"
            placeholder="Enter the message that will be sent when your wallet is inactive"
            value={data.pingMessage}
            onChange={(e) => handlePingMessageChange(e.target.value)}
            className="min-h-[100px]"
          />
          <p className="text-xs text-muted-foreground">
            This message will be sent via your selected notification methods.
          </p>
        </div>
      </div>
    </div>
  )
}
