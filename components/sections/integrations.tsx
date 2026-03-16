'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Mail, Code, Database, Cloud, Lock } from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const integrations = [
  {
    icon: Zap,
    name: 'Slack',
    description: 'Get instant notifications in Slack',
    color: 'text-blue-500',
  },
  {
    icon: Mail,
    name: 'Email',
    description: 'Send and receive messages',
    color: 'text-red-500',
  },
  {
    icon: Code,
    name: 'GitHub',
    description: 'Sync with your repositories',
    color: 'text-gray-700 dark:text-gray-300',
  },
  {
    icon: Database,
    name: 'Zapier',
    description: 'Connect to 5000+ apps',
    color: 'text-orange-500',
  },
  {
    icon: Cloud,
    name: 'Google Drive',
    description: 'Access your cloud files',
    color: 'text-green-500',
  },
  {
    icon: Lock,
    name: 'Stripe',
    description: 'Process payments safely',
    color: 'text-purple-500',
  },
]

export function Integrations() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  }

  return (
    <section className="px-4 py-16 md:px-8 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Seamless
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Integrations
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with your favorite tools and services to streamline your workflow.
            </p>
          </div>
        </ScrollAnimation>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
                className="group backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:border-white/40 dark:hover:border-white/40"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="mb-4 inline-block"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${integration.color}`} />
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            And <span className="font-semibold text-foreground">100+ more integrations</span> available
          </p>
        </motion.div>
      </div>
    </section>
  )
}
