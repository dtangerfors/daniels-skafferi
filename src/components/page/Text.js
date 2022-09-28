import React from "react";
import { PrismicText } from '@prismicio/react'

const Text = ({slice}) => {
   return (
      slice.items.map(item => <PrismicText field={item.text.richText} />)
   )
}

export default Text