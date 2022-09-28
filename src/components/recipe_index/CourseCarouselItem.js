import React from 'react'
import { Link } from 'gatsby'
import { PrismicText } from '@prismicio/react'
import Preview from '../../utils/imagePreview'

export default function CourseCarouselItem({course}) {
   return (
      <Link to={course.url} className="inline-flex items-center flex-wrap w-full overflow-hidden">
         <figure className="relative w-full pt-[100%] rounded-full overflow-hidden">
            <img className="absolute w-full h-full object-cover top-0 left-0" src={Preview(course.data.preview.url)} alt={course.data.preview.alt}/>
         </figure>
         <div className="w-full pt-2 text-center">
            <p className="text-sm"><PrismicText field={course.data.title.raw} /></p>
         </div>
      </Link>
   )
}
