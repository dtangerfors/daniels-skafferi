import { graphql } from "gatsby";
import React from "react";
import Hero from "../../../components/homepage/Hero";
import { Layout } from "../../../components/Layout";
import SmallCategoryCard from "../../../components/cards/SmallCategoryCard";
import { Content } from "../../../components/sections";
import { Seo } from "../../../components/Seo";
import { H1 } from "../../../components/typography";

export const query = graphql`
  query RecipeCoursePage {
    allPrismicCourse {
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
              gatsbyImageData(
                width: 500
                imgixParams: { q: 20 }
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`;

export default function RecipePage({ data }) {
  if (!data) return null;
  const courses = data.allPrismicCourse.edges;

  return (
    <Layout>
      <Seo title="Recept" />
      <div>
        <Hero hasBorder>
          <div className="flex items-center justify-center flex-wrap w-full h-full">
            <H1>Måltider</H1>
          </div>
        </Hero>
        <section className="p-5.5">
          <Content>
            <header className="mt-10 mb-5">
              <h2 className="font-serif font-light text-lg lg:text-xl leading-none text-primary">
                Alla kategorier
              </h2>
            </header>
            <div className="grid gap-2.5 lg:gap-5.5 grid-cols-2 md:grid-cols-3">
              {courses.map((category) => (
                <SmallCategoryCard category={category.node} />
              ))}
            </div>
          </Content>
        </section>
      </div>
    </Layout>
  );
}
