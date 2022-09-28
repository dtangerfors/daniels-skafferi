import React from 'react'
import missing_image from '../../images/missing-preview.svg'

const Preview = (image) => {
   if (!image) return missing_image

   return image
}

const HeroImageOld = ({ image }) => (
  <figure className="w-full h-72 relative z-20 md:h-96">
    <img
      className="object-cover object-center w-full h-full"
      src={Preview(image.url)}
      alt={image.alt}
    />
    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-50"></div>
  </figure>
)

const HeroImage = ({ image }) => (
  <figure className="w-full relative z-20 aspect-w-16 aspect-h-9 rounded-sm overflow-hidden shadow-lg">
    <img
      className="object-cover object-center w-full h-full"
      src={Preview(image.url)}
      alt={image.alt}
    />
  </figure>
)

export default HeroImage
