import * as React from 'react'
import { graphql } from 'gatsby'
import Carousel from '../components/homepage/Carousel'
import Hero from '../components/homepage/Hero'
import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import Categories from '../components/homepage/Categories'
import { Content } from '../components/sections'

import cooking_illustration from '../images/undraw_cooking.svg'

export const query = graphql`
  query IndexPage {
    allPrismicRecipe {
      edges {
        node {
          url
          id
          data {
            title {
              richText
            }
            preview {
              alt
              url
            }
          }
        }
      }
    }
    allPrismicCategory {
      edges {
        node {
          url
          data {
            title {
              richText
            }
            preamble {
              richText
            }
            preview {
              url
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

  return (
    <Layout>
      <Seo title="Hem" />
      <div>
        <section>
          <header className="flex items-end bg-secondary px-5.5 h-40">
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
        <section className="px-5.5 py-20">
          <Content>
            <div className="flex flex-wrap">
            <div className="lg:w-3/5 lg:p-12 lg:pl-0 self-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <figure className="lg:w-2/5">
              <img src={cooking_illustration} className="w-full"/>
            </figure>
            </div>
          </Content>
        </section>
      </div>
    </Layout>
  )
}

export default Homepage
