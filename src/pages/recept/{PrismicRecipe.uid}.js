import React from 'react'
import { graphql } from 'gatsby'
import { PrismicText } from '@prismicio/react'
import {
  HowTo,
  Item,
  ItemList,
  RecipeGroup,
} from '../../components/recipe_page/ingredients'
import HeroImage from '../../components/recipe_page/HeroImage'
import { Content, Section } from '../../components/recipe_page/layout'
import { Seo } from '../../components/Seo'
import Step from '../../components/recipe_page/Step'
import { Layout } from '../../components/Layout'
import { H1, Ingress } from '../../components/typography'
import MetaField from '../../components/recipe_page/MetaField'
import {Text} from '../../components/page/slices'

import bgBorder from "../../images/white-border-deco.svg";

const DashedLine = () => (
  <div className="absolute z-10 h-full border-r-2 border-dotted border-tertiary border-opacity-30 top-0 left-4 lg:left-10"></div>
)

export const query = graphql`
query SingleRecipe($id: String) {
  prismicRecipe(id: {eq: $id}) {
    first_publication_date
    data {
      title {
        richText 
        text
      }
      preview {
        alt
        copyright
        url
      }
      body {
        ... on PrismicRecipeDataBodyIngredients {
          id
          slice_type
          primary {
            recipe_group {
              richText 
            }
          }
          items {
            item {
              richText
            }
            measurement {
              richText
            }
            quantity {
              richText
            }
          }
        }
        ... on PrismicRecipeDataBodyHowTo {
          id
          slice_type
          primary {
            recipe_group {
              richText
            }
          }
          items {
            step {
              richText
            }
          }
        }
        ... on PrismicRecipeDataBodyBlogPost {
          items {
            text {
              richText
            }
            image {
              alt
              url
            }
          }
          slice_type
        }
      }
      description {
        richText
      }
      course_group {
        course {
          uid
        }
      }
      category_group {
        category {
          uid
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
        case "blog_post":
          return <Text slice={slice} key={index} />

        default:
          return
      }
    })()

    return res
  })
}


const RecipePage = ({ data }) => {
  if (!data) return null
  const recipe = data.prismicRecipe;
  const {title, preview, description, category_group, course_group, body} = recipe.data;
  const {first_publication_date} = recipe;

  const recipeIngredients = recipe.data.body.filter(
    (slice) => slice.slice_type === 'ingredients',
  )
  const recipeHowTo = recipe.data.body.filter(
    (slice) => slice.slice_type === 'how_to',
  )

  return (
    <Layout>
      <Seo title={title.text} />

      <div className="relative">
        <header className="relative bg-secondary py-20 after:w-full after:h-4 after:absolute after:bg-wave after:bg-auto after:top-1/2 after:-translate-y-1/2" style={{backgroundImage: `url(${bgBorder})`, backgroundSize: `30px 15px`, backgroundPosition: `center bottom`, backgroundRepeat: `repeat-x`}}>
          <Section>
            <Content>
              <div className="pb-0 lg:pb-12 max-w-screen-md mx-auto">
                <H1><PrismicText field={title.richText} /></H1>
                <MetaField publishDate={first_publication_date} category={category_group} course={course_group}/>
              </div>
              </Content>
          </Section>
        </header>
        <Section>
          <Content>
            <div className="-mt-28">
              <HeroImage image={preview} key="heroImage" />
            </div>
          </Content>
        </Section>
           
        <main>
          <Section>
            <Content>
              <div className="max-w-screen-md mx-auto">
              <Ingress><PrismicText field={description.richText} /></Ingress>
              {body ? <SliceItems key="project-body" slices={body} /> : null}
              </div>
            </Content>
          </Section>
          <Section>
            <Content>
            <div className="lg:flex border-t-2 border-dotted border-tertiary border-opacity-30 pt-12">
              <section id="recipe-steps" className="lg:px-5.5 flex-1">
                <h2 className="font-serif font-normal text-xl text-primary">
                  Ingredienser
                </h2>

                {recipeIngredients.map((recipeGroup, index) => {
                  return (
                    <RecipeGroup
                      ingredients={recipeGroup}
                      key={`innerContent-ingredients-${index}`}
                    >
                      <h3 className="font-serif font-normal text-lg text-primary">
                        <PrismicText field={recipeGroup.primary.recipe_group.richText} />
                      </h3>
                      <ItemList>
                        {recipeGroup.items.map((item, index) => {
                          return (
                            <Item
                              key={`ingredientItem-${index}`}
                              item={item.item}
                              quantity={item.quantity}
                              measurement={item.measurement}
                            />
                          )
                        })}
                      </ItemList>
                    </RecipeGroup>
                  )
                })}
              </section>
              <section
                id="recipe-how-to"
                className="relative pl-12 lg:px-5.5 lg:pl-18 flex-1"
              >
                <h2 className="font-serif font-normal text-xl text-primary">
                  G??r s?? h??r
                </h2>

                {recipeHowTo.map((recipeGroup, index) => {
                  return (
                    <RecipeGroup
                      howTo={recipeGroup}
                      key={`innerContent-howTo-${index}`}
                    >
                      <h3 className="font-serif font-bold text-lg text-primary">
                        <PrismicText field={recipeGroup.primary.recipe_group.richText} />
                      </h3>
                      <HowTo>
                        {recipeGroup.items.map((item, index) => {
                          return (
                            <Step
                              key={`ingredientItem-${index}`}
                              step={<PrismicText field={item.step.richText} />}
                            />
                          )
                        })}
                      </HowTo>
                    </RecipeGroup>
                  )
                })}

                <DashedLine />
              </section>
            </div>
            </Content>
          </Section>
        </main>
      </div>
    </Layout>
  )
}

export default RecipePage