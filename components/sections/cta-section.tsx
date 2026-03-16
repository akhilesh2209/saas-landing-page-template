'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import { GradientText } from '@/components/ui/gradient-text'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function CTASection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 blur-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollAnimation variant="slide-up">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Ready to transform your business?
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Start your free trial <GradientText as="span">today</GradientText>
            </h2>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
              Join thousands of teams that are already using our platform to build, 
              launch, and scale their products faster.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-primary)]">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-foreground/60"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                No credit card required
              </div>
              <div className="hidden sm:block w-px h-5 bg-border/40" />
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                14-day free trial
              </div>
              <div className="hidden sm:block w-px h-5 bg-border/40" />
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Cancel anytime
              </div>
            </motion.div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
