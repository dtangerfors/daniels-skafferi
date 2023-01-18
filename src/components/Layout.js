import * as React from 'react'
import { Helmet } from 'react-helmet'
import 'remixicon/fonts/remixicon.css'
import {Header} from './Header'
import {Footer} from './Footer'

import appleIcon from '../images/apple-touch-icon.png'
import favicon from '../images/favicon.ico'
import maskIcon from '../images/safari-pinned-tab.svg'
import { IconoirProvider } from 'iconoir-react'

export const Layout = ({ children }) => (
  <>
    <Helmet>
    <link href="https://api.fontshare.com/css?f[]=plus-jakarta-sans@401,400,600,700,701&f[]=gambarino@400&display=swap" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon}/>
    <link rel="icon" href={favicon}/>
    <link rel="mask-icon" href={maskIcon} color="#aeb88a" />
    <meta name="apple-mobile-web-app-title" content="Daniels Skafferi" />
    <meta name="application-name" content="Daniels Skafferi"/>
    <meta name="msapplication-TileColor" content="#436f68"/>
    <meta name="theme-color" content="#ffffff"></meta>
    </Helmet>
    <Header />
    <div
      className="flex flex-col relative min-h-screen"
      style={{ paddingBottom: '64px' }}
    >
      <IconoirProvider iconProps={{
        width: '1em',
        height: '1em',
        strokeWidth: '2'
      }}>
      {children}
      </IconoirProvider>
    </div>
    <Footer />
  </>
)
