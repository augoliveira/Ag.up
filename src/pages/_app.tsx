import React from 'react'
import { AppProps } from 'next/app'
import Script from 'next/script'
import Cursor from '../components/Cursor'
import ScrollToTop from '../components/Scroll-to-top'
import LoadingScreen from '../components/Loading-Screen'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
        <Cursor />
        <LoadingScreen />
        <ScrollToTop />
      </ThemeProvider>
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script id="simpleParallax" src="/js/scripts/vlt-plugins.min.js"></Script>
      <Script id="simpleParallax" src="/js/scripts/vlt-helpers.js"></Script>
      <Script
        id="simpleParallax"
        src="/js/scripts/vlt-controllers.min.js"
      ></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="initWow" strategy="lazyOnload">
        {'new WOW().init();'}
      </Script>
    </>
  )
}

export default MyApp
