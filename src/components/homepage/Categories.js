import React from 'react'
import CategoryCard from '../cards/CategoryCard'

export default function Categories({categories}) {
   return (
      <div className="grid gap-5.5 md:grid-cols-2 lg:grid-cols-3">
         {categories.map(category => <CategoryCard category={category.node} key={category.node.id} />)}
      </div>
   )
}
