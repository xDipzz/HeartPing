"use client"

import Link from "next/link"
import { WalletMultiButton } from "@/components/wallet-multi-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Heart } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="font-bold text-lg">HeartPing</span>
        </Link>

        {/* Navigation in the middle */}
        <nav className="mx-auto flex items-center space-x-6">
          <Link href="#how-it-works" className="transition-colors hover:text-foreground/80 link-effect">
            How It Works
          </Link>
          <Link href="#features" className="transition-colors hover:text-foreground/80 link-effect">
            Features
          </Link>
          <Link href="#demo" className="transition-colors hover:text-foreground/80 link-effect">
            Demo
          </Link>
          <Link href="#faq" className="transition-colors hover:text-foreground/80 link-effect">
            FAQ
          </Link>
        </nav>

        {/* Theme toggle and wallet button on the right */}
        <div className="flex items-center space-x-2 ml-auto">
          <ThemeToggle />
          <WalletMultiButton />
        </div>
      </div>
    </header>
  )
}
