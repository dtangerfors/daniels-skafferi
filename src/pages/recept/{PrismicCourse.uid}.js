import React from 'react'
import { graphql } from 'gatsby'
import { PrismicText } from '@prismicio/react'
import { Layout } from '../../components/Layout'
import RecipeCard from '../../components/cards/RecipeCard'
import { Content } from '../../components/sections'
import bgBorder from "../../images/white-border-deco.svg";

export const query = graphql`
  query CoursePage($id: String, $uid: String) {
    prismicCourse(id: { eq: $id }) {
      data {
        title {
          richText
        }
        preamble {
          richText
        }
        preview {
          url
          alt
        }
      }
      uid
    }
    allPrismicRecipe(
      filter: {
        data: {
          course_group: { elemMatch: { course: { uid: { eq: $uid } } } }
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
            course_group {
              course {
                uid
              }
            }
            preview {
              alt
              url
            }
            total_servings
            time
          }
          url
        }
      }
    }
  }
`

const CoursePage = ({ data }) => {
  if (!data) return null
  const course = data.prismicCourse
  const recipes = data.allPrismicRecipe.edges

  return (
    <Layout>
      <header className="relative z-1">
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 py-32 px-5.5" style={{backgroundImage: `url(${bgBorder})`, backgroundSize: `30px 15px`, backgroundPosition: `center bottom`, backgroundRepeat: `repeat-x`}}>
          <h1 className="font-serif font-light text-2xl lg:text-4xl text-white mb-5">
            <PrismicText field={course.data.title.richText} />
          </h1>
          <p className="max-w-prose font-sans text-sm text-white text-center">
            <PrismicText field={course.data.preamble.richText} />
          </p>
        </div>
        <figure className="absolute inset-0 -z-1 w-full h-full">
          <img
            src={course.data.preview.url}
            alt={course.data.preview.alt}
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

export default CoursePage
