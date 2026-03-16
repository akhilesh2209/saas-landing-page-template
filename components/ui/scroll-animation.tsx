'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  variant?: 'fade-in' | 'slide-up' | 'scale-in'
  delay?: number
  duration?: number
}

export function ScrollAnimation({
  children,
  className,
  variant = 'slide-up',
  delay = 0,
  duration = 0.5,
}: ScrollAnimationProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    'fade-in': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    'slide-up': {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    'scale-in': {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
    },
  }

  const selectedVariant = variants[variant]

  return (
    <motion.div
      ref={ref}
      initial={selectedVariant.initial}
      animate={isInView ? selectedVariant.animate : selectedVariant.initial}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
