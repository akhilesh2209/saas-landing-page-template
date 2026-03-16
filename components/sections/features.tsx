'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Rocket, BarChart3, Users, Settings } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with cutting-edge performance optimization and instant load times.',
    color: 'text-yellow-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with encryption, compliance, and advanced threat protection.',
    color: 'text-blue-500',
  },
  {
    icon: Rocket,
    title: 'Easy Integration',
    description: 'Seamless integration with your existing tools and workflows in minutes.',
    color: 'text-red-500',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive insights and powerful analytics to drive data-driven decisions.',
    color: 'text-green-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in collaboration tools to keep your team aligned and productive.',
    color: 'text-purple-500',
  },
  {
    icon: Settings,
    title: '24/7 Support',
    description: 'Dedicated support team available round the clock to help you succeed.',
    color: 'text-indigo-500',
  },
]

export function Features() {
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
    <section id="features" className="px-4 py-16 md:px-8 md:py-24 bg-secondary/30 dark:bg-card/20">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation variant="slide-up" className="text-center mb-16">
          <p className="text-sm font-semibold text-primary/80 mb-2">POWERFUL FEATURES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            Comprehensive features designed to help you build, launch, and scale faster.
          </p>
        </ScrollAnimation>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <ScrollAnimation delay={index * 0.1} variant="scale-in">
                  <GlassCard variant="elevated" className="h-full">
                    <div className="flex flex-col gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${feature.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-foreground/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollAnimation>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
