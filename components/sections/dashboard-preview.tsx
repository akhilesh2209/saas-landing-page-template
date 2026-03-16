'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

const chartData = [
  { name: 'Jan', value: 400, revenue: 2400 },
  { name: 'Feb', value: 600, revenue: 3200 },
  { name: 'Mar', value: 800, revenue: 4100 },
  { name: 'Apr', value: 950, revenue: 4500 },
  { name: 'May', value: 1200, revenue: 5300 },
  { name: 'Jun', value: 1500, revenue: 6200 },
]

export function DashboardPreview() {
  return (
    <section id="dashboard" className="px-4 py-16 md:px-8 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Powerful Analytics
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Dashboard
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get real-time insights into your business with our advanced analytics and reporting tools.
            </p>
          </div>
        </ScrollAnimation>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect behind dashboard */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-2xl" />

          {/* Dashboard card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="backdrop-blur-xl bg-white/50 dark:bg-white/5 border border-primary/20 rounded-3xl p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden"
          >
            {/* Dashboard header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Monthly Performance</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-4 gap-4">
                <div className="backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-xl p-4 border border-white/20 hover:scale-[1.03] transition-transform">
                  <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                  <p className="text-2xl font-bold">$45.2K</p>
                  <p className="text-xs text-green-500 mt-1">+12.5%</p>
                </div>
                <div className="backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-xl p-4 border border-white/20 hover:scale-[1.03] transition-transform">
                  <p className="text-xs text-muted-foreground mb-1">Users</p>
                  <p className="text-2xl font-bold">1,234</p>
                  <p className="text-xs text-green-500 mt-1">+8.2%</p>
                </div>
                <div className="backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-xl p-4 border border-white/20 hover:scale-[1.03] transition-transform">
                  <p className="text-xs text-muted-foreground mb-1">Growth</p>
                  <p className="text-2xl font-bold">23.5%</p>
                  <p className="text-xs text-green-500 mt-1">+4.1%</p>
                </div>
                <div className="backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-xl p-4 border border-white/20 hover:scale-[1.03] transition-transform">
                  <p className="text-xs text-muted-foreground mb-1">Conversion</p>
                  <p className="text-2xl font-bold">3.8%</p>
                  <p className="text-xs text-green-500 mt-1">+0.9%</p>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Line chart */}
              <div className="backdrop-blur-md bg-white/20 dark:bg-white/5 rounded-2xl p-6 border border-white/20">
                <h4 className="text-sm font-semibold text-foreground mb-4">Revenue Trend</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(20, 20, 40, 0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--color-primary)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Bar chart */}
              <div className="backdrop-blur-md bg-white/20 dark:bg-white/5 rounded-2xl p-6 border border-white/20">
                <h4 className="text-sm font-semibold text-foreground mb-4">User Growth</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(20, 20, 40, 0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="value" fill="var(--color-accent)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
