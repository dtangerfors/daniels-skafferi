import React from "react";
import { Link } from 'gatsby'

function NavPill({to, children}) {
  return (
    <Link
      exact
      to={to}
      className="flex-1 px-2 pt-3 pb-safeBottom flex flex-col text-xs leading-5 text-gray-400 text-center hover:bg-gray-100 transition-all ease-in-out duration-200 dark:hover:bg-gray-800"
      activeClassName="text-primary"
      partiallyActive={true}
    >
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <nav className="fixed z-20 bottom-0 left-0 flex justify-center w-full h-16 bg-white border-gray-200 border-t dark:bg-black dark:border-gray-700">
      <NavPill to="/">
        <i className="ri-home-line text-lg leading-none"></i>Hem
      </NavPill>
      <NavPill to="/recept">
        <i className="ri-book-3-line text-lg leading-none"></i>Recept
      </NavPill>
      <NavPill to="/info">
        <i className="ri-bookmark-line text-lg leading-none"></i>Sparade
      </NavPill>
      <NavPill to="/profil">
        <i className="ri-user-line text-lg leading-none"></i>Profil
      </NavPill>
    </nav>
  );
}

export default Nav;