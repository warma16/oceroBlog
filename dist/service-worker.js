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
    "revision": "6315d372aae10db03561e325fad62da6"
  },
  {
    "url": "about/index.html",
    "revision": "8719586e4e94be57e24e812ed0ad5176"
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
    "url": "assets/js/14.308b764c.js",
    "revision": "e7dbe6c26fe867e8945f67f6bbc4cc44"
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
    "url": "assets/js/17.6842e171.js",
    "revision": "e5264cfea50582ef33c3342a2a43a7d5"
  },
  {
    "url": "assets/js/18.08677cb2.js",
    "revision": "0d16ce541cdae2c9f27591150017f053"
  },
  {
    "url": "assets/js/19.c7dde687.js",
    "revision": "2dcdf59561abd073d0aa08e5d7e3c4a0"
  },
  {
    "url": "assets/js/20.5fb859a7.js",
    "revision": "6303e0629bfeb3fc2ad44999afe713bb"
  },
  {
    "url": "assets/js/21.0e09aed7.js",
    "revision": "9b0ef7dd3edb397e393e4d65ef050d82"
  },
  {
    "url": "assets/js/22.ab4e43e7.js",
    "revision": "282b50a07fc6c3431b17033f21ff74a2"
  },
  {
    "url": "assets/js/23.fa9a6299.js",
    "revision": "a1eb91ea039a7c8c26a0807304645a3b"
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
    "url": "assets/js/app.c4e37ada.js",
    "revision": "b1f19de557fc35ecc351cd93742bcd8d"
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
    "revision": "3b79b4c2f49b58ae061bcce768e6e9fe"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "ce3778a1697de03ab46a8568eb38a4f2"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "96ab70be266ee319922492594d7e6d59"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "68d1a732e9b1c617482c20fee65a7c82"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "1dde7e33c58159d208c93060e589ea9f"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "6ce6137b6bcb991b3b14fb9e5429f251"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "ff3aff16c83a10897537279697b9cdaa"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "195e1a1533533adc2c5d25f1aae844d7"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "5616f9ebf432e489620f15c1af695346"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "dae92351373e1a8b460f6bbba729b882"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "4d31d57e60c02e570254d0bbf00ce449"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "c605f3416e4ef44519ad9e3a6148c830"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "2df607dec1d936817f58f6e457906de4"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "f4ab2b3cb18734335f76ac72b513cab7"
  },
  {
    "url": "categories/index.html",
    "revision": "866b84b7b12031480c3150512dcf7c95"
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
    "revision": "44a51150f138fc48aa9fea55044aed31"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "591d9bc4af948a69f1287c9239769701"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "8799150cea3f2a634cf97706fa8827ca"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "c5e40122115b2e2afcf57b830932fd6d"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "763f7646e151c00331f1f3c2e36440ac"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "6f283f17e5fdd06dce8b7c4166c45f84"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "8878fafdf6126878aca4f801e0f022b5"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "9680ba82044b3239a2b276c13e82c1f8"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "7e65c1d2fbb8ed4cea9c0994cb004ef8"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "a55af712b0f64aa1dba8996aee97ed7e"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "0f2b3fb197f58feb250862bb757a034f"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "2cde1b960b1d7457c505b31e895f71ad"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "5d3e100e047ab24705e3484d0a543277"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "4b0a87973997eb129a1c76005f7dd412"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "2d9bb52d5c2c916c7323f6f2f33f55c0"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "636a8bda87e31b3aa60473d8e514c4d9"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "00f6190b4ef1f29498ab26265bddacc5"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "b966d20e68abaf7f1759b8ccc72907f1"
  },
  {
    "url": "tag/展览/index.html",
    "revision": "2db826091690df30c25f0b887cce900e"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "9e3b57758fbbbd328a3c35b0f13f95ae"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "2a2e5ad5e5ae0c1ae7606a8dc7c3c606"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c3f0c9d70a7c859b15393742d470b3c0"
  },
  {
    "url": "tag/index.html",
    "revision": "94d617623e5e1e8fbbbecfecc1b2f121"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "84df1d60be978e27881e0b866bb7f411"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "87c39e06eec8d8e86feb05ed15b451a8"
  },
  {
    "url": "tag/node/index.html",
    "revision": "a42cabe3f3f3ed46eefd21fb3cd0de0a"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "f08a496a3366a54b0dcd66afe69f4e50"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "4b63a648dbe9b1ac88f16bc070600c41"
  },
  {
    "url": "tag/python/index.html",
    "revision": "25a4678759a22f7c66c524fe08db6c8d"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "096143b4081a2fc8856ccd950b8514b8"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "ded4c617eff8f23120ba6a299437baa2"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "de969c2bb970b5b31144bd4704d87263"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "ba00e2476a1c8bce38036d1db109fe16"
  },
  {
    "url": "timeline/index.html",
    "revision": "9493191c863dda7dfbd4bdfd722530fb"
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
