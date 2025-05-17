# HeartPing — Decentralized Wallet Inactivity Alert System for Solana

**HeartPing** is a privacy-focused, decentralized notification service that helps Solana wallet users stay connected to their digital assets by sending timely inactivity alerts. It acts as a safety net for your decentralized life — reminding you or your trusted backup contacts before your wallet goes dormant for too long.

## Why HeartPing?

In the fast-paced crypto world, wallets can become inactive due to forgetfulness, travel, or unexpected circumstances. Many existing inactivity-based systems prematurely trigger irreversible asset transfers without giving users enough warning. HeartPing solves this by sending customizable, friendly reminders via multiple channels—on-chain messages, SMS, email, or push notifications—before any critical action is taken.

## Features

- **Fully decentralized logic** on Solana ensures security and trustlessness  
- Set customizable inactivity thresholds to suit your needs  
- Personalized message templates for self or backup contacts  
- Multi-channel alert delivery: on-chain Dialect messages, SMS (via Twilio), Email (via EmailJS/Resend), and Push notifications  
- Add backup contacts like family members, lawyers, or partners to receive alerts  
- Dark/light mode toggle with sleek, modern UI built using Next.js and TailwindCSS  
- Seamless wallet integration using @solana/wallet-adapter (Phantom, Backpack, etc.)  
- Robust onboarding wizard to guide users through setup  
- Privacy-first design with encrypted data and no centralized storage  
- Easily deployable with Vercel or Netlify  

## Tech Stack

- Frontend: Next.js + TypeScript + TailwindCSS  
- Wallet Integration: @solana/wallet-adapter  
- State Management: Zustand / React Context  
- Form Handling: React Hook Form + Zod  
- Messaging APIs: Twilio, EmailJS/Resend, Dialect SDK  
- Backend: Optional tRPC or Next.js API Routes  

## Getting Started

1. Connect your Solana wallet  
2. Set your desired inactivity period  
3. Customize your alert message and choose delivery methods  
4. Add trusted backup contacts (optional)  
5. Relax — HeartPing will monitor your wallet and send alerts when needed

## Roadmap & Contribution

We welcome contributions! Planned improvements include support for push notifications, Telegram integration, encrypted message storage, multi-language support, and enhanced security features.

---

**Join us in making decentralized asset management safer and smarter!**
