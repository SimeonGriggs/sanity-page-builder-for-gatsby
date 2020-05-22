/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createSanityPage (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPage(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []

  pageEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`
      console.log(path)

      createPage({
        path,
        component: require.resolve('./src/templates/page.js'),
        context: {id}
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createSanityPage(graphql, actions)
}
