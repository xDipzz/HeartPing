"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { OnboardingData } from "@/components/onboarding/onboarding-wizard"
import { Plus, Trash2, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function StepBackupContacts({
  data,
  updateData,
}: {
  data: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}) {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
    walletAddress: "",
  })

  const handleAddContact = () => {
    if (newContact.name && newContact.email) {
      const updatedContacts = [...data.backupContacts, { ...newContact }]
      updateData({ backupContacts: updatedContacts })
      setNewContact({
        name: "",
        email: "",
        phone: "",
        walletAddress: "",
      })
    }
  }

  const handleRemoveContact = (index: number) => {
    const updatedContacts = [...data.backupContacts]
    updatedContacts.splice(index, 1)
    updateData({ backupContacts: updatedContacts })
  }

  const handleNewContactChange = (field: keyof typeof newContact, value: string) => {
    setNewContact({
      ...newContact,
      [field]: value,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">Backup contacts (Optional)</h3>
        <p className="text-sm text-muted-foreground">
          Add trusted contacts who will also receive alerts if your wallet becomes inactive.
        </p>
      </div>

      {data.backupContacts.length > 0 && (
        <div className="space-y-4">
          <Label>Your backup contacts</Label>
          {data.backupContacts.map((contact, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.email}</p>
                    {contact.phone && <p className="text-sm text-muted-foreground">{contact.phone}</p>}
                    {contact.walletAddress && (
                      <p className="text-xs text-muted-foreground mt-1 font-mono">
                        {contact.walletAddress.slice(0, 6)}...{contact.walletAddress.slice(-4)}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveContact(index)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="space-y-4 border rounded-md p-4">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <h4 className="font-medium">Add a new backup contact</h4>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              placeholder="Contact name"
              value={newContact.name}
              onChange={(e) => handleNewContactChange("name", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email (required)</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="contact@example.com"
              value={newContact.email}
              onChange={(e) => handleNewContactChange("email", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-phone">Phone (optional)</Label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={newContact.phone}
              onChange={(e) => handleNewContactChange("phone", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-wallet">Wallet address (optional)</Label>
            <Input
              id="contact-wallet"
              placeholder="Solana wallet address"
              value={newContact.walletAddress}
              onChange={(e) => handleNewContactChange("walletAddress", e.target.value)}
            />
          </div>
        </div>

        <Button
          onClick={handleAddContact}
          disabled={!newContact.name || !newContact.email}
          className="w-full"
          variant="outline"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>

      {data.backupContacts.length === 0 && (
        <div className="flex items-center justify-center py-4 text-muted-foreground text-sm">
          <p>No backup contacts added yet. This step is optional.</p>
        </div>
      )}
    </div>
  )
}
