import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import config from '../utils/siteConfig'
import '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <link rel="icon" href={config.siteLogo} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
        <link rel="stylesheet" type="text/css" href={config.fonts} />
        <link rel="apple-touch-icon" href={config.siteIcon} />
        <link rel="shortcut icon" href={config.siteIcon} type="image/x-icon"/>
      </Helmet>

      <ThemeProvider theme={theme}>
        <div className="siteContent">
          <Menu />
          {children()}
        </div>
      </ThemeProvider>
      {/* Footer placed in seperate ThemeProvider to avoid Rendering an extra DIV in HTML output  */}
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default Template
