import React from 'react'

const Section = ({children}) => (
   <div className="py-8 px-4">
      {children}
   </div>
)

const Content = ({children}) => (
   <div className="max-w-screen-lg mx-auto">
      {children}
   </div>
)


export {Section, Content}