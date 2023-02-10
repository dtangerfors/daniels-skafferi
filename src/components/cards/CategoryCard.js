import React from 'react'
import { PrismicText } from '@prismicio/react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function CategoryCard({category}) {
   const image = getImage(category.data.preview);
   return (
      <Link to={category.url} className="group relative rounded-2xl pt-full w-full overflow-hidden">
         <figure className="absolute inset-0 w-full h-full z-1 rounded-2xl overflow-hidden">
         <GatsbyImage image={image} className="object-cover w-full h-full -z-1 transform-none group-hover:transform group-hover:scale-105 transition-all duration-5000" alt={category.data.preview.alt || category.data.title.text}/>
            <div className="absolute inset-0 w-full h-full bg-black opacity-40 group-hover:opacity-70 transition-all duration-300 ease-in-out"></div>
         </figure>
         <div className="absolute bottom-0 left-0 p-8 z-2">
            <p className="text-lg font-serif font-light text-white w-full border-b border-dotted pb-2 mb-4"><PrismicText field={category.data.title.richText} /></p>
            <p className="font-sans text-base text-white"><PrismicText field={category.data.preamble.richText} /></p>
         </div>
      </Link>
   )
}
