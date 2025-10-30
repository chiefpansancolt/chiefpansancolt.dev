import '@/styles/tailwind.css';
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import { Inter, Lexend } from 'next/font/google'

export const metadata = {
  title: 'Chiefpansancolt Development',
  description:
    'Find Documentation to all things built by Chiefpansancolt. From Ruby Gems, to Node Packages, to Salesforce resources, find Simplecov Tailwind, Stimulus Tailwind Components, Package Builder, LWC Components.',
  keywords:
    'tailwind, stimulusJS, chiefpansancolt, simplecov, salesforce, lwc, lightning components',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
