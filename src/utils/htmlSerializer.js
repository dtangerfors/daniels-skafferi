// -- The HTML Serializer
// This function will be used to modify the way that a Rich Text or Title field is rendered.
import React from "react"
import { Element } from "@prismicio/react"

import { H1, H2, H3, H4, Paragraph, Ul, Li } from "../components/typography"

	
  // -- HTML Serializer
  const htmlSerializer = function(type, element, content, children, key) {
   
    switch(type) {
      case Element.heading1: // Heading 1
        return <H1 key={`h1-${key}`}>{children}</H1>

      case Element.heading2: // Heading 2
        return <H2 key={`h2-${key}`}>{children}</H2>

      case Element.heading3: // Heading 3
        return <H3 key={`h3-${key}`}>{children}</H3>
    
      case Element.heading4: // Heading 4
        return <H4 key={`h4-${key}`}>{children}</H4>

      case Element.paragraph: // Paragraph
        return <Paragraph key={`paragraph-${key}`}>{children}</Paragraph>
      
      case Element.list: // Unordered list
        return <Ul key={`ul-${key}`}>{children}</Ul>

      case Element.listItem: // List item
        return <Li key={`li-${key}`}>{children}</Li>

      default: // Always include a default that returns null
        return null
    }
  }

  export default htmlSerializer