import * as React from 'react'
import { graphql } from 'gatsby'
import Carousel from '../components/homepage/Carousel'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import Categories from '../components/homepage/Categories'
import { Content } from '../components/sections'
import BlogCard from '../components/cards/BlogCard'

export const query = graphql`
query IndexPage {
  allPrismicRecipe(sort: {order: DESC, fields: last_publication_date}, limit: 5) {
    edges {
      node {
        url
        id
        data {
          title {
            richText
            text
          }
          preview {
            alt
            url
            gatsbyImageData(width: 500, imgixParams: {q: 80}, placeholder: BLURRED)
          }
          total_servings
          time
        }
      }
    }
  }
  allPrismicCategory(limit: 3) {
    edges {
      node {
        url
        data {
          title {
            richText
            text
          }
          preamble {
            richText
          }
          preview {
            url
            alt
            gatsbyImageData(width: 500, imgixParams: {q: 80}, placeholder: BLURRED)
          }
        }
        id
      }
    }
  }
  allPrismicBlogPost(sort: {order: DESC, fields: last_publication_date}, limit: 2) {
    edges {
      node {
        url
        first_publication_date
        uid
        data {
          page_title {
            richText
          }
          featured_image {
            gatsbyImageData(width: 800, placeholder: BLURRED, imgixParams: {q: 20})
            alt
          }
          body {
            ... on PrismicBlogPostDataBodyText {
              id
              items {
                text {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const Homepage = ({ data }) => {
  if (!data) return null
  const recipes = data.allPrismicRecipe.edges
  const categories = data.allPrismicCategory.edges
  const posts = data.allPrismicBlogPost.edges;

  return (
    <Layout>
      <Seo title="Hem" />
      <div>
        <section>
          <header className="flex items-end bg-secondary px-5.5 pt-16 lg:h-40">
            <Content>
              <h2 className="font-serif font-light text-lg leading-none text-primary">
                Senast tillagda recept
              </h2>
            </Content>
          </header>
          <div className="bg-gradient-secondary-white px-5.5 overflow-hidden">
            <Content>
              <Carousel recipes={recipes} />
            </Content>
          </div>
        </section>
        
        <section className="p-5.5">
          <header className="mt-10 mb-5">
            <Content>
              <h2 className="font-serif font-light text-lg leading-none text-primary">
                Utvalda kategorier
              </h2>
            </Content>
          </header>
          <Content>
            <Categories categories={categories} />
          </Content>
        </section>
        <section className="p-5.5">
        <header className="mt-10 mb-5">
            <Content>
              <h2 className="font-serif font-light text-lg leading-none text-primary">
               Nya blogginlägg
              </h2>
            </Content>
          </header>
        <Content>
            {posts.map((post) => (
               <BlogCard item={post.node} key={post.node.uid} />
            ))}
            </Content>
        </section>
      </div>
    </Layout>
  )
}

export default Homepage
