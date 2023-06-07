/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dc8693f7357b2a8bf8369bb602965bf6"
  },
  {
    "url": "about/index.html",
    "revision": "636f3b380dfc1eb18b07759145cc13b8"
  },
  {
    "url": "assets/css/0.styles.d26d3be7.css",
    "revision": "3544b0e22e61c2daa8a0c20441a6542d"
  },
  {
    "url": "assets/js/1.3c6870fb.js",
    "revision": "6ba6043b6ce805c723023e5ae1aa521b"
  },
  {
    "url": "assets/js/10.7ee88788.js",
    "revision": "64ce4d0864bfd2afc9de00007496ae1d"
  },
  {
    "url": "assets/js/11.b60708da.js",
    "revision": "91bcefbb54c9539f2a2a341e392a5663"
  },
  {
    "url": "assets/js/12.c057a3b3.js",
    "revision": "b723c158c182a2e4863b8000f42a0228"
  },
  {
    "url": "assets/js/13.685069c9.js",
    "revision": "f8c24d3a60771a744b9ce364f1d2533f"
  },
  {
    "url": "assets/js/14.9924d73a.js",
    "revision": "1795084749bd7407654e333c454ad687"
  },
  {
    "url": "assets/js/15.9be230f2.js",
    "revision": "95bce832382e171953fc3288d3bda513"
  },
  {
    "url": "assets/js/16.a1e82848.js",
    "revision": "588c48c062887ac4eb5379f4856759a8"
  },
  {
    "url": "assets/js/17.73f180f9.js",
    "revision": "7f29446b1fef8cc97c670aa934d66f65"
  },
  {
    "url": "assets/js/18.a734ae12.js",
    "revision": "cac1b7a71ffaae2d3942a38f40d95483"
  },
  {
    "url": "assets/js/19.7af56223.js",
    "revision": "71aa11be4149eb3a0753625b6c3a1d75"
  },
  {
    "url": "assets/js/20.a4884f09.js",
    "revision": "df66332a184d80fac3570c3dbb470400"
  },
  {
    "url": "assets/js/21.c650e04e.js",
    "revision": "72189f6d4a0d3b5e156ba938e7123eb7"
  },
  {
    "url": "assets/js/22.8ada5d71.js",
    "revision": "f2f2eba5ab16a7d0aa918dd92c97fa6d"
  },
  {
    "url": "assets/js/23.f589f939.js",
    "revision": "c5684546d7d3462935b2d49e5f560a21"
  },
  {
    "url": "assets/js/24.dc2389f8.js",
    "revision": "bb9972784d844880856e222e34e12be8"
  },
  {
    "url": "assets/js/25.7a0f78f9.js",
    "revision": "8630a5c6802cf34b8dd77eff5ef30739"
  },
  {
    "url": "assets/js/26.01aa508c.js",
    "revision": "1147b98eace2d05de571203335b31b38"
  },
  {
    "url": "assets/js/27.59cef03c.js",
    "revision": "944b65d6cb0a03201b0f8c69994bf45b"
  },
  {
    "url": "assets/js/28.a82c4704.js",
    "revision": "3e4055c118f49b54a21f6f0948ebf05b"
  },
  {
    "url": "assets/js/29.a512ee14.js",
    "revision": "91dac1d0aa101fd4ee122bf306b7619b"
  },
  {
    "url": "assets/js/3.9191311e.js",
    "revision": "e51c4ddd3893dfc151f07957d191a638"
  },
  {
    "url": "assets/js/30.fb62d365.js",
    "revision": "0128f9595fdbded6622b17773ea15550"
  },
  {
    "url": "assets/js/4.a1896b38.js",
    "revision": "c781ad7cf812422df282afcd78688109"
  },
  {
    "url": "assets/js/5.5b8a1143.js",
    "revision": "ef83e7f9574ff5b6fba87c007f9dcd2f"
  },
  {
    "url": "assets/js/6.7c5a99f8.js",
    "revision": "a47f48969307f5061ce5e304fd0148bc"
  },
  {
    "url": "assets/js/7.1b6ae21f.js",
    "revision": "967604e9923ccc5e837f6e424bd49c93"
  },
  {
    "url": "assets/js/8.388099fd.js",
    "revision": "e38a14a14a8dd4c8bce10afd8a754ea6"
  },
  {
    "url": "assets/js/9.4f8b697c.js",
    "revision": "74616a3bc6b5d72a887db3fa452159eb"
  },
  {
    "url": "assets/js/app.decf7f80.js",
    "revision": "cd8f0ac2cd24194b59cb425485d7bff1"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "baidu_verify_code-VMBvl258ky.html",
    "revision": "b42daf88c71e518e92c5643209ecb7e6"
  },
  {
    "url": "baidu_verify_code-ZR2H2jk6is.html",
    "revision": "8712b5551d2378f9f35c8a035a2529e8"
  },
  {
    "url": "blogs/contactCards/2022世界5g大会交换过来的名片集.html",
    "revision": "76cbaffff995def573e08e0c779a697a"
  },
  {
    "url": "blogs/education/英语周报听力强化训练音频.html",
    "revision": "8edc344281f2a6318b840619eeb39d9b"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "ddb031fee480c66dbcc0670241d94a0a"
  },
  {
    "url": "blogs/essay/准备参加叶圣陶征文的短文.html",
    "revision": "422b70afdf8e8955ef79d2c3a4dfe340"
  },
  {
    "url": "blogs/games/Rizline试玩感触.html",
    "revision": "01c063f77022b032378402693c486325"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "4ed2bbcdd3ccee35afd7bae123cc73c3"
  },
  {
    "url": "blogs/other/疫情从严防到突然放开的小日记.html",
    "revision": "3f05bc3959e6861dc1da054a496070f2"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "ffd01e05044b1e63a32cd00e78cf76b9"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "46160ce98eb01b74dba36c6447a244a5"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "a4a8bf8742f2e6c6a9d975f25611f8bf"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "e15cfa1f492a555ac618abbd5a442f0c"
  },
  {
    "url": "blogs/tec/数学建模活动的经历.html",
    "revision": "9be610f0d58a0e2713d247cff60f9f5b"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "85ca136c92e403d823ea42d019a43595"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "4272f29a3228797dff6692441d9ca8ee"
  },
  {
    "url": "categories/index.html",
    "revision": "3152d046ca7341a661158eae4ed57d2d"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "7e07a29561d3bfbc1d0c7012d5a10527"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "dc2a2996273feea02c75b97fd6a614c9"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "1c343cb7fdf06d8ab6138819c0511eda"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "8b8f5fe9f906606bd7e7589211b5cd8e"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "e3d43cc5cb4de744f29a0616246b6efd"
  },
  {
    "url": "categories/音游/index.html",
    "revision": "95e0b4bf7d0acbfe74d97db9d68fccb1"
  },
  {
    "url": "FluentDesign/core.css",
    "revision": "5bd4a5bd0435090b9523f5ca0e95b15b"
  },
  {
    "url": "FluentDesign/icons.css",
    "revision": "5d04f4943b857e8132512ed8d83f42d8"
  },
  {
    "url": "FluentDesign/scripts.js",
    "revision": "1f268cb591f650481a434c8b533766ab"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "d1d583f11ca195421b719c163c233d4f"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "77f40c1165bdc4a74f7ce380181b99f9"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "77e3a7e94873490f822e03b82d00f713"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "073cd6a2afbc053c31e0b252aab6c043"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "f6dcc83d4216b35cb9d6020347fff677"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "2947c7d21d3865b8c08488bbb08eb84a"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "74f577a17c8838720ba70d069050d4aa"
  },
  {
    "url": "tag/html/index.html",
    "revision": "30a333342dea9f8109b538441d7bd89a"
  },
  {
    "url": "tag/index.html",
    "revision": "1b2b0b109f81bd32bf72f826caf43d39"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "b4656c961d2b0d4d1fdcdeb2488f0888"
  },
  {
    "url": "tag/LSTM/index.html",
    "revision": "64ded1836f7bee61f0828ce61189498a"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "999cee1db29a729aa9ef4077bf39afa7"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2622051349cf7f12254d75f785ebeaa3"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "687cb129d49f40eca6204958f315f1bc"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "7795d3eb1964a7f4ac922188dd6f5583"
  },
  {
    "url": "tag/Pigeon Games/index.html",
    "revision": "7f8f6be4cdb17651fe999d5cff9646a3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "5e7e8aad684766e8a040fce2c261b641"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "3955cc0d4a5d4d6083efb2b67aba7573"
  },
  {
    "url": "tag/rizline/index.html",
    "revision": "70f85ad7dfd0f1577e90dae5163bbbbf"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "72bdb4617b76c69fc62a6994d76c3b65"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "676e3dd0b1ce8e63b7372a2777217e93"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "63ad58b3a7245b5dd359b1b5122dee64"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "5c6115b52044352d3fd0562ce49ec360"
  },
  {
    "url": "tag/养生/index.html",
    "revision": "58e70b4f20d513248d7d19e84506b4ac"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "12f3387b97b97b495758c9252fdd727e"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "0de83f45532fca9efa358c8185ab9add"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "86a27f1c043ccfb8e4df17ad55b367a2"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "9d0e8bc0ea90cdb00530185d1d58518b"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "d5c14b2f2b5024fae58c1aee994f2ef1"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "fcd5d7808182a61cb44edc94596cacf6"
  },
  {
    "url": "tag/文章/index.html",
    "revision": "bce505b7995d716dce8107b21cbf2b5a"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "8c00dca7b257438f56c944e8f320fbd6"
  },
  {
    "url": "tag/疫情/index.html",
    "revision": "4851f95b99767e3af5a0b071837698dd"
  },
  {
    "url": "tag/神经网络/index.html",
    "revision": "8db25e4f3b5045ce474c2b650fc0e244"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "86eb6f50d05622e8004f82c7f2b9bbd5"
  },
  {
    "url": "tag/穴位/index.html",
    "revision": "36d468c29c49939f9457e175e424d5d3"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "0db13761f18dc845dcd03e353066e6d4"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "1000d54fb31baf10fb10fa187ea4d890"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "45551d9967681fa11aa24311696c0d3b"
  },
  {
    "url": "tag/英语周报/index.html",
    "revision": "6fe95c54f11da19d6b810cf6cc7e84f3"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "d0fe62d86b9a93999c3c56d711efe8c6"
  },
  {
    "url": "tag/音游/index.html",
    "revision": "abca87d263925da39b669d8ed2851e3a"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "299c7144ce7242b52ed278143c9ea99d"
  },
  {
    "url": "tag/鸽游/index.html",
    "revision": "e25ece8bbea5aeed1e2fb0d2db4ed641"
  },
  {
    "url": "test.html",
    "revision": "fbbaf38b7fca8536922518918faa1fd8"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c716e90cdcd8bd3212e3e90c330368b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
