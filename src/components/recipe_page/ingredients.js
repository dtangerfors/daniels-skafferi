import React from 'react'

const ItemList = ({children}) => (
  <ul>{children}</ul>
)

const Item = ({ item, quantity, measurement }) => (
  <li className="flex py-3 mt-4 border-b border-dotted border-black border-opacity-20 justify-between text-base">
    <span className="font-bold">{item}</span>
    <span>
      {quantity} {measurement}
    </span>
  </li>
)

const RecipeGroup = ({children}) => (
  <div className="pb-8">{children}</div>
)

const HowTo = ({ children }) => <ol className="list-decimal pl-4 mt-8">{children}</ol>


export { Item, ItemList, HowTo, RecipeGroup }
