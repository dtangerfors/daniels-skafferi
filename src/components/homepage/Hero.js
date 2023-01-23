import React from 'react'

import bgBorder from "../../images/white-border-deco.svg";
import bgDoodle from "../../images/cooking.svg";

export default function Hero({children, hasBorder, hasDoodle}) {

   let styling = {backgroundImage: 'none'};

   if (hasBorder) styling = {backgroundImage: `url(${bgBorder})`, backgroundSize: `30px 15px`, backgroundPosition: `center bottom`, backgroundRepeat: `repeat-x`};
   if (hasBorder && hasDoodle) styling = {backgroundImage: `url(${bgBorder}), url(${bgDoodle})`, backgroundSize: `30px 15px, auto 90%`, backgroundPosition: `center bottom, right bottom`, backgroundRepeat: `repeat-x, no-repeat`};

   return (
      <header className="flex items-end bg-secondary px-5.5 pb-12 py-20" style={styling}>
         {children}
      </header>
   )
}
