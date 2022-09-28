import * as React from 'react'
import { Link } from 'gatsby';

import logo from '../images/logo-gray.svg'

let year = new Date().getFullYear();


function FooterLink({ to, children }) {
  return (
    <li className="ml-4">
      <Link
        to={to}
        className="text-neutral-500 hover:text-neutral-700"
        activeClassName="text-primary"
        partiallyActive={true}
      >
        {children}
      </Link>
    </li>
  )
}

export const Footer = () => (
  <footer>
    <div className="h-4 bg-wave-beige bg-auto"></div>
    <div className="bg-secondary px-6 pt-12">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center pb-16">
          <img src={logo} className="w-12 opacity-50" />
          <ul className="flex">
            <FooterLink to="/om">Om</FooterLink>
            <FooterLink to="/cookies">Cookies</FooterLink>
            <FooterLink to="/webbplatsinformation">Webbplatsinformation</FooterLink>
          </ul>
        </div>

        <div className="flex justify-end py-4 border-t-2 border-dotted border-tertiary border-opacity-30">
          <p className="font-sans text-neutral-500">Copyright &copy; {year}</p>
        </div>
      </div>
    </div>
  </footer>
)
