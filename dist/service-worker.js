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
    "revision": "ebb2fe5f431b553bb82f3063de100236"
  },
  {
    "url": "about/index.html",
    "revision": "aae83e7065bbf18200c2c6b054fd181d"
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
    "url": "assets/js/11.2813e1ce.js",
    "revision": "959d2ac85f7b2b0ff53d974cd7fa53a0"
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
    "url": "assets/js/15.25fecd5e.js",
    "revision": "08e1a83752753cb1da0d699f039414bc"
  },
  {
    "url": "assets/js/16.8fdaee87.js",
    "revision": "1c06aef592cbbb7765d834b634f725b1"
  },
  {
    "url": "assets/js/17.fe0132aa.js",
    "revision": "3dddb21e44f911cabe76d6dfd7039c10"
  },
  {
    "url": "assets/js/18.31a42179.js",
    "revision": "8bd4c9dbe437011bf59fed64693f441c"
  },
  {
    "url": "assets/js/19.35d56343.js",
    "revision": "374bcf5102b2804c652b9e3c8c3b8bb8"
  },
  {
    "url": "assets/js/20.e9b9cf2f.js",
    "revision": "ab5dab6c3e6f88d360757def6cb595c9"
  },
  {
    "url": "assets/js/21.6542f2db.js",
    "revision": "ae581e313f4e9b27b4196f6437b397c8"
  },
  {
    "url": "assets/js/22.1d640c4b.js",
    "revision": "20b1568eea2b2e4aa3f64136994bfd25"
  },
  {
    "url": "assets/js/23.65487b59.js",
    "revision": "a6d37447255295927e50c0ac943638c9"
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
    "url": "assets/js/5.50d2cd4a.js",
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
    "url": "assets/js/app.7730d1ae.js",
    "revision": "ad007c1aa458a95bc7a13c1b54538c96"
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
    "revision": "9b0723112f6ba6dab251f71cd41ec172"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "531c2adbefc756dbeec7d5a567dc6a8a"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "70f704fe9cf81ec738badb3e75a3c0d0"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "77aa7e235639acb7e4a899f02df547f3"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "d5b53601910e95c3f58e40fb50001d51"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "bb052577b789cf309ce47d896da00db2"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "fbedd645e2276c79772b47d5ad1c6734"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "1216924eea7a6be289e74be776d03921"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "201c29d9234b11590263a9b6bdd6b446"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "d63f0853005dc6b20e72e51a7149f85a"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "608a62eb6f2df1c6e31d00d234cb1551"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "30f483d277902f878cd90d90dca210d3"
  },
  {
    "url": "categories/index.html",
    "revision": "0d8f22c48316a53c3484fc3a2650b12a"
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
    "revision": "6303561f6b41c604ac3738564efdea65"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "f6d0fb27d0920aed3c55ba4ba8adf517"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "4950ece9f3b1e23215b523e80ae3597b"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "0e17b9955c88281d363c021eff231758"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "b46852f9cc9e5d13f49420395e7ea8aa"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "fa4f211a8e3028d0dee2059a6ce25a2c"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "b5793cbacc30b605762b2c58e25bc0e9"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "6a6b732f8340d2714a3876f13332e90f"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "2a7ff2fbd6771a3c1b00fef414760a57"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "e828b2c7383c0bd0b3d52e63334df82e"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "382a22d745d95f821954ef461a2326d4"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "172eb2b3744487fd4147c225f07082d5"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "ee182dba67287e90ccadc49cad5c77cd"
  },
  {
    "url": "tag/展览/index.html",
    "revision": "2e9f9b5b40c219d123ed49bfe52e4353"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "c9f79b3c6743f2b5b230598cc87949cb"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "3d95e861fd56e770b7a71e57f416f51d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4041147bc44dd5d243ddb713e3b7ccbf"
  },
  {
    "url": "tag/index.html",
    "revision": "472ab1bc4aa1800bb88de630ae951a08"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "67f4ed6840cc721d1e12a4362df0f708"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "6177581abd2b5a2f6d3d5a9c7fc39a07"
  },
  {
    "url": "tag/node/index.html",
    "revision": "c382fb53793e8fe0a4bab6a90901a771"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "2dce083b1eeb820277a3c5bd041dbe7e"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "c5aa5ee9d702909e70749276e2ded1d7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "9fab2d0a1a85cadbc2d89c3a1bc53a57"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "e611391daa2b33a6edc2c388ef5b930c"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "40d2a33379bf547a9b0e720449b1ac73"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "cce1b11fcafc6c1561f5b45e0a35bad9"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "1ce6b0b44eede3ea826ace51625653d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "9bf61856f8cc4f09fbe1f3884255c607"
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
