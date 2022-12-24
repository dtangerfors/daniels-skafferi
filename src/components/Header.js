import React, { useState } from "react"
import { Link } from 'gatsby'
import logo from '../images/logo.svg'
import Hamburger from "./Hamburger"
import MegaMenu from "./MegaMenu"

function NavPill({ to, children, icon }) {
  return (
    <li>
      <Link
        to={to}
        className="px-2 mr-4 flex items-center text-sm leading-[4rem] text-neutral-400 text-center hover:text-tertiary transition-all ease-in-out duration-200"
        activeClassName="text-primary"
        partiallyActive={true}
      >
        <i className={`${icon} text-base leading-none mr-2`}></i>
        {children}
      </Link>
    </li>
  )
}

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky z-50 top-0 w-full h-12 bg-white border-neutral-200 border-b px-6 md:h-16">
      <div className="flex max-w-screen-lg mx-auto">
        <Link to="/" className="-ml-2">
          <img src={logo} alt="Daniels Skafferi" className="w-[3.72rem] md:w-20" />
        </Link>
        <nav className="ml-8 hidden lg:block">
          <ul className="flex">
            <NavPill to="/recept" icon="ri-book-3-line">
              Recept
            </NavPill>
          </ul>
        </nav>
        <div className="ml-auto h-full">
        <Hamburger open={open} setOpen={setOpen} />
        </div>
      </div>
      <MegaMenu open={open}/>
    </header>
  )
}
