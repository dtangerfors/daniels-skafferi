import React from "react";
import { PrismicRichText } from '@prismicio/react'
import htmlSerializer from "../../utils/htmlSerializer";

const Text = ({slice}) => {
   return (
      slice.items.map(item => <PrismicRichText field={item.text.richText} components={htmlSerializer} />)
   )
}

export default Text