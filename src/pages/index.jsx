import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { NodePackages } from "@/components/NodePackages"
import { RubyGems } from "@/components/RubyGems"
import { SalesforceResources } from "@/components/SalesforceResources"
import { Websites } from "@/components/Websites"
import Head from "next/head"

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
