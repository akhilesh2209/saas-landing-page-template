'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated'
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={variant === 'elevated' ? { y: -6, scale: 1.01 } : { y: -2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-2xl p-6 transition-all duration-300',
        variant === 'elevated' && 'shadow-lg',
        'hover:border-white/40 dark:hover:border-white/30',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
