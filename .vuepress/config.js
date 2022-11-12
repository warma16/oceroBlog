module.exports = {
  "title": "ocero的博客",
  "description": "一个菜鸡的小博客，来记录自己的生活和各种经验",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://oceroimagestore.metalstudio.top/img/headimg_dl.ico"
      }
    ],
    [
      "link",
      {
        "rel":"stylesheet",
        "href":"/FluentDesign/core.css",
        "type":"text/css"
      }
    ],
    [
      "link",
      {
        "rel":"stylesheet",
        "href":"/FluentDesign/scripts.js",
        "type":"text/css"
      }
    ],
    [
      "link",
      {
        "rel":"stylesheet",
        "href":"/FluentDesign/icons.css",
        "type":"text/css"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "name":"baidu-site-verification",
        "content":"code-VMBvl258ky"
      }
    ],
    ['script', {}, `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?c001f53872329918b27f32dc8b9f5a1e";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    
    `] ,//百度统计
    ["a",{
      "style": "display: none;",
      "href":"https://icp.gov.moe/?keyword=20224080",
      "target":"_blank"

    },"萌ICP备20224080号"],
    ['script', {}, `
      var linkDom = document.createElement('a');
      linkDom.href="https://icp.gov.moe/?keyword=20224080"
      linkDom.target="_blank"
      linkDom.rel="noopener noreferrer"
      linkDom.style="display:none"
      //
      //<a href="https://icp.gov.moe/?keyword=20224080" target="_blank">萌ICP备20224080号</a>
    `] //萌备案
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "夜灵空的博客",
        "desc": "夜灵空的博客",
        "logo": "https://oceroimagestore.metalstudio.top/img/v2-3ac2f78a023f8d0caab8ba20792ca5a2_xll.jpg",
        "link": "https://blog.imylk.top/?from=oceroBlog"
      },
      {
        "title": "Py’s Whisper",
        "desc": "一秒接过制服，一生志在蓝天！",
        "logo": "https://oss.yzbh.tj.cn/halo/avatar.png",
        "link": "https://whisper.pyliubaolin.top/?from=oceroBlog"
      },
      {
        "title":"scooo的博客",
        "desc":"无限进步",
        "logo":"https://oceroimagestore.metalstudio.top/img/20220803003244.png",
        "link":"https://scooomaker.top/?from=oceroBlog"
      },
      {
        "title":"kifuan",
        "desc":"随便写写，主要分享程序相关",
        "logo":"https://kifuan.me/avatar.jpg",
        "link":"https://blog.kifuan.me/?from=oceroBlog"
      }
    ],
   /* "valineConfig": {
      "appId": "xxx",// your appId
      "appKey": "xxx", // your appKey
      "avatar": "", //
      "enableQQ": false, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },*/
    "vssueConfig":{
      /** 上线版本配置
       * platform : github-v4
       * clientId: 07cd693163f412d4f3ca
       * clientSecret: dad78cad789e7c010d8751eef6bb31510943844a
      */

      /**本地版本配置
       * platform : github-v4
       * clientId：4b91e5877f341817a118
       *clientSecret：49f2ca97dc3ee57d3023b6e48caa07c2a507d580
      */
      "platform": "github-v4",
      "clientId": "07cd693163f412d4f3ca",
      "clientSecret": "dad78cad789e7c010d8751eef6bb31510943844a",
      "repo": "oceroBlogComments",
      "owner": "warma16",
    },
    "logo": "https://oceroimagestore.metalstudio.top/img/headimg_dl",
    "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "ocero",
    "authorAvatar": "https://oceroimagestore.metalstudio.top/img/headimg_dl",
    "record": "萌ICP备20224080号", //icp备案
    "recordLink":"https://icp.gov.moe/?keyword=20224080",//icp备案链接
    "startYear": "2022",
    "info": "一个平平无奇的小菜鸡，现在在尝试着做快乐的事情",
    "socials":{
      "github" : "https://github.com/warma16", //github
      "gitlub" : false, //gitlub
      "gitee" : false, //gitee
      "jianshu" : false, //简书
      "zhihu" : false, //知乎
      "toutiao" : false, //知乎
      "juejin": false, //掘金
      "segmentfault" : false, //思否
      "csdn" : false, //CSDN
      "wechat" :false, //微信
      "qq" : "你的QQ" //QQ
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    "covers": [
      'https://oceroimagestore.metalstudio.top/img/20220724114411.png',
      "https://oceroimagestore.metalstudio.top/img/20220724114536.png",
      "https://oceroimagestore.metalstudio.top/img/20220724114921.png",
      "https://oceroimagestore.metalstudio.top/img/20220724114953.png",
      "https://oceroimagestore.metalstudio.top/img/20220724115030.png",
      "https://oceroimagestore.metalstudio.top/img/20220724115104.png",
      "https://oceroimagestore.metalstudio.top/img/20220724115150.png"
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}