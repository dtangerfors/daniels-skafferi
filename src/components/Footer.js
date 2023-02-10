import * as React from "react";
import { Link } from "gatsby";

import logo from "../images/logo-gray.svg";
import bgBorder from "../images/beige-border-deco.svg";
import { Instagram } from "iconoir-react";

let year = new Date().getFullYear();

function FooterLink({ to, children }) {
  return (
    <li className="mb-1">
      <Link
        to={to}
        className="text-neutral-500 hover:text-neutral-700 leading-loose"
        activeClassName="text-primary"
        partiallyActive={true}
      >
        {children}
      </Link>
    </li>
  );
}

export const Footer = () => (
  <footer>
    <div className="bg-secondary px-5.5 pt-6" style={{
          backgroundImage: `url(${bgBorder})`,
          backgroundSize: `30px 15px`,
          backgroundPosition: `center bottom`,
          backgroundRepeat: `repeat-x`,
        }}>
      <div className="max-w-screen-lg mx-auto">
        <div className="py-4 border-b-2 border-dotted border-tertiary border-opacity-30">
          <img src={logo} className="w-10" alt="Daniels Skafferi"/>
        </div>
        <div className="grid lg:grid-cols-12 pt-6 pb-32 gap-10">
          <div className="lg:col-span-6">
            <p className="text-xs text-black font-semibold uppercase tracking-widest pb-4">Daniels Skafferi</p>
            <p className="text-neutral-500">På Daniels Skafferi hittar du enkla recept skapade av mig, och bra tips för göra matlagningen roligare.</p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs text-black font-semibold uppercase tracking-widest pb-4">Sociala medier</p>
            <ul className="flex flex-col">
              <li><a href="https://www.instagram.com/danielsskafferi/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-700 leading-loose"><span className="inline-block align-sub"><Instagram width="1.2em" height="1.2em"/></span> Instagram</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs text-black font-semibold uppercase tracking-widest pb-4">Om</p>
            <ul className="flex flex-col">
              <FooterLink to="/om">Om</FooterLink>
              <FooterLink to="/cookies">Cookies</FooterLink>
              <FooterLink to="/webbplatsinformation">
                Webbplatsinformation
              </FooterLink>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex justify-end pt-1 pb-3 px-5.5 bg-tertiary">
        <div className="max-w-screen-lg w-full mx-auto">
          <p className="font-sans text-black text-xs">Copyright &copy; {year}</p>
        </div>
      </div>
  </footer>
);
