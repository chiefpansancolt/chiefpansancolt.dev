import 'focus-visible'
import '@/styles/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faSalesforce, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faBoltLightning, faSalesforce, faGithub)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
