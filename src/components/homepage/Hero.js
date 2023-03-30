import React from 'react'

import bgBorder from "../../images/white-border-deco.svg";
import bgDoodle from "../../images/cooking.svg";

export default function Hero({children, hasBorder, hasDoodle, hasOverlay}) {

   let styling = {backgroundImage: 'none'};
   let bgColor = 'transparent';

   if (hasBorder) styling = {backgroundImage: `url(${bgBorder})`, backgroundSize: `30px 15px`, backgroundPosition: `center bottom`, backgroundRepeat: `repeat-x`};
   if (hasBorder && hasDoodle) styling = {backgroundImage: `url(${bgBorder}), url(${bgDoodle})`, backgroundSize: `30px 15px, auto 90%`, backgroundPosition: `center bottom, right bottom`, backgroundRepeat: `repeat-x, no-repeat`};
   if (hasOverlay) bgColor = 'bg-black/60'

   return (
      <header className="relative z-1 bg-secondary" style={styling}>
         <div className={`flex items-end px-5.5 pb-12 py-20 ${bgColor}`}>
         {children}
         </div>
      </header>
   )
}
