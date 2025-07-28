import CMS from 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'

CMS.init({
  config: {
    backend: {
      name: 'github',
      repo: 'zicoabhidey/test123',
      branch: 'main'
    },
    media_folder: 'assets/uploads',
    public_folder: '/assets/uploads',
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        folder: '_posts',
        create: true,
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        fields: [
          { label: 'Layout', name: 'layout', widget: 'hidden', default: 'post' },
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Publish Date', name: 'date', widget: 'datetime' },
          { label: 'Body', name: 'body', widget: 'markdown' }
        ]
      },
      {
        name: 'pages',
        label: 'Pages',
        folder: '_pages',
        create: true,
        slug: '{{slug}}',
        fields: [
          { label: 'Layout', name: 'layout', widget: 'hidden', default: 'page' },
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Permalink', name: 'permalink', widget: 'string' },
          { label: 'Body', name: 'body', widget: 'markdown' }
        ]
      }
    ]
  }
})