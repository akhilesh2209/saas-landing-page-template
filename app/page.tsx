'use client'

import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { TrustedBy } from '@/components/sections/trusted-by'
import { Stats } from '@/components/sections/stats'
import { DashboardPreview } from '@/components/sections/dashboard-preview'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Features } from '@/components/sections/features'
import { Integrations } from '@/components/sections/integrations'
import { Pricing } from '@/components/sections/pricing'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBy />
      <Stats />
      <DashboardPreview />
      <HowItWorks />
      <Features />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
