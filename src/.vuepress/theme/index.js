const path = require('path')
// Theme API.
module.exports = (options, ctx) => ({
  alias () {
    const { themeConfig, siteConfig } = ctx
    // resolve algolia
    const isAlgoliaSearch = (
      themeConfig.algolia ||
      Object.keys(siteConfig.locales && themeConfig.locales || {})
        .some(base => themeConfig.locales[base].algolia)
    )
    return {
      '@AlgoliaSearchBox': isAlgoliaSearch
        ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
        : path.resolve(__dirname, 'noopModule.js'),
      '@SearchBox': path.resolve(__dirname, 'components/SearchBox.vue')
    }
  },

  plugins: [
    '@vuepress-reco/back-to-top',
    '@vuepress-reco/loading-page',
    '@vuepress-reco/pagation',
    '@vuepress-reco/comments',
    '@vuepress/active-header-links',
    ['@vuepress/medium-zoom', {
      selector: '.theme-reco-content :not(a) > img'
    }],
    '@vuepress/plugin-nprogress',
    ['@vuepress/plugin-blog', {
      permalink: '/:regular',
      frontmatters: [
        {
          id: 'tags',
          keys: ['tags'],
          path: '/tag/',
          layout: 'Tags',
          scopeLayout: 'Tag'
        },
        {
          id: 'categories',
          keys: ['categories'],
          path: '/categories/',
          layout: 'Categories',
          scopeLayout: 'Category'
        },
        {
          id: 'timeline',
          keys: ['timeline'],
          path: '/timeline/',
          layout: 'TimeLines',
          scopeLayout: 'TimeLine'
        },
        {
          id: 'about',
          keys: ['about'],
          path: '/about/',
          layout: 'About',
          scopeLayout: 'About'
        }
      ],
      sitemap: {
        hostname: "https://ocero-blog.vercel.app"
      },
    }],
    ['@stormbuf/vuepress-plugin-rss',{
      // 网站域名，必填
      // string
      websiteDomain: 'https://stormbuf.top',
      // rss item 数量
      // 默认: 20
      // number
      count: 60,
      // 生成的 rss 是否获取页面内容
      // 默认: true
      // boolearn
      content: true,
      // 生成 RSS 时，是否包括指定页面。generatePath 优先于 ignorePath。
      // 支持正则
      // Arrary<string>
      // default: []
      generatePath: ['.* ( html|htm ) '],
      // 生成 RSS 时，是否不包括指定页面。
      // 支持正则
      // Arrary<string>
      // default: ['/404.html','/404.htm']
      ignorePath: ['/404.html', '/404.htm','/HelloWorld.html']
    }],
    'vuepress-plugin-smooth-scroll',
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': '',
        '/zh/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': '',
        '/zh/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': '',
        '/zh/': '警告'
      }
    }],
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n',
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }]
  ]
})
