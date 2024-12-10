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
        text: 'Change Log',
        link: '/misc/changelog',
      },
      {
        text: 'Terms',
        link: '/misc/terms',
      },
      {
        text: 'Features',
        link: 'https://firma.eduardogomez.io/features',
      },
      {
        text: 'Style Guide',
        link: 'https://firma.eduardogomez.io/style-guide',
      },
      {
        text: 'Get Firma',
        link: 'https://gum.co/ZXLha'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/install-theme',
          '/guide/update-theme',
          '/guide/theme-structure',
          '/guide/publication-settings',
          '/guide/navigation',
          '/guide/custom-cta-button',
          '/guide/enable-search',
          '/guide/dark-mode',
          '/guide/enable-authors-page',
          '/guide/enable-tags-page',
          '/guide/enable-newsletter',
          '/guide/add-comments',
          '/guide/table-of-contents',
          '/guide/enable-members',
          '/guide/theme-translation',
          '/guide/custom-fonts',
          '/guide/theme-development',
        ]
      },
      {
        title: 'Additional Notes',
        collapsable: false,
        children: [
          '/additional-notes/footnote-override',
          '/additional-notes/custom-colors',
          '/additional-notes/post-templates',
          '/additional-notes/social-icons',
          '/additional-notes/tables-and-forms',
          '/additional-notes/open-external-links',
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
