import React from 'react'
import { Link } from 'gatsby'
import CookingInfo from '../CookingInfo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Truncate = (str, n) => {
   return (str.length > n) ? str.slice(0, n-1) + '…' : str;
};

export default function CarouselCard({recipe}) {
   const image = getImage(recipe.data.preview);
   return (
      <Link to={recipe.url} className="inline-flex items-center w-full h-28 lg:h-52 bg-white rounded-2xl shadow-lg overflow-hidden snap-start snap-m-5.5 whitespace-normal">
         <figure className="relative w-28 h-28 lg:w-52 lg:h-52 overflow-hidden">
         <GatsbyImage image={image} className="w-full h-full object-cover overflow-hidden" imgClassName="rounded-l-2xl" alt={recipe.data.preview.alt || recipe.data.title.text}/>
         </figure>
         <div className="flex-1 px-2 lg:px-6">
            <p className="text-sm lg:text-lg text-primary font-sans lg:leading-relaxed lg:pb-4" title={recipe.data.title.text}>{Truncate(recipe.data.title.text, 40)}</p>
            <hr className="w-20 bg-primary my-1"/>
            <CookingInfo time={recipe.data.time} servings={recipe.data.total_servings}/>
         </div>
      </Link>
   )
}
