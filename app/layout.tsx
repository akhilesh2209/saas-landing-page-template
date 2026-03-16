import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import { BackgroundEffects } from '@/components/ui/background-effects'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Premium SaaS Landing Page Template',
  description: 'A beautiful, modern SaaS landing page template with dark/light mode, smooth animations, and ultra-clean design.',
 icons: {
  icon: '/favicon.ico',
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <BackgroundEffects />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
