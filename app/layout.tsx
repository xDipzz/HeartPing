import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletContextProvider } from "@/components/wallet-provider"
import { Toaster } from "@/components/toaster"
import { SimpleBackground } from "@/components/simple-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HeartPing - Remind yourself before your wallet dies before you do",
  description: "A friendly, decentralized alert system that lets users set inactivity timers for Solana wallets",
  openGraph: {
    title: "HeartPing - Solana Wallet Inactivity Alert System",
    description: "A friendly, decentralized alert system that lets users set inactivity timers for Solana wallets",
    url: "https://heartping.xyz",
    siteName: "HeartPing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HeartPing - Solana Wallet Inactivity Alert System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <WalletContextProvider>
            <SimpleBackground />
            {children}
            <Toaster />
          </WalletContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
