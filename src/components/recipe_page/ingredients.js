import React from 'react'

const ItemList = ({children}) => (
  <ul>{children}</ul>
)

const Item = ({ item, quantity, measurement }) => (
  <li className="flex py-3 mt-4 first:mt-0 border-b border-dotted border-black border-opacity-20 justify-between text-base text-neutral-700">
    <span className="font-bold">{item.richText[0].text}</span>
    {quantity && <span>{quantity.richText[0].text} {measurement.richText[0].text}</span>}
  </li>
)

const RecipeGroup = ({children}) => (
  <div className="pb-8 first-of-type:pt-6">{children}</div>
)

const HowTo = ({ children }) => <ol className="list-decimal pl-4 mt-8">{children}</ol>


export { Item, ItemList, HowTo, RecipeGroup }
