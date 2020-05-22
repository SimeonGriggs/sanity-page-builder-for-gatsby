import React from 'react'

import PageBuilderContent from './pageBuilderContent'
import PageBuilderColumns from './pageBuilderColumns'

function PageBuilder (props) {
  const {type, pageBuilder, _rawPageBuilder} = props

  // Load the right component, based on the _type from Sanity
  const Components = {
    pageBuilderContent: PageBuilderContent,
    pageBuilderColumns: PageBuilderColumns
  }

  // 'raw' content needs to be passed in for the PortableText Component
  return pageBuilder.map((block, index) => {
    // console.log(block)

    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        type,
        raw: _rawPageBuilder[index]
      })
    }
  })
}

export default PageBuilder
