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
    "revision": "2db3487ff328a6bd8431b41cb2fcefe8"
  },
  {
    "url": "about/index.html",
    "revision": "031a232add2539351dc5af8e37358190"
  },
  {
    "url": "assets/css/0.styles.c77e2ca6.css",
    "revision": "b7a64c5572c026ff5d5d0b5e617eef23"
  },
  {
    "url": "assets/js/1.51bc72e1.js",
    "revision": "169f2282d35e1e7ab94b815933b3b008"
  },
  {
    "url": "assets/js/10.3a3cab7d.js",
    "revision": "64ce4d0864bfd2afc9de00007496ae1d"
  },
  {
    "url": "assets/js/11.60f1847e.js",
    "revision": "48ba2d7209f0707825ca00a4aa8a4584"
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
    "url": "assets/js/18.34446842.js",
    "revision": "51cc9f8380d6d2affc01aa5119b7461d"
  },
  {
    "url": "assets/js/19.857a3d0f.js",
    "revision": "181667c78cdbc701d342410dca029ded"
  },
  {
    "url": "assets/js/20.93400c35.js",
    "revision": "c4c3f08c63438078ca38a531bf307256"
  },
  {
    "url": "assets/js/21.34742aa2.js",
    "revision": "11affdaf1fdde1dd0213e9c95ff3a8ee"
  },
  {
    "url": "assets/js/22.c12762f7.js",
    "revision": "7b32a5ec5bad46463d2d40b0b4fca8ee"
  },
  {
    "url": "assets/js/23.18f44ad7.js",
    "revision": "ab87236b13d706ad55ce33d877519073"
  },
  {
    "url": "assets/js/24.9cdae7a6.js",
    "revision": "26912bc79dd1d15dfb8919940183cd58"
  },
  {
    "url": "assets/js/25.ac30e38d.js",
    "revision": "13e270fe3e7e591bbd02601988542527"
  },
  {
    "url": "assets/js/26.9809d007.js",
    "revision": "f568f186b87b61e1ae103f5feb7442a7"
  },
  {
    "url": "assets/js/27.2bebf7d0.js",
    "revision": "f2f22bfb2ed19ea974f85291fbf87ca7"
  },
  {
    "url": "assets/js/3.956cd083.js",
    "revision": "e323f8c7a00468b38a83237a6704dff3"
  },
  {
    "url": "assets/js/4.39a10cef.js",
    "revision": "59c5485d7eb220ddeaef7aa404f72542"
  },
  {
    "url": "assets/js/5.fc87dc1d.js",
    "revision": "e275f8f52bcd0ec8eb9c8f4ce4c78302"
  },
  {
    "url": "assets/js/6.dbbbe3f8.js",
    "revision": "a1792983a311bf8593e05ee50eabfaf8"
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
    "url": "assets/js/app.7f7521fe.js",
    "revision": "4e2b91b45a59aa348d886bc72f903f91"
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
    "revision": "e161e65b787ab188c654461a6658a9da"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "a230e25c68cafa9bfe57a4b028e3d7ad"
  },
  {
    "url": "blogs/education/英语周报听力强化训练音频.html",
    "revision": "ce3988e4e66872801b1bee3104d80e4b"
  },
  {
    "url": "blogs/games/Rizline试玩感触.html",
    "revision": "109609d4f325ee2d8401df97a436b830"
  },
  {
    "url": "blogs/other/疫情从严防到突然放开的小日记.html",
    "revision": "ee5b0605a2b12bb3c8f36f60a4331ca1"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "f6d62da2b8a13b06459b73457211d665"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "ec44829470c909c02656d2e1ac936022"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "21a0dbfe45e107bee87407aebc02c620"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "da3634ff89c841acade6f3d6e648eec8"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "a1929e4d4f9d568f165935796d6209bc"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "82cdad2cd47e70906688c8e549699e2b"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "0066f28eb8f57d76fed8f85fea24382d"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "051d797f56788eea8e509a38e5e9e919"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "5ab9896a28dcb1df01e3eac7992f652b"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "3229171f9b32a6559f08a1ce8f07965e"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "2aed4cc030e61482d66621169b374b5e"
  },
  {
    "url": "categories/音游/index.html",
    "revision": "0b622dc72b939e34e2f819cd62786c8d"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "4a5ab6877a43c56d6302dd2980eee86e"
  },
  {
    "url": "categories/index.html",
    "revision": "274d59d3be71f9ea64aa482b70dba366"
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
    "revision": "9352f7fec9427c76e33005ab5f16b068"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "b974301b7ff272c89f799630a9771a10"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "0cce3a45df477c7b41ffc556c06e284d"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "24b28d69fe19b39170fbcfce0ea94f79"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "ff433d735e20f068242c10ff26e7636c"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "41380e3d09fdeca82f4308ce7fda2763"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "23c2979befbdc48dc3b37b887bf85f80"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "f4958d322ab5424578c6448e940baed8"
  },
  {
    "url": "tag/鸽游/index.html",
    "revision": "dfd7cbf5f6d3e40503ecfd93bc244cb3"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "92e2a4a711fe13abe4a5360e8f4cc4d3"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "fc386b72cf2ad2a8e6fea166b47cefea"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "0cc3ef7b3d93bf8e74bc9c276901e96b"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "83b3490e636267f70416c281b756aaab"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "daaa5705780f79fa03eb720d44d3fa76"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "6f39a5f4a4e2978116241898fd76baca"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "394ae868cb6c96f5e018d4f421feae70"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "ee6b3511a9aae3b7a3e58b19de2c47c8"
  },
  {
    "url": "tag/穴位/index.html",
    "revision": "a9392949b5fab765ed9b01bfe5d73fa4"
  },
  {
    "url": "tag/养生/index.html",
    "revision": "4918a4bf5c7fbed6809f162fdde7ccec"
  },
  {
    "url": "tag/疫情/index.html",
    "revision": "4f38537fd17350d4357f40ff19dd46bd"
  },
  {
    "url": "tag/音游/index.html",
    "revision": "2590367495af89ee37f1571d3c811899"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "1154b62dc3fc12ec0c2d150e9e09ed21"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "2600ba3b6ba9c6f5a6cf2fd2484898a7"
  },
  {
    "url": "tag/英语周报/index.html",
    "revision": "bc4ff80d4458ee80d488d55007f56f6f"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "a1f1da03ea1063944dc6ac0b71153829"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "18da5211fd5e096d5c78529f987db40f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "33afb62156d3954c308334efe5429af1"
  },
  {
    "url": "tag/index.html",
    "revision": "e3c37396f88f8bc91d43001101331e34"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "48624aa4014b9136d42321df472b4c84"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "75f60029c1fe29dd93efa4e1b897f461"
  },
  {
    "url": "tag/node/index.html",
    "revision": "e37d084b5406b9861ae54024f95d4f23"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "f662d531c85ab77c51bf5a34eb1148dc"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "40ca12e627eb04b7e781505b3b10145a"
  },
  {
    "url": "tag/Pigeon Games/index.html",
    "revision": "495f755142afc873aa774b99a758a676"
  },
  {
    "url": "tag/python/index.html",
    "revision": "c71c4fc18104b09dc47c4794b4cd05e9"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "7341d8864ab04ca11027a193767839ab"
  },
  {
    "url": "tag/rizline/index.html",
    "revision": "c7efb997a6acfdbcdd28bc058e2ff11c"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "f98a01171e0de27bdca21fc19644437e"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "23cd8c0d4603fce725d59ce5b0ce7b50"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c1864fa92fcd41d498f5043fc4fc6038"
  },
  {
    "url": "timeline/index.html",
    "revision": "e8c91fb41c1c0b607b1ac20973b247af"
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
