export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec6bfa1060eac055683c04b',
                  title: 'Sanity Studio',
                  name: 'sanity-page-builder-for-gatsby-studio',
                  apiId: '04aed383-d92c-40bd-a9da-654b1a3b4239'
                },
                {
                  buildHookId: '5ec6bfa157f7e8e708d65371',
                  title: 'Blog Website',
                  name: 'sanity-page-builder-for-gatsby',
                  apiId: 'f4465dd7-d209-413c-b536-68c620d19c4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SimeonGriggs/sanity-page-builder-for-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-page-builder-for-gatsby.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
