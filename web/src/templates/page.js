import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import PageBuilder from '../components/pageBuilder'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      ...PageBuilder
      title
      slug {
        current
      }
    }
  }
`

const PageTemplate = props => {
  const {data} = props
  const page = data && data.page
  const {pageBuilder, _rawPageBuilder} = page

  return (
    <Layout>
      <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
    </Layout>
  )
}

export default PageTemplate
