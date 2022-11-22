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
    "revision": "bae74b4e9a9814286b6f5d910e6579e6"
  },
  {
    "url": "about/index.html",
    "revision": "dfde629229600c89f182872905b4080a"
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
    "url": "assets/js/14.9924d73a.js",
    "revision": "1795084749bd7407654e333c454ad687"
  },
  {
    "url": "assets/js/15.9be230f2.js",
    "revision": "95bce832382e171953fc3288d3bda513"
  },
  {
    "url": "assets/js/16.64a0cd15.js",
    "revision": "432ee78504747e704a8ad00e130fb39b"
  },
  {
    "url": "assets/js/17.2812c784.js",
    "revision": "0171e52930ab723306eb62ecf80aa4fc"
  },
  {
    "url": "assets/js/18.25465617.js",
    "revision": "44794d4b0fc54f10e1fb40e35338780e"
  },
  {
    "url": "assets/js/19.c7dde687.js",
    "revision": "2dcdf59561abd073d0aa08e5d7e3c4a0"
  },
  {
    "url": "assets/js/20.7c47c817.js",
    "revision": "e57e1756043303fbced8e3b5861e23cd"
  },
  {
    "url": "assets/js/21.86bf5128.js",
    "revision": "42f8bf9f6ba24972449f0d5864c1035d"
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
    "url": "assets/js/app.13145a96.js",
    "revision": "f3c89a3edc77c2ad5cc0e1e05b4a60bc"
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
    "revision": "7dc35108bd8d6a7b90951199a2d21c7d"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "5024fa45a0971c0f81925c4a6a32441c"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "7602fce39c58da9702316e5e415300c1"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "9a4cdcb1354082d0feec8569902c8873"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "7b1e6d1033392704016e9847203b9019"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "b2004a49bdca0419f45c4599e95e4476"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "96f1daf0fb4c6e33f4e66b7b7bad31c7"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "3678b5a4a3889a216e4a349026351a15"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "6fc63a1d951146085223368c45952bf2"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "660c36481d994de0c15e98b3d8ce4b56"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "35f0fc9a3ccc71b2c8ab6d920ae5e029"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "49929fbd8b2c55d1d329966486fbb387"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "a13b155fd1c648cbf647871adba1e160"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "16a0de5e1b0ff0a155876ddce4841893"
  },
  {
    "url": "categories/index.html",
    "revision": "85dcc64a0369945a29fba35b0a478704"
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
    "revision": "2758da25dd033c2a8bdade35bbc223e3"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "954cecf342ce81a00bbe66b00cd66cd8"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "7276dcc22ffb279c51b7d7917a2b7b1f"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "b5d30c2972ef760b4441be0fb0f58929"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "67fc083a65ed3a78f26bbc30077195e5"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "d66cd3a8884be3c3d295eb954cd495b8"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "f55a630e697e1698aff0625686aa8930"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "d9836d8e4409f65e50095c96183e7066"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "bdc9164cd51b7e8bcc3da72396dfa3f3"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "a983a056492eb4c5db10312be8f50287"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "0de82c9a77fe0dc5784ef0888162a57b"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "d1aa2e5f2be9e7bdc10ea4eeede9b457"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "3fea3ae4e804fb69ab705dd6ab2d84fb"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "f1a00ec2fd84ff04b00a298e025c09d9"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "2e83afe9c738a6254eacdf7272f73b93"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "83377582ffac7f635d14abda43677067"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "28124cebe117280a88b34d386ca3f41c"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "ab16b247e15996b878b2053ec1899bd5"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "ebdb3cf39812bfc4d37e2a46baacc2c6"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "1e6daec8e917f20164584274e68add36"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0e0c8e7ac21dd0d24bcb4894373fea0c"
  },
  {
    "url": "tag/index.html",
    "revision": "d5fd2bb2ce479d67d7f4cae4d81406c1"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "fec9acfeabaf11b25d23676f14cd1f04"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "249d215ff9a514ef9e761962cde97c8f"
  },
  {
    "url": "tag/node/index.html",
    "revision": "4794591203b3128c560eae7c1918462f"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "bdef4e1543db6039fa8a361aa157021a"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "d128fd54dc47cb9a3aa0793ce1ca6706"
  },
  {
    "url": "tag/python/index.html",
    "revision": "105913acaab3e0ab3735fa34193f1d83"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "14e4eddb79b0e9795df9602e050503da"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "e3f94a68b990109559833a09f7cb2dce"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "f373f3f7e840f319cc91c22241b53b20"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "83dbb2c7a9c2d8afc92ecc5bee5dd976"
  },
  {
    "url": "timeline/index.html",
    "revision": "c353b965511d854ed7029e271ccdc63b"
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
