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
                  buildHookId: '5f8f501a7e8cf31f79f2c31f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-0-studio',
                  apiId: '40322102-289b-479c-a495-731dfcf9bf5b'
                },
                {
                  buildHookId: '5f8f501aa0419f1b36576430',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-0',
                  apiId: '382b4be2-ad97-4b6f-bd1c-51cc0f12dec3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KateDK/sanity-gatsby-blog-2.0',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-0.netlify.app', category: 'apps' }
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
