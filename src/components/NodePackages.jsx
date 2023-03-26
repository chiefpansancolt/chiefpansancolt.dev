import { Container } from "@/components/Container"
import { nodepackages } from "@/data/features"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

function Feature({ feature, className }) {
  return (
    <div className={clsx(className)}>
      <div className="w-9 rounded-lg">
        <Image src={feature.icon} alt="" width={100} height={100} />
      </div>
      <h3 className="mt-6 text-sm font-medium text-blue-600">{feature.name}</h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        <Link href={feature.href}>{feature.summary}</Link>
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {nodepackages.map((nodepackage) => (
        <div key={nodepackage.name}>
          <Feature feature={nodepackage} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <div className="grid grid-cols-3 gap-x-8">
        {nodepackages.map((nodepackage) => (
          <Feature key={nodepackage.name} feature={nodepackage} className="relative" />
        ))}
      </div>
    </div>
  )
}

export function NodePackages() {
  return (
    <section
      id="nodepackages"
      aria-labelledby="nodepackages-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="nodepackages-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Node Packages
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Packages available to install via Node JS.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
