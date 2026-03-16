'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const companies = [
  { name: 'Company A', logo: '🚀' },
  { name: 'Company B', logo: '⚡' },
  { name: 'Company C', logo: '🎨' },
  { name: 'Company D', logo: '💡' },
  { name: 'Company E', logo: '🔮' },
  { name: 'Company F', logo: '✨' },
]

export function TrustedBy() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation variant="fade-in" className="text-center mb-12">
          <p className="text-sm font-semibold text-primary/80 mb-2">TRUSTED BY INDUSTRY LEADERS</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by thousands of teams
          </h2>
        </ScrollAnimation>

        {/* Horizontal scroll logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <motion.div
            animate={{ x: [-20, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {companies.map((company, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center justify-center p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur hover:bg-card/80 transition-colors"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{company.logo}</div>
                  <p className="text-sm font-medium text-foreground/70">
                    {company.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
