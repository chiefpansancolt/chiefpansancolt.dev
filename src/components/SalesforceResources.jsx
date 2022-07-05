import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import backgroundImage from '@/images/background-features.jpg'

import { Container } from '@/components/Container'
import { salesforce } from '@/data/features'

function Feature({ feature, className }) {
  return (
    <div className={clsx(className)}>
      <div className='rounded-lg'>
        <FontAwesomeIcon icon={feature.icon} className={feature.iconClasses}/>
      </div>
      <h3 className='mt-6 text-sm font-medium text-blue-100'>
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-white">
        <Link href={feature.href}>
          {feature.summary}
        </Link>
      </p>
      <p className="mt-4 text-sm text-slate-200">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {salesforce.map((sf) => (
        <div key={sf.name}>
          <Feature feature={sf} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <div className="grid grid-cols-3 gap-x-8">
        {salesforce.map((sf) => (
          <Feature
            key={sf.name}
            feature={sf}
            className="relative"
          />
        ))}
      </div>
    </div>
  )
}

export function SalesforceResources() {
  return (
    <section
      id="salesforce"
      aria-labelledby="salesforce-title"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2245}
          height={1636}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="salesforce-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            Salesforce Resources &amp; Packages
          </h2>
          <p className="mt-4 text-lg tracking-tight text-blue-100">
            Packages and Resources available for Salesforce.com
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
