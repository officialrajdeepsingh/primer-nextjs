import '@/styles/globals.css'
import {ThemeProvider} from '@primer/react'


export default function App({ Component, pageProps }) {

  return <ThemeProvider colorMode="auto"
  dayScheme="light"
  nightScheme="dark" preventSSRMismatch>
      <Component {...pageProps} />
  </ThemeProvider> 
}
