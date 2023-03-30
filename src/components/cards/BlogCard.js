import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PrismicText } from '@prismicio/react'

import {H2, Paragraph} from "../typography"
import Truncate from "../../utils/truncate";

const BlogCard = ({ item }) => {
  const {page_title, featured_image, body} = item.data
  const {url, first_publication_date} = item
  const gatsby_featured_image = getImage(featured_image);
  const preamble = body[0].items[0].text.text;
  return (
    <Link to={url} className="flex flex-wrap bg-white border border-neutral-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-md transition-all">
      <figure className="aspect-1 w-full md:w-1/3">
      <GatsbyImage image={gatsby_featured_image}
      className="object-cover object-center w-full h-full"
      imgClassName="rounded-t-2xl md:rounded-l-2xl md:rounded-r-none"
      alt={featured_image.alt}/>
      </figure>
      <div className="p-5.5 md:p-8 md:flex-1">
        <H2><PrismicText field={page_title.richText}/></H2>
        <Paragraph>{Truncate(preamble, 120)}</Paragraph>
        <p className="text-xs font-sans text-neutral-700">Publicerad {new Date(first_publication_date).toLocaleDateString()}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
