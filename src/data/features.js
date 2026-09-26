import logoStimulusTailwind from '@/images/logos/Stimulus-x-Tailwind-Icon.png'
import logoStardewValley from '@/images/logos/stardew-valley-icon.png'
import logoClashOfClans from '@/images/logos/clash-of-clans-icon.jpeg'
import logoDinkumData from '@/images/logos/dinkum-data-icon.png'
import screenshotGamerDexSite from '@/images/screenshots/gamerdex-site.png'
import screenshotTodoListApp from '@/images/screenshots/TodoList.png'
import screenshotChiefpansancoltDevSite from '@/images/screenshots/chiefpansancolt-dev-site.png'
import screenshotChrispezzaSite from '@/images/screenshots/chrispezza-site.png'
import screenshotSimplecovTailwind from '@/images/screenshots/simplecov-tailwindcss.png'

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
  {
    name: 'Stardew Valley Data',
    summary: 'stardew-valley-data',
    description:
      'A comprehensive, fully-typed dataset for Stardew Valley Structured JSON data, 1,900+ image assets, and a chainable query builder API for game items, crops, fish, villagers, shops, and more.',
    icon: logoStardewValley,
    href: 'https://stardew-valley-data.chiefpansancolt.dev',
  },
  {
    name: 'Clash of Clans Data',
    summary: 'clash-of-clans-data',
    description:
      'A comprehensive, fully-typed dataset for Clash of Clans Structured JSON data, image assets, and a chainable query builder API for troops, spells, buildings, heroes, and more.',
    icon: logoClashOfClans,
    href: 'https://coc-data.chiefpansancolt.dev',
  },
  {
    name: 'Dinkum Data',
    summary: 'dinkum-data',
    description:
      'A comprehensive, fully-typed dataset for Dinkum: structured JSON data, 2,000+ image assets, and a chainable query builder API for animals, farming, gear, recipes, and more.',
    icon: logoDinkumData,
    href: 'https://dinkum-data.chiefpansancolt.dev',
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
    summary: 'Automation Framework',
    description: 'Trigger Framework with Error Logger to help with Apex Development',
    icon: 'salesforce',
    iconClasses: 'text-salesforce h-9 w-9',
    href: 'https://sf-automation-framework.chiefpansancolt.dev',
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
    title: 'chiefpansancolt.dev',
    description:
      'Developer site for Christopher Pezza for all development work available to the public to provide a one stop shop to access to documentation and showcasing of items.',
    image: screenshotChiefpansancoltDevSite,
    href: 'https://chiefpansancolt.dev',
  },
  {
    title: 'GamerDex',
    description: 'Your Ultimate Game Companion, track items, complete collections, and conquer every game with purpose-built tracker companions. Never miss a collectible again.',
    image: screenshotGamerDexSite,
    href: 'https://gamerdex.app',
  },
]

const desktopapp = [
  {
    title: 'Todo List',
    description: 'A simple todo list application built with Electron.',
    image: screenshotTodoListApp,
    href: 'https://todo-list.chiefpansancolt.dev',
  },
]

export { rubygems, nodepackages, salesforce, websites, desktopapp }
