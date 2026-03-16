'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Plug, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const steps = [
  {
    icon: Plug,
    title: 'Connect Your Tools',
    description: 'Easily connect your favorite tools and services with just a few clicks. No technical knowledge required.',
    number: '01',
  },
  {
    icon: Zap,
    title: 'Automate Workflows',
    description: 'Set up powerful automations that save you hours of manual work every week. Focus on what matters.',
    number: '02',
  },
  {
    icon: TrendingUp,
    title: 'Scale Your Business',
    description: 'Watch your productivity soar as your team works smarter. Achieve more with less effort.',
    number: '03',
  },
]

export function HowItWorks() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="px-4 py-16 md:px-8 md:py-24 relative overflow-hidden bg-secondary/30 dark:bg-card/20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Get Started in
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Three Simple Steps
              </span>
            </h2>
          </div>
        </ScrollAnimation>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index}>
                <motion.div
                  variants={itemVariants}
                  className="h-full"
                >
                  {/* Connection line and arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-32 translate-x-1/2 -translate-y-1/2">
                      <motion.svg
                        width="60"
                        height="4"
                        viewBox="0 0 60 4"
                        fill="none"
                        className="text-primary/30"
                      >
                        <motion.line
                          x1="0"
                          y1="2"
                          x2="60"
                          y2="2"
                          stroke="currentColor"
                          strokeWidth="2"
                          initial={{ strokeDasharray: 60, strokeDashoffset: 60 }}
                          whileInView={{ strokeDashoffset: 0 }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </motion.svg>
                    </div>
                  )}

                  {/* Card */}
                  <div className="backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-2xl p-8 transition-all duration-300 hover:border-primary/40 dark:hover:border-primary/40 h-full relative group">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    {/* Number badge */}
                    <div className="mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors"
                      >
                        <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                          {step.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="mb-4"
                    >
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow indicator */}
                    {index < steps.length - 1 && (
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mt-6 inline-block md:hidden text-primary"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
