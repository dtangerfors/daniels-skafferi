import React from 'react'
import { PrismicText } from '@prismicio/react'
import { Link } from 'gatsby'
import CookingInfo from '../CookingInfo'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function RecipeCard({recipe}) {
   const image = getImage(recipe.data.preview);
   return (
      <Link to={recipe.url} className="w-full">
         <figure className="relative w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
         <GatsbyImage image={image} className="w-full h-full object-cover" alt={recipe.data.preview.alt}/>
         </figure>
         <div className="mt-3">
            <h2 className="font-serif font-bold text-base leading-normal text-primary"><PrismicText field={recipe.data.title.richText} /></h2>
            <div className="mt-2">
               <CookingInfo time={recipe.data.time} servings={recipe.data.total_servings}/>
            </div>
         </div>
      </Link>
   )
}
