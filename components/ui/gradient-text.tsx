import React from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export function GradientText({
  children,
  className,
  as: Component = 'span',
  ...props
}: GradientTextProps) {
  const gradientClass = 'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'
  
  return React.createElement(
    Component,
    {
      className: cn(gradientClass, className),
      ...props,
    },
    children
  )
}
