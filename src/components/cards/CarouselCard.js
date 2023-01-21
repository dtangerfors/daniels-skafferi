import React from 'react'
import { Link } from 'gatsby'
import missing_image from '../../images/missing-preview.svg'
import CookingInfo from '../CookingInfo'

const Preview = (image) => {
   if (!image) return missing_image

   return image
}

const Truncate = (str, n) => {
   return (str.length > n) ? str.slice(0, n-1) + '…' : str;
};

export default function CarouselCard({recipe}) {
   return (
      <Link to={recipe.url} className="inline-flex items-center w-full h-28 lg:h-52 bg-white rounded-2xl shadow-lg overflow-hidden snap-start snap-m-5.5 whitespace-normal">
         <figure className="relative w-28 h-28 lg:w-52 lg:h-52 overflow-hidden">
            <img className="w-full h-full object-cover" src={Preview(recipe.data.preview.url)} alt={recipe.data.preview.alt}/>
         </figure>
         <div className="flex-1 px-2 lg:px-6">
            <p className="text-sm lg:text-lg text-primary font-sans lg:leading-relaxed lg:pb-4" title={recipe.data.title.text}>{Truncate(recipe.data.title.text, 40)}</p>
            <hr className="w-20 bg-primary my-1"/>
            <CookingInfo time={recipe.data.time} servings={recipe.data.total_servings}/>
         </div>
      </Link>
   )
}
