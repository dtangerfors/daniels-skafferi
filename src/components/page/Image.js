import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({ slice }) => {

   return slice.items.map(item => {
    const image = getImage(item.image);
    return ( 
         <figure className="m-0 mt-8 mb-12">
           <GatsbyImage image={image} alt={item.image.alt} className="rounded-sm overflow-hidden shadow-lg" />
         </figure>
    )
   })
}

export default Image