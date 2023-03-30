import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PrismicText } from '@prismicio/react'
import { Layout } from '../../components/Layout'
import { Seo } from '../../components/Seo'
import Hero from '../../components/homepage/Hero'
import { Content, Section } from '../../components/recipe_page/layout'
import {Text, Image} from '../../components/page/slices'

import bgBorder from "../../images/white-border-deco.svg";

export const query = graphql`
query BlogPost($id: String) {
  prismicBlogPost(id: {eq: $id}) {
    uid
    url
    first_publication_date
    data {
      page_title {
        text
        richText
      }
      meta_image {
        url
      }
      meta_description {
        text
      }
      body {
        ... on PrismicBlogPostDataBodyImage {
          id
          items {
            image {
              alt
              gatsbyImageData(width: 1500, placeholder: BLURRED, imgixParams: {q: 80})
            }
          }
          slice_type
        }
        ... on PrismicBlogPostDataBodyText {
          id
          items {
            text {
              richText
            }
          }
          slice_type
        }
      }
      featured_image {
        gatsbyImageData(width: 1920, placeholder: BLURRED, imgixParams: {q: 20})
        alt
      }
    }
  }
}
`

// Sort and display the different slice options
const SliceItems = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case "text":
          return <Text slice={slice} key={`text-${index}`} />

        case "image":
          return <Image slice={slice} key={`image-${index}`} />

        default:
          return
      }
    })()

    return res
  })
}

const BlogPost = ({ data }) => {
  if (!data) return null
  const page = data.prismicBlogPost;

  const {page_title, body, meta_image, meta_description, featured_image} = page.data;
  const {first_publication_date} = page;
  const gatsby_featured_image = getImage(featured_image);

  return (
    <Layout>
      <Seo title={page_title.text} description={meta_description.text} metaImage={meta_image.url} />
      <div className="relative z-1">
        <figure className="relative -z-1 w-full lg:h-[55vh] lg:min-h-[30rem] inset-0">
        <GatsbyImage image={gatsby_featured_image}
      className="object-cover object-center w-full h-full"
      alt={featured_image.alt}/>
        </figure>
        <div className="absolute bottom-0 left-0 w-full h-[15px]" style={{backgroundImage: `url(${bgBorder})`, backgroundSize: `30px 15px`, backgroundPosition: `center bottom`, backgroundRepeat: `repeat-x`}}></div>
      </div>
      <Section>
        <Content>
          <article>
          <header className="max-w-screen-md mx-auto mb-8 pb-6 border-b-2 border-dotted border-neutral-200 text-center">
            <p className="text-sm font-sans text-neutral-700 mb-8">{new Date(first_publication_date).toLocaleDateString()}</p>
          <h1 className="font-serif font-light text-2xl lg:text-3xl text-primary"><PrismicText field={page_title.richText}/></h1>
          </header>
        {body ? <SliceItems key="project-body" slices={body} /> : null}
        </article>
        </Content>
      </Section>
    </Layout>
  )
}

export default BlogPost
