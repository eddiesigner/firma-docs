const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Firma Ghost Theme',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Features',
        link: 'https://firma.eduardogomez.io/features',
      },
      {
        text: 'Style Guide',
        link: 'https://firma.eduardogomez.io/style-guide',
      },
      {
        text: 'Light Version',
        link: 'https://firma.eduardogomez.io/',
      },
      {
        text: 'Dark Version',
        link: 'https://firma-dark.eduardogomez.io/'
      },
      {
        text: 'Get Firma',
        link: 'https://gumroad.com'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/theme-structure',
          '/guide/install-theme',
          '/guide/update-theme',
          '/guide/enable-search',
          '/guide/enable-authors-page',
          '/guide/enable-tags-page',
          '/guide/enable-newsletter',
          '/guide/add-comments',
          '/guide/table-of-contents',
          '/guide/enable-members',
          '/guide/theme-translation',
          '/guide/dark-version',
          '/guide/theme-development',
        ]
      },
      {
        title: 'Additional Notes',
        collapsable: false,
        children: [
          '/additional-notes/custom-colors',
          '/additional-notes/post-templates',
          '/additional-notes/tables-and-forms',
          '/additional-notes/resources',
        ]
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
