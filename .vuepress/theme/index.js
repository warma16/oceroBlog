const path = require('path')
// Theme API.
let blogDomain="https://oceroblog.metalstudio.top"
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
        hostname: blogDomain
      },
    }],
    ['@stormbuf/vuepress-plugin-rss',{
      // 网站域名，必填
      // string
      websiteDomain: blogDomain,
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
    }],
    ["sitemap",{
      hostname: blogDomain, // 替换成你的地址
      exclude: ['/404.html'],
      dateFormatter: time => {
        return time
      }
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
      }
    }],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功"
      }
    }],
    ['copyright',{

      noCopy: false, // 是否禁止复制
      minLength: 150,  // 触发剪贴板组件或noCopy效果的最小文本长度
      disabled: false,  // 是否默认禁用这个插件的功能
      noSelect: false, // 是否禁止选择
      authorName: {
        'zh-CN': ' ocero(樱花) ',
        'en-US': ' Ocero ',
      },
    }],
    // RSS 插件
    ['@vuepress-reco/rss', {
      site_url: blogDomain,
      copyright: ''
    }],
    ["feed",{
        canonical_base: blogDomain
    }],


  ]
})
