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
                  buildHookId: '5ebd9e85482f2bd1361bbc4d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-tuoo3w4x',
                  apiId: '47b2e679-8b12-4f75-baa2-f79ccbcbc45d'
                },
                {
                  buildHookId: '5ebd9e850530a0e1bbbb20d7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-68zwcqg4',
                  apiId: '4ab6a347-6e47-4406-820c-e91bba2bd11b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-blog-2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-68zwcqg4.netlify.app', category: 'apps' }
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
