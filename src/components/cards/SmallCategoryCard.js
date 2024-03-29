import React from 'react'
import { PrismicText } from '@prismicio/react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function SmallCategoryCard({category}) {
   const image = getImage(category.data.preview);
   return (
      <Link to={category.url} className="group relative rounded-xl w-full aspect-w-16 aspect-h-9 overflow-hidden">
         <figure className="absolute inset-0 w-full h-full z-1 rounded-xl overflow-hidden">
         <GatsbyImage image={image} className="object-cover w-full h-full -z-1 transform-none" alt={category.data.preview.alt || category.data.title.text}/>
            <div className="absolute inset-0 w-full h-full bg-black opacity-40 group-hover:opacity-70 transition-all duration-300 ease-in-out"></div>
         </figure>
         <div className="flex items-center justify-center p-4 z-2">
            <p className="text-base lg:text-lg font-serif font-light text-white"><PrismicText field={category.data.title.richText} /></p>
         </div>
      </Link>
   )
}
