import React from 'react'
import { PrismicText } from '@prismicio/react'
import { Link } from 'gatsby'
import missing_image from '../../images/missing-preview.svg'

const Preview = (image) => {
   if (!image) return missing_image

   return image
}

export default function CarouselCard({recipe}) {
   return (
      <Link to={recipe.url} className="inline-flex items-center w-full h-28 p-2 bg-white rounded-2xl shadow-lg overflow-hidden snap-start snap-m-5.5 whitespace-normal">
         <figure className="relative w-24 h-24 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={Preview(recipe.data.preview.url)} alt={recipe.data.preview.alt}/>
         </figure>
         <div className="w-36 pl-2">
            <p className="text-sm text-neutral-900"><PrismicText field={recipe.data.title.richText} /></p>
         </div>
      </Link>
   )
}
