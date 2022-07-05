import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Welcome to{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          Chiefpansancolt{`'`}s
        </span>{' '}
        Developer Space
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Here you will find all the offereings Chief has built over the years, from Ruby Gems, Node Packages,
        Salesforce Resources and Packages, and Websites. Checkout documentation for each where applicable here.
      </p>
      <div className="mt-10 flex justify-center space-x-6">
        <ButtonLink href="https://chrispezza.me">Check Me Out</ButtonLink>
        <ButtonLink
          href="https://github.com/chiefpansancolt"
          variant="outline"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" className="h-5 w-5 flex-none"/>
          <span className="ml-3">GitHub</span>
        </ButtonLink>
      </div>
    </Container>
  )
}
