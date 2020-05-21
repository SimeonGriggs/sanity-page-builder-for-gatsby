import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import page from './documents/page'

// objects
import pageBuilder from './objects/pageBuilder'
import pageBuilderContent from './objects/pageBuilderContent'
import pageBuilderColumns from './objects/pageBuilderColumns'
import columns from './objects/columns'
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'

export default createSchema({
  name: 'website',
  types: schemaTypes.concat([
    // documents
    page,

    // objects
    pageBuilder,
    pageBuilderContent,
    pageBuilderColumns,
    columns,
    bodyPortableText,
    mainImage
  ])
})
