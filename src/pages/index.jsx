import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { RubyGems } from '@/components/RubyGems'
import { NodePackages } from '@/components/NodePackages'
import { SalesforceResources } from '@/components/SalesforceResources'
import { Websites } from '@/components/Websites'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chiefpansancolt Development</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <RubyGems />
        <NodePackages />
        <SalesforceResources />
        <Websites />
      </main>
      <Footer />
    </>
  )
}
