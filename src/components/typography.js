import React from 'react'

const H1 = ({ children }) => (
  <h1 className="font-serif font-light text-2xl lg:text-4xl text-primary">
    {children}
  </h1>
)

const Paragraph = ({children}) => (
  <p className="font-sans font-normal text-base text-gray-700">{children}</p>
)

const Ingress = ({children}) => (
  <p className="font-sans font-normal text-lg leading-normal text-gray-700">{children}</p>
)

export {H1, Paragraph, Ingress}