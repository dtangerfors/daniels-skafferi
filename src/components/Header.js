import React, { useState } from "react"
import { Link } from 'gatsby'
import logo from '../images/logo.svg'
import Hamburger from "./Hamburger"
import MegaMenu from "./MegaMenu"
import Nav from "./Nav"

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky z-50 top-0 w-full h-12 bg-white border-neutral-200 border-b px-6 md:h-16">
      <div className="flex max-w-screen-lg mx-auto">
        <Link to="/" className="-ml-2">
          <img src={logo} alt="Daniels Skafferi" className="w-[3.72rem] md:w-20" />
        </Link>
        <div className="ml-auto hidden lg:block">
          <Nav />
        </div>
        <div className="ml-auto h-full block lg:hidden">
        <Hamburger open={open} setOpen={setOpen} />
        </div>
      </div>
      <MegaMenu open={open}/>
    </header>
  )
}
