import React from 'react'

const H1 = ({ children }) => (
  <h1 className="font-serif font-light text-2xl lg:text-4xl text-primary">
    {children}
  </h1>
)

const H2 = ({ children }) => (
  <h2 className="font-serif font-light text-xl lg:text-3xl text-primary pb-6 pt-8 first:pt-0">
    {children}
  </h2>
)

const H3 = ({ children }) => (
  <h3 className="font-serif font-light text-lg lg:text-2xl text-primary pb-3 pt-6 first:pt-0">
    {children}
  </h3>
)

const H4 = ({ children }) => (
  <h4 className="font-serif font-light text-base lg:text-xl text-primary pb-2 pt-4 first:pt-0">
    {children}
  </h4>
)

const Paragraph = ({children}) => (
  <p className="font-sans font-normal text-base leading-loose text-gray-700 pb-[1em] last:pb-0">{children}</p>
)

const Ingress = ({children}) => (
  <p className="font-sans font-normal text-lg leading-relaxed text-gray-700 pb-[1em]">{children}</p>
)

const Ul = ({children}) => (
  <ul className={`list-disc pl-8 my-4`}>{children}</ul>
)

const Li = ({children}) => (
  <li className={`text-base font-body font-light leading-relaxed text-neutral-800 dark:text-neutral-400 pb-4 last:pb-0`}>{children}</li>
)

export {H1, H2, H3, H4, Paragraph, Ingress, Ul, Li}