export default {
  name: 'pageBuilderColumns',
  title: 'Columns',
  type: 'object',
  fields: [
    {
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        {name: 'column', title: 'Column', type: 'column'}
      ]
    }
  ],
  preview: {
    select: {
      columns: 'columns'
    },
    prepare ({columns = []}) {
      const titles = []
      columns.forEach(col => titles.push(col.title))
      return {
        title: titles.join(', '),
        subtitle: columns.length === 1 ? `1 Column` : `${columns.length} Columns`
      }
    }
  }
}
