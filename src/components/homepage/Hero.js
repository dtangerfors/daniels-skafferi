import React from 'react'

export default function Hero({children}) {
   return (
      <header className="flex items-end bg-secondary px-5.5 h-40">
         {children}
      </header>
   )
}
