'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Globe, Shield, Zap } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const stats = [
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users',
    description: 'Growing community of satisfied users',
  },
  {
    icon: Globe,
    value: '120+',
    label: 'Countries',
    description: 'Serving customers worldwide',
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'Uptime',
    description: 'Enterprise-grade reliability',
  },
  {
    icon: Zap,
    value: '500+',
    label: 'Integrations',
    description: 'Connect with your tools',
  },
]

export function Stats() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="px-4 py-16 md:px-8 md:py-24 relative overflow-hidden bg-secondary/30 dark:bg-card/20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Trusted by
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Teams Worldwide
              </span>
            </h2>
          </div>
        </ScrollAnimation>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/10 hover:border-white/40 dark:hover:border-white/40"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="mb-4"
                >
                  <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="font-semibold text-foreground mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
