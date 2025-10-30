import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FaGithub } from 'react-icons/fa';

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Welcome to{' '}
        <span className="relative whitespace-nowrap text-blue-600">Chiefpansancolt{`'`}s</span>{' '}
        Developer Space
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Here you will find all the offerings Chief has built over the years, from Ruby Gems, Node
        Packages, Salesforce Resources and Packages, and Websites. Checkout documentation for each
        where applicable here.
      </p>
      <div className="mt-10 flex justify-center space-x-6">
        <Button href="https://chrispezza.me">Check Me Out</Button>
        <Button href="https://github.com/chiefpansancolt" variant="outline">
          <FaGithub className="h-4 w-4" />
          <span className="ml-3">GitHub</span>
        </Button>
      </div>
    </Container>
  )
}