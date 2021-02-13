export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6027c184e65943052b017743',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wpmsz5sh',
                  apiId: 'd32904ea-5d46-46f5-b6ab-dbc5f8d9e62a'
                },
                {
                  buildHookId: '6027c1851e69bd0a7383acc7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jauzrpbu',
                  apiId: 'ce70f47b-6f2d-4a62-9d6f-9650ac20103f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/heggemsnes/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jauzrpbu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
