import { graphql } from 'gatsby'
import React from 'react'
import SmallCategoryCard from '../../components/cards/SmallCategoryCard'
import Hero from '../../components/homepage/Hero'
import { Layout } from '../../components/Layout'
import CourseCarousel from '../../components/recipe_index/CourseCarousel'
import { Content } from '../../components/sections'
import { Seo } from '../../components/Seo'
import { H1 } from '../../components/typography'

export const query = graphql`
  query RecipePage {
    allPrismicCourse {
      edges {
        node {
          url
          uid
          id
          data {
            title {
              richText
            }
            preview {
              url
              alt
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

export default function RecipePage({ data }) {
  if (!data) return null
  const categories = data.allPrismicCategory.edges

  return (
    <Layout>
      <Seo title="Recept" />
      <div>
        <Hero>
          <div className="flex items-center justify-center w-full h-full">
            <H1>Recept</H1>
          </div>
        </Hero>
        <div className="bg-gradient-secondary-white px-5.5 overflow-hidden">
          <Content>
          <CourseCarousel />
          </Content>
        </div>
        <section className="p-5.5">
          <Content>
          <header className="mt-10 mb-5">
            <h2 className="font-serif font-light text-lg lg:text-xl leading-none text-primary">
              Alla kategorier
            </h2>
          </header>
          <div className="grid gap-2.5 lg:gap-5.5 grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <SmallCategoryCard category={category.node} />
            ))}
          </div>
          </Content>
        </section>
      </div>
    </Layout>
  )
}
