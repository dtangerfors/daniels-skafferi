import React from 'react'
import { PrismicText } from '@prismicio/react'
import { Link } from 'gatsby'
import missing_image from '../../images/missing-preview.svg'

const Preview = (image) => {
   if (!image) return missing_image

   return image
}

export default function RecipeCard({recipe}) {
   return (
      <Link to={recipe.url} className="w-full">
         <figure className="relative w-full aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
            <img className="w-full h-full object-cover" src={Preview(recipe.data.preview.url)} alt={recipe.data.preview.alt}/>
         </figure>
         <div className="mt-3">
            <h2 className="font-serif font-bold text-base leading-none text-primary"><PrismicText field={recipe.data.title.richText} /></h2>
            <div className="mt-2">
               <span className="text-gray-500 text-sm pr-3 leading-none"><i className="ri-user-line text-primary"></i> 2</span>
               <span className="text-gray-500 text-sm leading-none"><i className="ri-alarm-line text-primary"></i> 30 min</span>
            </div>
         </div>
      </Link>
   )
}
