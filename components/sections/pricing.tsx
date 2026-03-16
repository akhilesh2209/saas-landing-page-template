'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'Up to 10 projects',
      'Basic analytics',
      'Community support',
      '5GB storage',
      'Core integrations',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For growing teams',
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      '100GB storage',
      'All integrations',
      'Custom domains',
      'Team collaboration',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: 249,
    yearlyPrice: 2490,
    features: [
      'Unlimited everything',
      'Custom analytics',
      'Dedicated support',
      'Unlimited storage',
      'Advanced security',
      'SSO/SAML',
      'Custom integrations',
      'SLA guarantee',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section id="pricing" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation variant="slide-up" className="text-center mb-16">
          <p className="text-sm font-semibold text-primary/80 mb-2">PRICING</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={isYearly ? 'text-foreground/60' : 'text-foreground'}>Monthly</span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-primary/20 border border-primary/30 rounded-full"
            >
              <motion.div
                layout
                className="absolute top-1 w-6 h-6 bg-primary rounded-full"
                style={{ left: isYearly ? 'calc(100% - 28px)' : '4px' }}
              />
            </motion.button>
            <div className="flex items-center gap-2">
              <span className={isYearly ? 'text-foreground' : 'text-foreground/60'}>Yearly</span>
              {isYearly && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full"
                >
                  Save 17%
                </motion.span>
              )}
            </div>
          </div>
        </ScrollAnimation>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ScrollAnimation delay={index * 0.1} variant="scale-in">
                <GlassCard
                  variant="elevated"
                  className={`relative h-full overflow-hidden transition-all duration-300 ${
                    plan.highlighted
                      ? 'border-primary/50 ring-1 ring-primary/50 scale-105'
                      : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                  )}

                  <div className="relative z-10">
                    {plan.highlighted && (
                      <div className="mb-4 inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        Most Popular
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-foreground/60 text-sm mb-6">
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <motion.div
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-baseline gap-2"
                      >
                        <span className="text-5xl font-bold">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-foreground/60">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      </motion.div>
                    </div>

                    <Button
                      className={`w-full mb-8 ${
                        plan.highlighted
                          ? 'bg-primary hover:bg-primary/90 button-glow'
                          : 'border border-primary/30 hover:bg-primary/5'
                      }`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>

                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
