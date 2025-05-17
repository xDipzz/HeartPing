# HeartPing — Decentralized Wallet Inactivity Alert System on Solana

## What is HeartPing?

**HeartPing** is a decentralized alert system built on the Solana blockchain that monitors wallet activity and sends timely notifications if your wallet remains inactive for a specified period. It helps users and their trusted contacts stay informed and take action before any irreversible asset loss occurs.

## Why HeartPing?

In the decentralized crypto ecosystem, losing access to your wallet due to inactivity or unforeseen circumstances can result in permanent loss of funds. Traditional financial systems offer legacy planning tools, but crypto assets lack such mechanisms. HeartPing fills this critical gap by providing a secure, privacy-focused solution that proactively reminds users and their backup contacts.

## How It Works

1. **Connect Wallet:** Link your Solana wallet using supported adapters (Phantom, Backpack, etc.).  
2. **Set Inactivity Threshold:** Define the period of inactivity that triggers alerts.  
3. **Customize Alerts:** Personalize your reminder messages and select preferred delivery channels—on-chain messages, SMS, email, or push notifications.  
4. **Add Backup Contacts:** Optionally include trusted contacts such as family members, partners, or legal advisors to receive alerts.  
5. **Stay Protected:** HeartPing continuously monitors wallet activity and sends alerts as configured.

## Key Features

- Fully decentralized monitoring on Solana blockchain  
- Custom inactivity timers per user  
- Multi-channel alert delivery via SMS (Twilio), Email (EmailJS/Resend), On-chain Dialect messages, and Push notifications  
- Support for backup contacts  
- End-to-end encrypted data with no centralized storage  
- Responsive UI with dark/light mode using Next.js, TypeScript, and TailwindCSS  
- Compatible with major Solana wallets via @solana/wallet-adapter  

## Technology Stack

- **Frontend:** Next.js (TypeScript)  
- **Styling:** TailwindCSS with dark/light mode  
- **State Management:** Zustand or React Context  
- **Wallet Integration:** @solana/wallet-adapter  
- **Form Handling:** React Hook Form + Zod validation  
- **Messaging Services:** Twilio (SMS), EmailJS/Resend (Email), Dialect SDK (On-chain messaging)  
- **Deployment:** Vercel or Netlify  

## Getting Started

1. Clone the repository  
2. Install dependencies with `npm install` or `yarn`  
3. Set up environment variables for API keys (Twilio, EmailJS/Resend, etc.)  
4. Run the development server with `npm run dev` or `yarn dev`  
5. Connect your Solana wallet and configure your HeartPing alerts  

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or new features.



**Protect your digital assets. Stay connected. HeartPing.**

