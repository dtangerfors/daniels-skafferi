const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryData = await graphql(`
    {
      allPrismicRecipe {
        nodes {
          id
          url
        }
      }
    }
  `)

  const posts = queryData.data.allPrismicRecipe.nodes
  const numPages = Math.ceil(posts.length / 3)

  // Create the homepage
  createPage({
    path: '/recept',
    component: path.resolve(__dirname, 'src/templates/recipe-index.js'),
    context: {
      limit: 24,
      skip: 0,
    },
  })

  // Create listing pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/recept/${i + 1}`,
      component: path.resolve(__dirname, 'src/templates/recipe-index.js'),
      context: {
        limit: 24,
        skip: i * 24,
      },
    })
  })
}