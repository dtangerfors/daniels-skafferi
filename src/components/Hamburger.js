import React from "react"
import { bool, func } from "prop-types"
import { motion } from "framer-motion"

const Hamburger = ({ setOpen, open }) => (
  <motion.button
    key="hamburger"
    open={open}
    onClick={() => setOpen(!open)}
    className="group relative appearance-none h-12 md:h-16 flex items-center font-sans text-xs no-underline text-neutral-400"
  >
    <span className="relative top-0 w-6 h-6 inline-flex flex-col justify-around ml-4 transition-all duration-200">
      <span className={`absolute -translate-y-1/2 w-full h-[2px] rounded bg-neutral-400 transition-all ${open ? 'top-1/2 rotate-45 group-hover:rotate-[-135deg] duration-700' : 'top-[4px] rotate-0 group-hover:top-[8px] duration-200'}`}></span>
      <span className={`absolute -translate-y-1/2 w-full h-[2px] rounded bg-neutral-400 transition-all ${open ? 'top-1/2 -right-6 duration-700 opacity-0 transition-all' : 'top-[12px] right-0 group-hover:top-[12px] duration-200'}`}></span>
      <span className={`absolute -translate-y-1/2 w-full h-[2px] rounded bg-neutral-400 transition-all ${open ? 'top-1/2 -rotate-45 group-hover:rotate-[135deg] duration-700' : 'top-[20px] rotate-0 group-hover:top-[16px] duration-200'}`}></span>
    </span>
  </motion.button>
)

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
