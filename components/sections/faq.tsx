'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const faqs = [
  {
    question: 'How do I get started with the platform?',
    answer:
      'Getting started is simple! Sign up for a free account, create your first project, and begin exploring our features. We also provide comprehensive documentation and video tutorials to help you along the way.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely through industry-standard encryption.',
  },
  {
    question: 'Can I switch plans or cancel anytime?',
    answer:
      'Absolutely! You can upgrade, downgrade, or cancel your subscription at any time. If you cancel, you\'ll have access to your account through the end of the billing period.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes! We offer a 14-day free trial for all plans with full access to all features. No credit card required to get started.',
  },
  {
    question: 'How is my data protected?',
    answer:
      'We use bank-level encryption, regular security audits, and comply with GDPR, HIPAA, and SOC 2 standards. Your data is stored across redundant servers for maximum availability.',
  },
  {
    question: 'Do you offer API access?',
    answer:
      'Yes! We provide a comprehensive REST API and webhooks for custom integrations. Enterprise customers also get access to our GraphQL API for advanced use cases.',
  },
]

export function FAQ() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section id="faq" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl max-w-3xl">
        <ScrollAnimation variant="slide-up" className="text-center mb-16">
          <p className="text-sm font-semibold text-primary/80 mb-2">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Questions? We have answers
          </h2>
          <p className="text-lg text-foreground/60 mt-4">
            Find answers to common questions about our platform, pricing, and support.
          </p>
        </ScrollAnimation>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-border/40 hover:border-border/60 transition-colors"
                >
                  <AccordionTrigger className="py-4 text-left text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <ScrollAnimation
          variant="fade-in"
          delay={0.4}
          className="text-center mt-16 pt-8 border-t border-border/40"
        >
          <p className="text-foreground/70 mb-4">
            Can't find the answer you're looking for?
          </p>
          <motion.a
            whileHover={{ x: 5 }}
            href="mailto:support@example.com"
            className="inline-block text-primary font-semibold hover:underline"
          >
            Contact our support team →
          </motion.a>
        </ScrollAnimation>
      </div>
    </section>
  )
}
