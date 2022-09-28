import React, { useState } from 'react'

export default function Step({ step }) {
  const [finished, setFinished] = useState(false)

  return (
    <li className="text-base leading-10 mb-12 relative">
      <div style={{opacity: finished ? '.25' : '1'}}>{step}</div>

      <button
        onClick={() => setFinished(!finished)}
        className="absolute z-20 top-0 -left-12 w-10 h-10 p-2 transform -translate-x-1/2 bg-white"
      >
        <span className="block relative w-full h-full rounded-full border-2 border-tertiary  bg-white">
          <span className="absolute w-full h-full inset-0 bg-tertiary rounded-full transition-all ease-in-out duration-300" style={{opacity: finished ? '1' : '0'}}>
            <i className="ri-check-line relative -top-2 leading-none text-white"></i>
            </span>
        </span>
        <span className="sr-only">Markera som färdig</span>
      </button>
    </li>
  )
}
