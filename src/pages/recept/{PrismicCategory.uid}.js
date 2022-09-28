import React from 'react'
import { graphql } from 'gatsby'
import { PrismicText } from '@prismicio/react'
import { Layout } from '../../components/Layout'
import RecipeCard from '../../components/cards/RecipeCard'
import { Content } from '../../components/sections'

export const query = graphql`
  query CategoryPage($id: String, $uid: String) {
    prismicCategory(id: { eq: $id }) {
      data {
        title {
          richText
        }
        preamble {
          richText
        }
        preview {
          alt
          url
        }
      }
      uid
    }
    allPrismicRecipe(
      filter: {
        data: {
          category_group: { elemMatch: { category: { uid: { eq: $uid } } } }
        }
      }
    ) {
      edges {
        node {
          id
          data {
            title {
              richText
            }
            category_group {
              category {
                uid
              }
            }
            preview {
              alt
              url
            }
          }
          url
        }
      }
    }
  }
`

const CategoryPage = ({ data }) => {
  if (!data) return null
  const category = data.prismicCategory
  const recipes = data.allPrismicRecipe.edges

  return (
    <Layout>
      <header className="relative z-1">
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 py-32 px-5.5">
          <h1 className="font-serif font-light text-2xl lg:text-4xl text-white mb-5">
            <PrismicText field={category.data.title.richText} />
          </h1>
          <p className="max-w-prose font-sans text-sm text-white text-center">
            <PrismicText field={category.data.preamble.richText} />
          </p>
        </div>
        <figure className="absolute inset-0 -z-1 w-full h-full">
          <img
            src={category.data.preview.url}
            alt={category.data.preview.alt}
            className="w-full h-full object-cover"
          />
        </figure>
      </header>
      <main className="px-5.5 py-8">
        <Content>
        <p className="font-serif text-lg lg:text-xl text-primary">
          Visar {recipes.length} recept
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mt-5 lg:gap-5.5">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.node.id} recipe={recipe.node} />
          ))}
        </div>
        </Content>
      </main>
    </Layout>
  )
}

export default CategoryPage
