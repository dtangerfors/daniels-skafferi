import * as React from 'react'
import { Helmet } from 'react-helmet'
import 'remixicon/fonts/remixicon.css'
import {Header} from './Header'
import {Footer} from './Footer'

export const Layout = ({ children }) => (
  <>
    <Helmet>
    <link href="https://api.fontshare.com/css?f[]=cabinet-grotesk@800&f[]=gambarino@400&display=swap" rel="stylesheet" />
    </Helmet>
    <Header />
    <div
      className="flex flex-col relative min-h-screen"
      style={{ paddingBottom: '64px' }}
    >
      {children}
    </div>
    <Footer />
  </>
)
