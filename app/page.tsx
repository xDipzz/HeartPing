"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import SiteHeader from "@/components/site-header"
import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard"
import { useWallet } from "@solana/wallet-adapter-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  const [showOnboarding, setShowOnboarding] = useState(false)
  const { connected } = useWallet()

  return (
    <>
      <SiteHeader />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <CtaSection />
      <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Demo</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Try it out</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience HeartPing with our interactive demo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                {connected ? (
                  <Button onClick={() => setShowOnboarding(true)} size="lg">
                    Set Up Your HeartPing
                  </Button>
                ) : (
                  <Button asChild size="lg">
                    <Link href="/demo">Try the Demo</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
      <section id="compliance" className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-muted-foreground border-t border-muted pt-6">
              <strong>Disclaimer:</strong> HeartPing is a reminder tool only. It does not initiate transactions or
              access your funds. The service is provided "as is" without warranty of any kind.
            </p>
          </div>
        </div>
      </section>

      <OnboardingWizard open={showOnboarding} onOpenChange={setShowOnboarding} />
    </>
  )
}
