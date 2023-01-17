import React from 'react'

import bgBorder from "../../images/white-border-deco.svg";

export default function Hero({children, hasBorder}) {

   let styling = {backgroundImage: 'none'};

   if (hasBorder) styling = {backgroundImage: `url(${bgBorder})`, backgroundSize: `30px 15px`, backgroundPosition: `center bottom`, backgroundRepeat: `repeat-x`};

   return (
      <header className="flex items-end bg-secondary px-5.5 pb-12 py-20" style={styling}>
         {children}
      </header>
   )
}
