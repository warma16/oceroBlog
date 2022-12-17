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
    "revision": "c764c509fde4cd91472bac1a9485b208"
  },
  {
    "url": "about/index.html",
    "revision": "4d1e1291564344cf8f550f0e6472b9e3"
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
    "url": "assets/js/14.2cb64f79.js",
    "revision": "5738596bc67239dc49f215b04960d21d"
  },
  {
    "url": "assets/js/15.9be230f2.js",
    "revision": "95bce832382e171953fc3288d3bda513"
  },
  {
    "url": "assets/js/16.696c1675.js",
    "revision": "05fbb37fe5a3578c8bdfba16fde04008"
  },
  {
    "url": "assets/js/17.6842e171.js",
    "revision": "e5264cfea50582ef33c3342a2a43a7d5"
  },
  {
    "url": "assets/js/18.95ee54ae.js",
    "revision": "c28ad6a80b91547e924039e005220453"
  },
  {
    "url": "assets/js/19.d2f373c4.js",
    "revision": "72067fd1b3a60da4a600b6352cf185c6"
  },
  {
    "url": "assets/js/20.7c47c817.js",
    "revision": "e57e1756043303fbced8e3b5861e23cd"
  },
  {
    "url": "assets/js/21.0e09aed7.js",
    "revision": "9b0ef7dd3edb397e393e4d65ef050d82"
  },
  {
    "url": "assets/js/22.87440d8c.js",
    "revision": "b81657d1a10ded3dac6913a52db6bbcf"
  },
  {
    "url": "assets/js/23.12e21131.js",
    "revision": "c2bcbe112aebc393c6ed728598ae31c5"
  },
  {
    "url": "assets/js/24.cfdc2302.js",
    "revision": "c457bc39e16690e4cb4a760f01a9c6fd"
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
    "url": "assets/js/app.bfa63750.js",
    "revision": "f9db3abcc9a6d73c0d21d0acdf37d70d"
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
    "revision": "0c797c6a6b6d2011ba8d6423663dd9d8"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "5a3f03f737d187e4f0ea477328202af5"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "d9dd271870878c74654923ae2238ea6c"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "7efea0792ff8dd64eee89401aa4b35ee"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "2258f6dcb40c58d796792607b735051d"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "8f3f8d1524122158aa9786f44aaa3c87"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "f6b5d036d02c14891ada814269ce0f5b"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "439eb904c202e7927ec6e27a62ba0948"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "e8375832978021fd63a593224bde1c3b"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "0273336fd16764d088817dcd4ac0d617"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "e5c04fea52a17160b20c7c8ae7fa692f"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "bca4291c48023dacdd3ec2a77a673da1"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "0fefa24fc56f9392abc23ec0b7b568d1"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "faa8f79f7ff6b70f36d9ad637317aaab"
  },
  {
    "url": "categories/index.html",
    "revision": "04ce1d615db25daf9d0c0a7dd778bdf6"
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
    "revision": "8cca864c313cecc1fb507b13fa916423"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "799e0b22590d00e3d3c478b679e99510"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "6e8fb7ea9ec23e39431f97a8eacd84f4"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "c5559d3051632b15a40d8ad31d528645"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "b4a8c043b34775359463fb6872f262fe"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "ab04068a0d5d77dc82add1999f89f33e"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "cbb0c3aa5b73e059b4bf4039a09d471c"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "1a631e834bc97c7af6922d1b383cccfc"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "6deaabe248cba0d7c31aa3a66cc47183"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "384c32245b4936a4ec22d5f5a27e86b9"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "f7dae3722d0bb4a0409fe383cb484836"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "83007ae57a718f3a936cf7831ea0637d"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "d803d6cd945d3d4cafd43596e6278764"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "4803b25ccb9e11c68b6b4c9b38810c97"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "2dea4f27bda4e73755561229c0f7ebf3"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "a7a3d0946d58e4738424838242cc0ecf"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "a1e0eda123c2815d56d8b4859ce875f2"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "00f148b9ab3505a878965cadc142312c"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "a56b187f889ace98214d54c9c73273de"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "2ad5048a0266878e0e2d3bba15c3b7f9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c180686266335ed30ffeed4d160493aa"
  },
  {
    "url": "tag/index.html",
    "revision": "a471a18eee8da045f0221e2b3e3965e4"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "b6487d217289705c8f5bece8782e0f35"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "08ccd02622c1084d4fc49f965eedb74a"
  },
  {
    "url": "tag/node/index.html",
    "revision": "7528e048515fac9b0be90dfe46695221"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "49aa5b4cba57286bfc51ea88a31efbe9"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "ae6b988dd41a158b74215f72574ac5a3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "592e0d5c3f7a786273b02f761cd9044a"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "d2690449a4a2953de538581014e08716"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "dd37a5540b91a0bc79f2a740f5e9d093"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "592983331f4e8d67dc3faa9e8cfc6d6c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "333ccf4d3b222edae69b131d1d854d44"
  },
  {
    "url": "timeline/index.html",
    "revision": "0eb58c139a639c401dbfdc45b97d3c15"
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
