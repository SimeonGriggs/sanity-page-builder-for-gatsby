
export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Page Builder'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title', slug = {}}) {
      return {
        title,
        subtitle: slug.current
      }
    }
  }
}
