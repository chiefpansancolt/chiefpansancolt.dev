import logoStimulusTailwind from '@/images/logos/Stimulus-x-Tailwind-icon.png'
import screenshotSimplecovTailwind from '@/images/screenshots/simplecov-tailwindcss.png'
import screenshotChrispezzaSite from '@/images/screenshots/chrispezza-site.png'
import screenshotChiefpansancoltLiveSite from '@/images/screenshots/chiefpansancolt-live-site.png'
import screenshotChiefpansancoltDevSite from '@/images/screenshots/chiefpansancolt-dev-site.png'
import screenshotDevgeneratorSite from '@/images/screenshots/devgenerator-site.png'

const rubygems = [
  {
    title: 'Simplecov Tailwind',
    description: 'Simplecov Output of HTML using Tailwind UX design',
    image: screenshotSimplecovTailwind,
    href: 'https://simplecov-tailwind.chiefpansancolt.dev',
  },
]

const nodepackages = [
  {
    name: 'Stimulus Extension',
    summary: 'Stimulus x Tailwind',
    description:
      'A Package built to mimic headless UI for stimulus usage, favoring Tailwind style Guide',
    icon: logoStimulusTailwind,
    href: 'https://stimulus-tailwind.chiefpansancolt.dev',
  },
]

const salesforce = [
  {
    name: 'Salesforce Package',
    summary: 'Package Builder',
    description:
      'A Installable Package that provides a user the ability to build Package.xml or sfdx Cmd outputs with ease.',
    icon: 'salesforce',
    iconClasses: 'text-salesforce h-9 w-9',
    href: 'https://package-builder.chiefpansancolt.dev',
  },
  {
    name: 'Salesforce Resources',
    summary: 'LWC Components',
    description: 'Standard Components built with SLDS flavors for LWC usage.',
    icon: 'bolt',
    iconClasses: 'text-yellow-500 h-6 w-6',
    href: 'https://lwc-components.chiefpansancolt.dev',
  },
]

const websites = [
  {
    title: 'chrispezza.me',
    description: 'Portfolio site about Christopher Pezza with resume.',
    image: screenshotChrispezzaSite,
    href: 'https://chrispezza.me',
  },
  {
    title: 'chiefpansancolt.live',
    description:
      'Persona Site for Christopher Pezza showcasing Chiefpansancolt with livestreams, and videos.',
    image: screenshotChiefpansancoltLiveSite,
    href: 'https://chiefpansancolt.live',
  },
  {
    title: 'chiefpansancolt.dev',
    description:
      'Developer site for Christopher Pezza for all development work available to the public to provide a one stop shop to access to documentation and showcasing of items.',
    image: screenshotChiefpansancoltDevSite,
    href: 'https://chiefpansancolt.dev',
  },
  {
    title: 'devgenerator.io',
    description:
      'Site to give developers the ability to generate files based on common tools used like Package.json, Rubocop and many more.',
    image: screenshotDevgeneratorSite,
    href: 'https://devgenerator.io',
  },
]

export { rubygems, nodepackages, salesforce, websites }
