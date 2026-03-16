'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  const headerVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <motion.header
      initial={headerVariants.initial}
      animate={headerVariants.animate}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-xl bg-background/80"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent cursor-pointer"
          >
            SaaS Pro
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </motion.button>
            )}

            <Button
  onClick={() =>
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-primary)]"
>
  Get Started
</Button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg border border-border hover:bg-secondary/50"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-border/40"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
