'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { GradientText } from '@/components/ui/gradient-text'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export function Hero() {
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

  const floatingElements = [
    { delay: 0, x: 100, y: 100 },
    { delay: 0.2, x: -120, y: -80 },
    { delay: 0.4, x: 80, y: -120 },
  ]

  return (
    <section className="relative overflow-hidden pt-32 pb-28 md:pt-48 md:pb-36">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            backgroundSize: '200% 200%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Gradient blobs for depth */}
      {floatingElements.map((element, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7 + i,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-15 dark:opacity-8 -z-5 pointer-events-none"
          style={{
            left: `${element.x}px`,
            top: `${element.y}px`,
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Introducing the next generation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4">
              The Future of <GradientText as="span">SaaS</GradientText>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build, launch, and scale your product with our premium platform. 
              Trusted by thousands of teams worldwide.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-primary)]">
                Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/20 rounded-2xl p-6 transition-all duration-300 overflow-hidden border border-primary/20 shadow-2xl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/10 to-transparent flex items-center justify-center relative overflow-hidden">
                {/* Dashboard mockup */}
                <div className="w-full h-full p-6 flex flex-col gap-4">

  {/* top navbar */}
  <div className="h-8 bg-primary/20 rounded-lg w-full" />

  {/* stat cards */}
  <div className="grid grid-cols-3 gap-4 mt-2">
    <div className="bg-primary/10 rounded-lg p-3">
      <p className="text-xs text-muted-foreground">Revenue</p>
      <p className="text-sm font-bold">$45K</p>
    </div>

    <div className="bg-primary/10 rounded-lg p-3">
      <p className="text-xs text-muted-foreground">Users</p>
      <p className="text-sm font-bold">1,234</p>
    </div>

    <div className="bg-primary/10 rounded-lg p-3">
      <p className="text-xs text-muted-foreground">Growth</p>
      <p className="text-sm font-bold">+23%</p>
    </div>
  </div>

  {/* fake chart */}
  <div className="flex items-end justify-center gap-2 h-24 mt-4">
    <div className="bg-primary/40 w-4 h-10 rounded" />
    <div className="bg-primary/40 w-4 h-16 rounded" />
    <div className="bg-primary/40 w-4 h-12 rounded" />
    <div className="bg-primary/40 w-4 h-20 rounded" />
    <div className="bg-primary/40 w-4 h-14 rounded" />
    <div className="bg-primary/40 w-4 h-24 rounded" />
  </div>

</div>

                {/* Floating accent elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border-2 border-primary/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full border-2 border-accent/20"
                />
              </div>
            </motion.div>

            {/* Glow effect */}
            <motion.div
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
