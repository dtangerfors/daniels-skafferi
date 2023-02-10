import React from 'react'
import { graphql } from 'gatsby'
import { PrismicText } from '@prismicio/react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout } from '../../components/Layout'
import RecipeCard from '../../components/cards/RecipeCard'
import { Content } from '../../components/sections'
import bgBorder from "../../images/white-border-deco.svg";
import { Seo } from '../../components/Seo'

export const query = graphql`
  query CoursePage($id: String, $uid: String) {
    prismicCourse(id: { eq: $id }) {
      data {
        title {
          richText
          text
        }
        preamble {
          richText
          text
        }
        preview {
          url
          alt
          gatsbyImageData(width: 1920, imgixParams: {q: 80}, placeholder: BLURRED)
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
              text
            }
            course_group {
              course {
                uid
              }
            }
            preview {
              alt
              url
              gatsbyImageData(width: 500, imgixParams: {q: 80}, placeholder: BLURRED)
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
  const headerImage = getImage(course.data.preview);

  return (
    <Layout>
      <Seo title={course.data.title.text} description={course.data.preamble.text} metaImage={course.data.preview.url}/>
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
        <GatsbyImage image={headerImage} 
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
