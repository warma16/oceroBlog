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
    "revision": "0c8dcc83d9a8bd64952506351ab13415"
  },
  {
    "url": "about/index.html",
    "revision": "a4f2006750c073e16bd2ebc78710edf6"
  },
  {
    "url": "assets/css/0.styles.404a47e1.css",
    "revision": "b1d18d3c51d7fbbc04e1a63a5edac692"
  },
  {
    "url": "assets/js/1.cfddeeae.js",
    "revision": "5ecabe71bda333245f01827df467e802"
  },
  {
    "url": "assets/js/10.3a3cab7d.js",
    "revision": "64ce4d0864bfd2afc9de00007496ae1d"
  },
  {
    "url": "assets/js/11.695756da.js",
    "revision": "dd22cf653dfb29293156bf2b4b1d0bd6"
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
    "url": "assets/js/16.6c4b2315.js",
    "revision": "6c295b5518899963ec334ebb24436d2f"
  },
  {
    "url": "assets/js/17.2812c784.js",
    "revision": "0171e52930ab723306eb62ecf80aa4fc"
  },
  {
    "url": "assets/js/18.8fd40b61.js",
    "revision": "0d151f45cf8b6fa78f2f8914cdf16424"
  },
  {
    "url": "assets/js/19.c7dde687.js",
    "revision": "2dcdf59561abd073d0aa08e5d7e3c4a0"
  },
  {
    "url": "assets/js/20.e1ce6749.js",
    "revision": "ce6d10e2190e4740f3882e2901b24514"
  },
  {
    "url": "assets/js/21.86bf5128.js",
    "revision": "42f8bf9f6ba24972449f0d5864c1035d"
  },
  {
    "url": "assets/js/22.79c77b6d.js",
    "revision": "c79a4b593a291adbea1dc104744e6a95"
  },
  {
    "url": "assets/js/23.fba75328.js",
    "revision": "925d9b6881d882f3c05b2d46015dcc51"
  },
  {
    "url": "assets/js/24.cfdc2302.js",
    "revision": "c457bc39e16690e4cb4a760f01a9c6fd"
  },
  {
    "url": "assets/js/3.b6965344.js",
    "revision": "0294fdc0164e90a943a45d83eced1aec"
  },
  {
    "url": "assets/js/4.07e491b1.js",
    "revision": "14357904fc4e3e8dd95954477f52145c"
  },
  {
    "url": "assets/js/5.23ac9039.js",
    "revision": "376a39462dbfdb645c4be0dba93b7b27"
  },
  {
    "url": "assets/js/6.8f54c95b.js",
    "revision": "90c8d2a6b6a69cb427753b8f77dde0de"
  },
  {
    "url": "assets/js/7.1b6ae21f.js",
    "revision": "967604e9923ccc5e837f6e424bd49c93"
  },
  {
    "url": "assets/js/8.d0e3c0a4.js",
    "revision": "4c5e8f8b2508fdbde932b3a8ed748f4d"
  },
  {
    "url": "assets/js/9.5e402af1.js",
    "revision": "ea0f40eff73d3a63aa773c16e31a24e1"
  },
  {
    "url": "assets/js/app.79fc8df4.js",
    "revision": "26e7410131019f349391125aa6323643"
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
    "revision": "e201674316c0ab9675fe3356f310d832"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "740264b5ecea00844266ca2f96272776"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "16cfcbb3edd65aac3db6d2eadc4a1d8e"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "66fb308df3c44b0017bb04dee5c2efd0"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "16e237685716b5a94d34509c08d518f6"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "3f879642b06ad522426a6458131a6200"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "3a744f90d625727dfeaa85b727e9fd58"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "90313f5e8c99fc2de27ba9dc31beb15e"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "54b5a98531d8f52215cd3af47cdaf9a5"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "63bc418b71efa3284c578956a0f9c45a"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "9c1c36512ae3aa59a2e36e86718722f7"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "d1a7d55512a22fbd8774ea3b00b0a6f2"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "14fb82e71ffda6e781c39a6b687ba526"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "25303dc5b6432c81740e3a386122e37a"
  },
  {
    "url": "categories/index.html",
    "revision": "f92e5479070ff1a4611a75660e3e6601"
  },
  {
    "url": "FluentDesign/core.css",
    "revision": "1bf4c35175ad889e630f8333f6bd133a"
  },
  {
    "url": "FluentDesign/icons.css",
    "revision": "7bfa3051e252f1270cdb2e7e7538819d"
  },
  {
    "url": "FluentDesign/scripts.js",
    "revision": "9060782164e87a8c2b664748b3e44f5e"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "260dda30ead21a2a53e7f39571475ad6"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "3df4b3ff00b83ae9e9ff255d24c4fb31"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "34a595758b7bbe3d098b071c0dfef0d9"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "311d1a2c112b88d7237ca6437e165a42"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "63dd249ea7392244228ff67b884af5db"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "3f8fa751a08530d1d52ec1cb234f8b7b"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "73f05c2e3046c1b4f5ce5f1f1f01b102"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "eec181581ca02ceb9476fe5a6a8ce69e"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "56247e76fbcf5666880ef018e581e969"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "fe2c3951d94f3e6b5e78f838d4d33dcc"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "5ebbd32bab006c32237786c35a4714d4"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "cd91693ace2617bfbc1be5cff02ab831"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "2e977211b52d7fcb28a11bea3b2a597e"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "911289e3b17bcc6beb9c4c6c0e62f545"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "bd3e84646e467cad0862ec6b3df9b343"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "88b11af20f37b39ff80e97ed594e5080"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "2a24dbef60a3053f617308db024082bb"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "8ae6faf5e43917084efbb8b01c5b6ee7"
  },
  {
    "url": "tag/展览/index.html",
    "revision": "533a2541d661a6aa5e90ddc59653ea4e"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "298cf237537a9a8d97dee55891fda750"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "75a49d73e1a5fefce7a36eec61250e5f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a9856f70a81303d317fb07fae572d7fb"
  },
  {
    "url": "tag/index.html",
    "revision": "481b9007e7e51285b21866ad8422e6ce"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "a90ee3f44a7683d58315504a2fd13b3e"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "e8fbad666976a1b8c912c13f1a8d3aba"
  },
  {
    "url": "tag/node/index.html",
    "revision": "132aa4e826a6a3bdffde193807f546a1"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "025a351a96dbc6dc4bf26fa994c94b2c"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "1fc4c8973a8c00f46c441d915891131d"
  },
  {
    "url": "tag/python/index.html",
    "revision": "96f2bc765720381e020412846f56dee6"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "9644cd8736a073b0844f933a80f14f4b"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "0dc9dedb898760f462e88827ebd8801d"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "33bada81f51b89388ec12bd7740d72f4"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "6be72ec0108afeff2be24a29000e8e47"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a3d6240148d03235f292f5399e8299d"
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
