'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Subtle gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/2 -left-20 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))',
        }}
      />
      
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        }}
      />
    </div>
  )
}
