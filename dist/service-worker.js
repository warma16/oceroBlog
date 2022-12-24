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
    "revision": "6499f83539e249694d9d761f1c562023"
  },
  {
    "url": "about/index.html",
    "revision": "521e3dc7f9206a092c54c35c86d99335"
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
    "url": "assets/js/14.e855586e.js",
    "revision": "ef8f85d56e195a8afcf250bc2befdc6d"
  },
  {
    "url": "assets/js/15.8f1eb780.js",
    "revision": "f21c1204f1e3722cb58457f4560e36c6"
  },
  {
    "url": "assets/js/16.b4cfc61b.js",
    "revision": "9329abe013996bcd423b8ba850063855"
  },
  {
    "url": "assets/js/17.a8893f9d.js",
    "revision": "1effd82bc560677d6ef5e6c0f512c031"
  },
  {
    "url": "assets/js/18.e3186b72.js",
    "revision": "71186f46759103238639dcf00182f0f4"
  },
  {
    "url": "assets/js/19.76318876.js",
    "revision": "d535dc32114a2eeb54a796d78e80d6c1"
  },
  {
    "url": "assets/js/20.a56968e9.js",
    "revision": "934bedf6eb648149a4c6707e1dc455ce"
  },
  {
    "url": "assets/js/21.bf8db4d6.js",
    "revision": "15eb91ecdae73bec7cdaa179554e5783"
  },
  {
    "url": "assets/js/22.b13033c1.js",
    "revision": "ee818b70d8604cb3fff561a44d54c2ef"
  },
  {
    "url": "assets/js/23.18f44ad7.js",
    "revision": "ab87236b13d706ad55ce33d877519073"
  },
  {
    "url": "assets/js/24.2cfac902.js",
    "revision": "c0323524c9caea0931bbad939ee1ebe7"
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
    "url": "assets/js/app.43d25606.js",
    "revision": "69c9889c7cdd888b1a03d6cae733d0da"
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
    "revision": "c8ca5ba96c27de7276578daf753f4277"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "884f086e4a28fc786515fb907035979a"
  },
  {
    "url": "blogs/education/英语周报听力强化训练音频.html",
    "revision": "e2e68a3a6bc448abd31846a4f8f06916"
  },
  {
    "url": "blogs/games/Rizline试玩感触.html",
    "revision": "91fccbd9b7d228de0f6eff0de683934f"
  },
  {
    "url": "blogs/other/疫情从严防到突然放开的小日记.html",
    "revision": "cbcd528b903af928dcb2ca30e1e71c31"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "f3cc7ee38e06124b6ae1d25362080dda"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "b634cdafc4e117fec0afc2fc80ccbf92"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "75a9cbab1ee3a48d18270b9b01bb101e"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "c68069600638b5e5f076cac083a8d14c"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "9a35771acc5ef3e8c6845f03d0d94f4d"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "d46d9535c29e24da3bf16025e0c64e43"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "1886948ab423be0f6be3265f54d3a96d"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "351d6ce66a269fd5a4d23ca3cbb6987a"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "6040dba8a0fc9527b86dd8e78dccf44b"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "6b12dde49297a99e21b138c373f256af"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "8d4c452dd4bf590485e16a4efec02d60"
  },
  {
    "url": "categories/音游/index.html",
    "revision": "b6927764735b4d1d3edcba63e6372412"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "58605919bc7b17e779aa0c6eda665aae"
  },
  {
    "url": "categories/index.html",
    "revision": "7aee231995bdec554ad55bfdf61ff52d"
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
    "revision": "dbfee8046181c6fb9005233e5d37b138"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "8bab4b742b7dc9826591979ddf6354cd"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "60dd46148954dc78eba723c9d0be4b50"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "fcaf8662647738a3a518d2e1baecc3fb"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "dddb683336b99a73fc77c760e0e68ec2"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "bbe20c5c89878e5b3ce27dfb1485ef6d"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "4aa68528e38865bc1cd5033315321dd0"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "5d7804c692a8a325b11432a103add1ef"
  },
  {
    "url": "tag/鸽游/index.html",
    "revision": "5c15786fb87a3c80c89641cc129b60f3"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "ef369113cfb1e0919f77c3fd481aefca"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "3fc8dee903b190a25d95f2a79679a8e5"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "36af00aceab1a987f9261f7eea0460c0"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "4800a39531083269f1bbede5ae939b0f"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "41dbeb691c1ce83eeb61fc56381d3e3b"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "9e9a3300384c9488890286f1dfeb72e1"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "8777e2507c9f7d34b3117c8ea352b7be"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "d1d65d5fcb47bf4fee4a79a73c042c3e"
  },
  {
    "url": "tag/穴位/index.html",
    "revision": "8fbb794c5f3771362c70a102e74e70ab"
  },
  {
    "url": "tag/养生/index.html",
    "revision": "12bcfa62a0f300203734c226997b68f6"
  },
  {
    "url": "tag/疫情/index.html",
    "revision": "535c106ff680aadd1f7377526fac98f4"
  },
  {
    "url": "tag/音游/index.html",
    "revision": "3e47a052111bfa1fc93ccc9b331b65be"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "9d34cb7d8c2b88d5559d58d10880a8ae"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "8dd1af0e2c51cf393757c107b7627001"
  },
  {
    "url": "tag/英语周报/index.html",
    "revision": "c78745cf725d6d52ddcb048a4f802d5c"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "aa0b2b16fa5e2f5b9e75072b653fa5d3"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "427669f6c359bb5cef0262950fa2eaca"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b75a9da75b9226f05b093365f35f986b"
  },
  {
    "url": "tag/index.html",
    "revision": "b27ce53a3d2b7fec46bbf9d9e7fba005"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "ba484fe6e0b26e5681c5561a14feaa61"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "a0f9d0783d3685ee9cc95b80d3a3caac"
  },
  {
    "url": "tag/node/index.html",
    "revision": "51cd6cf0937002aeee13ae0eae3f9a8f"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "8371a338bbfc8196a315e63efb05fa12"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "8abaee9b34562ef12ca688b83d6a8a34"
  },
  {
    "url": "tag/Pigeon Games/index.html",
    "revision": "f778c53c3b619289624e3d297740100f"
  },
  {
    "url": "tag/python/index.html",
    "revision": "34ce6031001ff280e44f8b108b8a7d3e"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "4e1762048e3e89657f5a40838911af10"
  },
  {
    "url": "tag/rizline/index.html",
    "revision": "77e4a494060bd04d7aa82685d44d74fe"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "817ae13e15a9e04e4d28444e8a5933fd"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "a95a73defd033c69a6f896f681e49d2c"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "d0f73f979d7e69639cdc91793b408abb"
  },
  {
    "url": "timeline/index.html",
    "revision": "de8d6fda3c88696135c7e3d39a491cf1"
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
