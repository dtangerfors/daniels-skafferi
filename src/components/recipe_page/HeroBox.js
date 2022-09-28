import React, { useRef, useEffect, useState } from 'react'
import { PrismicText } from '@prismicio/react'
import { H1 } from '../typography'

const HeroBox = ({ recipe }) => {
  const headerEl = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(headerEl.current.clientHeight)
  }, [])

  const stickyPosition = height - 50

  return (
    <div
      ref={headerEl}
      className="sticky flex flex-col max-w-screen-sm bg-white rounded-2xl -mt-8 mx-6 sm:mx-auto z-20 shadow-lg"
      style={{top: `-${stickyPosition}px`}}
    >
      <div className="text-center mx-8 py-5">
        <H1>
          <PrismicText field={recipe.data.title.raw} />
        </H1>
        <p className="text-base text-gray-500">
          <PrismicText field={recipe.data.description.raw} />
        </p>
      </div>
      <div className="flex mt-auto mb-0 mx-8 border-t border-gray-200">
        <div className="w-1/2 text-center">
          <a href="#recipe-steps" className="block text-sm text-gray-500 font-medium py-3">
            Ingredienser
          </a>
        </div>
        <div className="w-1/2 text-center">
          <a href="#recipe-how-to" className="block text-sm text-gray-500 font-medium py-3">
            Gör så här
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroBox
