import React from "react";
import { Link } from 'gatsby'
import { BookStack, GlassEmpty, UserCircle } from 'iconoir-react'

function NavPill({ to, children, linkName}) {
  return (
    <li>
      <Link
        to={to}
        className="mr-8 flex items-center text-sm leading-[4rem] text-neutral-400 text-center hover:text-primary transition-all ease-in-out duration-200"
        activeClassName="text-primary"
        partiallyActive={true}
      >
        {children} <span className="ml-1">{linkName}</span>
      </Link>
    </li>
  )
}

const Nav = () => (
  <nav>
          <ul className="flex flex-wrap">
            <NavPill to="/recept" linkName="Recept">
              <BookStack />
            </NavPill>
            <NavPill to="/recept/drinkar" linkName="Drinkar">
              <GlassEmpty />
            </NavPill>
            <NavPill to="/om" linkName="Om">
              <UserCircle />
            </NavPill>
          </ul>
        </nav>
)

export default Nav;