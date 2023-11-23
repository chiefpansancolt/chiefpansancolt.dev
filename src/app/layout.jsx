import { Inter } from "next/font/google"
import clsx from 'clsx'

import "@/styles/tailwind.css"
import "focus-visible"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chiefpansancolt Development",
  description:
    "Find Documentation to all things built by Chiefpansancolt. From Ruby Gems, to Node Packages, to Salesforce resources, find Simplecov Tailwind, Stimulus Tailwind Components, Package Builder, LWC Components.",
  keywords:
    "tailwind, stimulusJS, chiefpansancolt, devgenerator, simplecov, salesforce, lwc, lightning components",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `,
          }}
        />
      </head>
      <body className={clsx('flex h-full flex-col', inter.className)}>
        {children}
      </body>
    </html>
  )
}
