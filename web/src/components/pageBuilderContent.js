import React from 'react'
import Img from 'gatsby-image'

import PortableText from './portableText'

const PageBuilderContent = ({block, raw}) => {
  const {title, image} = block

  return (
    <section className='container mx-auto md:flex py-8 md:py-16'>
      <div className='md:w-1/3'>
        {image && image.asset && image.asset.fluid && (
          <Img
            fluid={image.asset.fluid || null}
            alt={image.alt}
            className={`w-full h-auto`}
          />
        )}
      </div>

      <div className='md:w-2/3 bg-indigo-100 rounded-r-lg p-8'>
        <h1 className='text-indigo-500 text-4xl leading-none font-bold mb-5'>{title}</h1>
        <PortableText blocks={raw.body} />
      </div>
    </section>
  )
}

export default PageBuilderContent
