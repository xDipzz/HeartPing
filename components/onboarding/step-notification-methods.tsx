"use client"

import type React from "react"

import { useState } from "react"
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
  // Local state to track checkbox values
  const [notificationMethods, setNotificationMethods] = useState({
    email: data.notificationMethods.email,
    sms: data.notificationMethods.sms,
    onChain: data.notificationMethods.onChain,
    push: data.notificationMethods.push,
  })

  // Local state for contact details
  const [contactDetails, setContactDetails] = useState({
    email: data.contactDetails.email,
    phone: data.contactDetails.phone,
  })

  // Local state for message
  const [message, setMessage] = useState(data.pingMessage)

  // Handle checkbox changes
  const handleCheckboxChange = (method: keyof typeof notificationMethods, checked: boolean) => {
    const updatedMethods = { ...notificationMethods, [method]: checked }
    setNotificationMethods(updatedMethods)
    updateData({ notificationMethods: updatedMethods })
  }

  // Handle contact detail changes
  const handleContactChange = (field: keyof typeof contactDetails, value: string) => {
    const updatedDetails = { ...contactDetails, [field]: value }
    setContactDetails(updatedDetails)
    updateData({ contactDetails: updatedDetails })
  }

  // Handle message change
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setMessage(value)
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
                id="email-checkbox"
                checked={notificationMethods.email}
                onCheckedChange={(checked) => handleCheckboxChange("email", !!checked)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="email-checkbox" className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </Label>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="sms-checkbox"
                checked={notificationMethods.sms}
                onCheckedChange={(checked) => handleCheckboxChange("sms", !!checked)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="sms-checkbox" className="flex items-center space-x-1">
                  <Smartphone className="h-4 w-4" />
                  <span>SMS</span>
                </Label>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="onchain-checkbox"
                checked={notificationMethods.onChain}
                onCheckedChange={(checked) => handleCheckboxChange("onChain", !!checked)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="onchain-checkbox" className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>On-chain (Dialect)</span>
                </Label>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="push-checkbox"
                checked={notificationMethods.push}
                onCheckedChange={(checked) => handleCheckboxChange("push", !!checked)}
              />
              <div className="grid gap-1.5">
                <Label htmlFor="push-checkbox" className="flex items-center space-x-1">
                  <Bell className="h-4 w-4" />
                  <span>Push notification</span>
                </Label>
              </div>
            </div>
          </div>
        </div>

        {notificationMethods.email && (
          <div className="space-y-2">
            <Label htmlFor="email-address">Email address</Label>
            <Input
              id="email-address"
              type="email"
              placeholder="your@email.com"
              value={contactDetails.email}
              onChange={(e) => handleContactChange("email", e.target.value)}
            />
          </div>
        )}

        {notificationMethods.sms && (
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone number</Label>
            <Input
              id="phone-number"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={contactDetails.phone}
              onChange={(e) => handleContactChange("phone", e.target.value)}
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="ping-message">Alert message</Label>
          <Textarea
            id="ping-message"
            placeholder="Enter the message that will be sent when your wallet is inactive"
            value={message}
            onChange={handleMessageChange}
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
