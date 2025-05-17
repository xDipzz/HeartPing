"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { OnboardingData } from "@/components/onboarding/onboarding-wizard"
import { Clock, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function StepInactivityThreshold({
  data,
  updateData,
}: {
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}) {
  // Simple state management
  const [period, setPeriod] = useState(data.inactivityPeriod.toString())
  const [unit, setUnit] = useState<"days" | "weeks" | "months">(data.inactivityUnit)
  const [frequency, setFrequency] = useState<"one-time" | "recurring">(data.pingFrequency)
  const [recurringDays, setRecurringDays] = useState(data.recurringDays?.toString() || "7")

  // Simple handlers
  const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPeriod(value)
    const numValue = Number.parseInt(value, 10)
    if (!isNaN(numValue) && numValue > 0) {
      updateData({ inactivityPeriod: numValue })
    }
  }

  const handleUnitChange = (value: string) => {
    const unitValue = value as "days" | "weeks" | "months"
    setUnit(unitValue)
    updateData({ inactivityUnit: unitValue })
  }

  const handleFrequencyChange = (value: string) => {
    const freqValue = value as "one-time" | "recurring"
    setFrequency(freqValue)
    updateData({
      pingFrequency: freqValue,
      recurringDays: freqValue === "recurring" ? Number.parseInt(recurringDays, 10) : undefined,
    })
  }

  const handleRecurringDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setRecurringDays(value)
    const numValue = Number.parseInt(value, 10)
    if (!isNaN(numValue) && numValue > 0 && frequency === "recurring") {
      updateData({ recurringDays: numValue })
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">Set inactivity threshold</h3>
        <p className="text-sm text-muted-foreground">
          Choose how long your wallet can be inactive before HeartPing sends an alert.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="period">Inactivity period</Label>
            <Input id="period" type="number" min="1" value={period} onChange={handlePeriodChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="unit">Unit</Label>
            <Select value={unit} onValueChange={handleUnitChange}>
              <SelectTrigger id="unit">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="days">Days</SelectItem>
                <SelectItem value="weeks">Weeks</SelectItem>
                <SelectItem value="months">Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Ping frequency</Label>
          <RadioGroup value={frequency} onValueChange={handleFrequencyChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <Label htmlFor="one-time">One-time alert</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recurring" id="recurring" />
              <Label htmlFor="recurring">Recurring alerts</Label>
            </div>
          </RadioGroup>
        </div>

        {frequency === "recurring" && (
          <div className="space-y-2 pl-6">
            <Label htmlFor="recurring-days">Send reminder every</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="recurring-days"
                type="number"
                min="1"
                className="w-20"
                value={recurringDays}
                onChange={handleRecurringDaysChange}
              />
              <span>days until activity is detected</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center py-4">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Clock className="h-5 w-5" />
          <span>
            HeartPing will alert you if your wallet is inactive for {period} {unit}
          </span>
        </div>
      </div>

      <Alert variant="default" className="bg-amber-50 text-amber-900 border-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertTitle>Recommendation</AlertTitle>
        <AlertDescription>
          For most users, we recommend 30-90 days of inactivity before sending alerts.
        </AlertDescription>
      </Alert>
    </div>
  )
}
