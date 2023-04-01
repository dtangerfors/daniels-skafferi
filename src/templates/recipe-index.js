import { graphql, Link } from "gatsby";
import React from "react";
import Hero from "../components/homepage/Hero";
import { Layout } from "../components/Layout";
import RecipeCard from "../components/cards/RecipeCard";
import { Content } from "../components/sections";
import { Seo } from "../components/Seo";
import { H1 } from "../components/typography";
import { Pagination } from "../components/pagination";

export const query = graphql`
  query RecipePage($limit: Int!, $skip: Int!) {
    allPrismicRecipe(
      sort: { order: DESC, fields: first_publication_date }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          data {
            title {
              richText
              text
            }
            category_group {
              category {
                uid
              }
            }
            preview {
              alt
              url
              gatsbyImageData(
                width: 500
                imgixParams: { q: 20 }
                placeholder: BLURRED
              )
            }
            total_servings
            time
          }
          url
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`;

export default function RecipePage({ data }) {
  if (!data) return null;
  const recipes = data.allPrismicRecipe.edges;
  const pageInfo = data.allPrismicRecipe.pageInfo;

  return (
    <Layout>
      <Seo title="Recept" />
      <div>
        <Hero hasBorder>
          <div className="flex items-center justify-center flex-wrap w-full h-full">
            <H1>Recept</H1>
            <div className="flex justify-center flex-wrap mt-10 mb-6 w-full gap-4">
               <Link to="/recept/maltider" className="text-sm py-2 pb-3 px-6 bg-tertiary text-white leading-none rounded-2xl shadow-lg hover:shadow-md transition-all">Måltider</Link>
               <Link to="/recept/kategorier" className="text-sm py-2 pb-3 px-6 bg-tertiary text-white leading-none rounded-2xl shadow-lg hover:shadow-md transition-all">Typ av rätt</Link>
            </div>
          </div>
        </Hero>
        <section className="p-5.5">
          <Content>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mt-5 lg:gap-5.5">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.node.id} recipe={recipe.node} />
              ))}
            </div>
            <Pagination pageInfo={pageInfo} />
          </Content>
        </section>
      </div>
    </Layout>
  );
}
