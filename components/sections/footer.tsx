'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GradientText } from '@/components/ui/gradient-text'
import { Mail, Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
    { label: 'Status', href: '#status' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Templates', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'License', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
]

export function Footer() {
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

  return (
    <footer className="border-t border-border/40 bg-secondary/50 dark:bg-card/20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
              SaaS Pro
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              The complete platform for building, launching, and scaling your SaaS application.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-foreground/60 hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/40 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Copyright */}
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} SaaS Pro. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg border border-border/40 hover:bg-secondary/50 hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground/60 hover:text-primary transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
