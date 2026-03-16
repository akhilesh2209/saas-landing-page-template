'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    avatar: '👩‍💼',
    content:
      'This platform transformed how we manage our projects. The intuitive interface and powerful features saved us countless hours every week.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder of InnovateCo',
    avatar: '👨‍💻',
    content:
      'Outstanding customer support and continuous improvements. We\'ve seen a 40% increase in productivity since implementing this solution.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'CTO at DataFlow',
    avatar: '👩‍🚀',
    content:
      'The seamless integration with our existing tools was exactly what we needed. Highly recommended for any growing team.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Product Manager at BuildLabs',
    avatar: '👨‍🔬',
    content:
      'Enterprise-grade features at a reasonable price. This is a game-changer for teams looking to scale without complexity.',
    rating: 5,
  },
]

export function Testimonials() {
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

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section id="testimonials" className="px-4 py-16 md:px-8 md:py-24 bg-secondary/30 dark:bg-card/20">
      <div className="mx-auto max-w-7xl">
        <ScrollAnimation variant="slide-up" className="text-center mb-16">
          <p className="text-sm font-semibold text-primary/80 mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            See what our customers have to say about their experience.
          </p>
        </ScrollAnimation>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ScrollAnimation delay={index * 0.1} variant="scale-in">
                <GlassCard variant="elevated">
                  <div className="flex flex-col gap-4 h-full">
                    {/* Rating */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex gap-1"
                    >
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </motion.div>

                    {/* Content */}
                    <p className="text-foreground/80 flex-grow leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
