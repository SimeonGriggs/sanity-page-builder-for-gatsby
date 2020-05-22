import React from 'react'
import {graphql, Link} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'

import Layout from '../components/layout'

export const query = graphql`
  query IndexPageQuery {
    posts: allSanityPage(
      filter: { slug: { current: { ne: null } } }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const {data} = props

  const pageNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
    : []

  return (
    <Layout>
      <section className='container mx-auto py-32 px-4'>

        <h1 className='text-indigo-500 text-4xl leading-none font-bold mb-10'>
          Sanity Page Builder Example
        </h1>

        <p className='mb-5'>Pages:</p>

        {pageNodes && pageNodes.map(page => (
          <h2 className='mb-5'>
            <Link
              className='text-teal-500 underline hover:text-teal-700'
              to={page.slug.current}
            >
              {page.title}
            </Link>
          </h2>
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
