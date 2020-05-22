import React from 'react'

import PortableText from './portableText'

const PageBuilderColumns = ({block, raw}) => {
  const {columns} = block

  return (
    <section className='bg-teal-100'>
      <div className='container mx-auto md:flex py-4'>
        {columns && columns.map((column, index) =>
          <div className='md:w-1/3 p-4'>
            <div className='bg-white border border-teal-200 rounded p-4'>
              <h2 className='text-2xl text-teal-600 font-bold mb-5'>
                {column.title}
              </h2>
              <PortableText blocks={raw.columns[index].body} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PageBuilderColumns
