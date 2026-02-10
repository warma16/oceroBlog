// .vitepress/config.mts
import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss'
const baseUrl = 'https://oceroblog.metalstudio.top'
const RSS: RSSOptions = {
  title: 'ocero的博客',
  baseUrl,
  copyright: 'Copyright (c) 2022-present, ocero',
}
const avatar="https://i0.hdslb.com/bfs/openplatform/bbba36e8cf4d16635fa5cc563ab1bbb813b4b9fe.jpg"
const slogan="一个单调又有趣的博客"

// ==================== Teek 主题配置 ====================
const teekConfig = defineTeekConfig({
  // 全局配置
  teekTheme: true,
  teekHome: true, // 启用博客风格首页
  vpHome: true, // 同时启用 VitePress 首页风格
  loading: true,
  anchorScroll: true,
  
  // Banner 配置
  banner: {
    enabled: true,
    bgStyle: "fullImg", // 全屏图片风格
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听",
      "积跬步以至千里，致敬每个爱学习的你",
      "这一生波澜壮阔或是不惊都没问题"
    ],
    imgSrc: [
      "https://i0.hdslb.com/bfs/openplatform/a3368595a5bd673f642010315de3c65a178ecd86.png",
    ],
    //imgInterval: 5000, // 图片切换间隔
    mask: true, // 启用遮罩
    maskBg: "rgba(0, 0, 0, 0.3)", // 遮罩颜色
    name: "ocero的博客",
    //subtitle: "一个菜鸡的小博客，来记录自己的生活和各种经验"
  },
  
  // 博主信息
  blogger: {
    name: "ocero",
    slogan: "一个平平无奇的小菜鸡，现在在尝试着做快乐的事情",
    avatar: avatar,
    shape: "circle-rotate", // 可旋转圆形头像
    circleSize: 100,
    status: {
      icon: "😊", // 状态图标
      title: "在线"
    }
  },
  
  // 文章列表配置
  post: {
    postStyle: "list", // 列表风格
    excerptPosition: "top",
    showMore: true,
    moreLabel: "阅读全文 >",
    emptyLabel: "暂无文章",
    coverImgMode: "default",
    transition: true,
    defaultCoverImg: [
      "https://i0.hdslb.com/bfs/openplatform/a5edda1f4f92ec847784d9052d3a073b965b43d2.png",
      "https://i0.hdslb.com/bfs/openplatform/b0564f248ddc321dccc166f12ce4557671ae59b7.png"
    ]
  },
  
  // 分页配置
  page: {
    pageSize: 10,
    layout: "prev, pager, next, ->, total",
    background: true
  },
  
  // 分类卡片
  category: {
    enabled: true,
    path: "/categories",
    homeTitle: "文章分类",
    pageTitle: "全部分类",
    moreLabel: "更多 ...",
    emptyLabel: "暂无文章分类",
    limit: 5
  },
  
  // 标签卡片
  tag: {
    enabled: true,
    path: "/tags", 
    homeTitle: "热门标签",
    pageTitle: "全部标签",
    moreLabel: "更多 ...",
    emptyLabel: "暂无标签",
    limit: 21,
    /*tagColor: [
      { border: "#bfdbfe", bg: "#eff6ff", text: "#2563eb" },
      { border: "#e9d5ff", bg: "#faf5ff", text: "#9333ea" },
      { border: "#fbcfe8", bg: "#fdf2f8", text: "#db2777" },
      { border: "#a7f3d0", bg: "#ecfdf5", text: "#059669" },
      { border: "#fde68a", bg: "#fffbeb", text: "#d97706" },
      { border: "#a5f3fc", bg: "#ecfeff", text: "#0891b2" },
      { border: "#c7d2fe", bg: "#eef2ff", text: "#4f46e5" }
    ]*/
  },

  
  // 精选文章
  topArticle: {
    enabled: true,
    title: "精选文章",
    emptyLabel: "暂无精选文章",
    limit: 5,
    dateFormat: "yyyy-MM-dd hh:mm:ss"
  },
  
  // 友情链接
  /*friendLink: {
    list: [
      {
        name: "夜灵空的博客",
        desc: "夜灵空的博客",
        avatar: "https://oceroimagestore.metalstudio.top/img/v2-3ac2f78a023f8d0caab8ba20792ca5a2_xll.jpg",
        link: "https://blog.imylk.top/?from=oceroBlog"
      },
      {
        name: "Py's Whisper",
        desc: "一秒接过制服，一生志在蓝天！",
        avatar: "https://oss.yzbh.tj.cn/halo/avatar.png", 
        link: "https://whisper.pyliubaolin.top/?from=oceroBlog"
      },
      {
        name: "scooo的博客",
        desc: "无限进步",
        avatar: "https://oceroimagestore.metalstudio.top/img/20220803003244.png",
        link: "https://scooomaker.top/?from=oceroBlog"
      },
      {
        name: "kifuan",
        desc: "随便写写，主要分享程序相关",
        avatar: "https://kifuan.me/avatar.jpg",
        link: "https://blog.kifuan.me/?from=oceroBlog"
      },
      {
        name: "Eason's Home",
        desc: "一个科技少年的小天地",
        avatar: "https://oceroimagestore.metalstudio.top/img/20221217200748.png",
        link: "https://krbug.asia/?from=oceroBlog"
      },
      {
        name: "wky32768",
        desc: "wky32768的博客",
        avatar: "https://pic.cnblogs.com/face/1450018/20190422160951.png",
        link: "https://www.cnblogs.com/wky32768/?from=oceroBlog"
      }
    ],
    enabled: true,
    title: "友情链接",
    emptyLabel: "暂无友情链接",
  },*/
  friendLink: {
    enabled: true, // 是否启用友情链接卡片
    list: [
      {
        name: "逐水寻源",
        avatar: "https://www.zair.top/img/logo.png", // 您的头像
        desc: "欢迎来到逐水寻源，这是个人技术博客，汇聚了我在计算机技术、数据科学和人工智能等领域的学习与实践。从编程技巧到算法解析，从数据分析到机器学习项目，从技术知识到个人成长故事，这里有丰富的内容等待你的探索。让我们一起学习，一起成长，解锁技术世界的无限可能！",
        link: "https://www.zair.top/?from=oceroBlog"
      },
      {
        name: "Py's Whisper",
        desc: "一秒接过制服，一生志在蓝天！",
        avatar: "https://oss.yzbh.tj.cn/halo/avatar.png", 
        link: "https://whisper.pyliubaolin.top/?from=oceroBlog"
      },
      {
        name: "喵喵小窝",
        link: "https://blog.hikariyo.net/?from=oceroBlog",
        avatar: "https://hikariyo.net/avatar.jpg",
        desc: "做点有趣的事"
      },
      {
        name: "kifuan",
        desc: "随便写写，主要分享程序相关",
        avatar: "https://kifuan.me/avatar.jpg",
        link: "https://blog.kifuan.me/?from=oceroBlog"
      },
      {
        name: "Eason's Home",
        desc: "一个科技少年的小天地",
        avatar: "https://i0.hdslb.com/bfs/openplatform/cb93b3821e7f7cbafd9420415ed89516795f5af7.png",
        link: "https://krbug.asia/?from=oceroBlog"
      },
      {
        name: "wky32768",
        desc: "wky32768的博客",
        avatar: "https://pic.cnblogs.com/face/1450018/20190422160951.png",
        link: "https://www.cnblogs.com/wky32768/?from=oceroBlog"
      },
    ], // 友情链接数据列表
    title: "友情链接", // 卡片标题
    emptyLabel: "暂无友情链接", // 友情链接为空时的标签
    limit: 5, // 一页显示的数量
    autoScroll: false, // 是否自动滚动
    scrollSpeed: 2500, // 滚动间隔时间，单位：毫秒。autoScroll 为 true 时生效
    autoPage: false, // 是否自动翻页
    pageSpeed: 4000, // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
  },
  
  // 站点分析卡片
  docAnalysis: {
    enabled: true,
    createTime:"2022-07-24",
    //title: "站点信息",
    appendInfo: [
      { key: "record", label: "备案信息", value: "萌ICP备20224080号" },
      { key:"friendLinkTemplate",label:"友链格式",value:`nickname:ocero的博客 avatar:${avatar} description:${slogan} url:${baseUrl}`}
    ],
    wordCount:true,
    readingTime:true
  },
  
  // 评论系统 - 使用 Giscus
  /*comment: {
    provider: "giscus",
    options: {
      repo: "warma16/oceroBlogComments",
      repoId: "R_kgDOLsjPfg",
      category: "Announcements",
      categoryId: "DIC_kwDOLsjPfs4CeLTW",
      mapping: "pathname",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "bottom",
      theme: "preferred_color_scheme",
      lang: "zh-CN",
      loading: "lazy"
    }
  },*/
  
  // 社交链接
  social: [
    {
      icon: "icon-github",
      name: "GitHub",
      link: "https://github.com/warma16"
    }
  ],
  
  // 页脚配置
  footerInfo: {
    theme: {
      show: true,
      name: "VitePress Theme Teek"
    },
    icpRecord: {
      name: "萌ICP备20224080号",
      link: "https://icp.gov.moe/?keyword=20224080"
    },
    //copyright: `Copyright © 2022-${new Date().getFullYear()} ocero`,
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2022, // 创建年份
      suffix: "ocero", // 后缀
    },
  },
  
  // 文章分析
  articleAnalyze: {
    showIcon: true,
    dateFormat: "yyyy-MM-dd hh:mm:ss",
    showInfo: true,
    showAuthor: true,
    showCreateDate: true,
    showUpdateDate: false,
    showCategory: true,
    showTag: true
  },
  
  // 面包屑
  breadcrumb: {
    enabled: true,
    separator: "/",
    homeLabel: "首页"
  },
  
  // 文章分享
  articleShare: {
    enabled: true,
    text: "分享此页面",
    copiedText: "链接已复制"
  },
  
  // 站点统计
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "c001f53872329918b27f32dc8b9f5a1e"
      }
    }
  ],
  
  // Vite 插件
  vitePlugins: {
    sidebar: true,
    permalink: true,
    mdH1: true,
    docAnalysis: true,
    autoFrontmatter: true,
    autoFrontmatterOption: {
      categories: true,
    }
  },
  
  // 回到顶部
  backTop: {
    enabled: true,
    content: "progress"
  },
  
  // 代码块配置
  codeBlock: {
    enabled: true,
    copiedDone: () => console.log("复制成功！")
  }
});

// ==================== VitePress 配置 ====================
export default defineConfig({
  extends: teekConfig, // 继承 Teek 主题配置
  
  // 基本配置
  title: 'ocero的博客',
  description: '一个菜鸡的小博客，来记录自己的生活和各种经验',
  lang: 'zh-CN',
  lastUpdated: true,
  
  // 构建配置
  srcDir: "blogs", // 源文件目录
  outDir: "dist", // 输出目录（相对于项目根目录）
  ignoreDeadLinks: true,
  
  // Head 配置
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { 
      rel: 'icon', 
      href: '/headimg_dl.ico' 
    }],
    /*['link', { 
      rel: 'stylesheet', 
      href: '/FluentDesign/core.css' 
    }],
    ['link', { 
      rel: 'stylesheet', 
      href: '/FluentDesign/icons.css' 
    }],
    ['script', { src: '/FluentDesign/scripts.js' }],*/
    ['meta', { 
      name: 'viewport', 
      content: 'width=device-width,initial-scale=1,user-scalable=no' 
    }],
    ['meta', { 
      name: 'baidu-site-verification', 
      content: 'code-VMBvl258ky' 
    }],
    // 百度统计（原脚本已集成到 siteAnalytics，这里可以删除或保留）
    /*['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c001f53872329918b27f32dc8b9f5a1e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `]*/
  ],
  
  // Markdown 配置
  markdown: {
    lineNumbers: false,
    theme: {
      light: 'min-light',
      dark: 'min-dark'
    },

  },
  vue: {
      template: {
        compilerOptions: {
          // 忽略代码块中的模板语法
          isCustomElement: tag => tag.includes('code') || tag.includes('pre'),
          whitespace: 'preserve'
        }
      }
    },
  
  // 主题配置（VitePress 原生配置）
  themeConfig: {
    // 导航栏
    nav: [
      { text: '主页', link: '/', activeMatch: '/' },
      { text: '分类', link: '/categories', activeMatch: '/categories' },
      { text: '标签', link: '/tags', activeMatch: '/tags' },
      { text: '历程', link: '/archives', activeMatch: '/archives' },
      {text:"开往",link:"https://www.travellings.cn/go.html"},
      { text: '关于', link: '/about/', activeMatch: '/about/' }
    ],
    
    // 搜索
    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },
    
    // 社交链接（VitePress 原生）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/warma16' }
    ],
    
    // 大纲
    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  },
  
  // Vite 配置
  vite: {
    // 如果需要配置别名等
    resolve: {
      alias: {
        '@': 'blogs'
      }
    },
    plugins: [RssPlugin(RSS)]
  },

  sitemap:{
    hostname:baseUrl
  },

  
  // 构建钩子
  async buildEnd(siteConfig) {
    console.log('构建完成！')
  }
});