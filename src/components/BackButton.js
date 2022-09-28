import React from 'react'
import { navigate } from "gatsby";

export default function BackButton() {
   return (
      <button onClick={() => navigate(-1)} className="fixed z-30 top-24 left-6 w-11 h-11 rounded-full bg-white border-gray-200 border shadow-lg">
         <i className="ri-arrow-left-s-line text-primary text-xl"></i>
         <span className="sr-only">Tillbaka till föregående sida</span>
      </button>
   )
}
