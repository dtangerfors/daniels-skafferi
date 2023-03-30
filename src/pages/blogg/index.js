import React from "react";
import { graphql } from 'gatsby'
import { Layout } from "../../components/Layout";
import Hero from "../../components/homepage/Hero";
import { H1 } from "../../components/typography";
import { Content, Section } from "../../components/recipe_page/layout";
import { Seo } from "../../components/Seo";
import BlogCard from "../../components/cards/BlogCard"

export const BlogIndexQuery = graphql`
  query {
    allPrismicBlogPost {
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

const BlogIndex = ({data}) => {
   if (!data) return null
   const posts = data.allPrismicBlogPost.edges;

   return (
      <Layout>
         <Seo title="Blogg"/>
         <Hero hasBorder>
         <div className="flex items-center justify-center w-full h-full">
            <H1>Blogg</H1>
            </div>
         </Hero>
         <Section>
            <Content>
            {posts.map((post) => (
               <BlogCard item={post.node} key={post.node.uid} />
            ))}
            </Content>
         </Section>
      </Layout>
   )
}

export default BlogIndex