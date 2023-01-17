import React from 'react'
import { graphql } from 'gatsby'
import { PrismicText } from '@prismicio/react'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import Hero from '../components/homepage/Hero'
import { H1 } from '../components/typography'
import { Content, Section } from '../components/recipe_page/layout'
import {Text, Image} from '../components/page/slices'

export const query = graphql`
query SinglePage($id: String) {
  prismicPage(id: {eq: $id}) {
    uid
    url
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
        ... on PrismicPageDataBodyImage {
          id
          items {
            image {
              alt
              gatsbyImageData(
                width: 1500
                placeholder: BLURRED
                imgixParams: { q: 80 }
              )
            }
          }
          slice_type
        }
        ... on PrismicPageDataBodyText {
          id
          items {
            text {
              richText
            }
          }
          slice_type
        }
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

const Page = ({ data }) => {
  if (!data) return null
  const page = data.prismicPage

  const {page_title, body, meta_image, meta_description} = page.data;

  return (
    <Layout>
      <Seo title={page_title.text} description={meta_description.text} />
      <Hero hasBorder>
        <div className="flex items-center justify-center w-full h-full">
          <H1><PrismicText field={page_title.richText}/></H1>
        </div>
      </Hero>
      <Section>
        <Content>
        {body ? <SliceItems key="project-body" slices={body} /> : null}
        </Content>
      </Section>
    </Layout>
  )
}

export default Page
