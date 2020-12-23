export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5fe31d09e4c1ea40629d9208',
                  title: 'Sanity Studio',
                  name: 'sanity-termportal-test-studio',
                  apiId: 'f3b4a65a-a0dd-4e78-95d8-4caeda3d03ba'
                },
                {
                  buildHookId: '5fe31d0903e43729a83fd6ee',
                  title: 'Blog Website',
                  name: 'sanity-termportal-test',
                  apiId: '722feeed-bdf0-4001-8bad-8320f951a0b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarjelavik/sanity-termportal-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-termportal-test.netlify.app', category: 'apps'}
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
