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
    "revision": "282e2cf13af35d99f9dbc7371ceaae56"
  },
  {
    "url": "about/index.html",
    "revision": "2e7c23b60bc87782cb7e409fe67cbf0a"
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
    "url": "assets/js/16.8e4b5184.js",
    "revision": "e63567a428bd7a5503cc950d11169d79"
  },
  {
    "url": "assets/js/17.6842e171.js",
    "revision": "e5264cfea50582ef33c3342a2a43a7d5"
  },
  {
    "url": "assets/js/18.25465617.js",
    "revision": "44794d4b0fc54f10e1fb40e35338780e"
  },
  {
    "url": "assets/js/19.4e73ad51.js",
    "revision": "e5a142eb3fa0d6f70d6e5cd4c0da7809"
  },
  {
    "url": "assets/js/20.315057fc.js",
    "revision": "682d4431894106ec4b2a5161e1008d75"
  },
  {
    "url": "assets/js/21.83019c55.js",
    "revision": "49ffa09f235ccc6af8b7e7b96c5062de"
  },
  {
    "url": "assets/js/22.bf877a2f.js",
    "revision": "a1cdb8f1117c6e82338ed98cf7cbbdf6"
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
    "url": "assets/js/app.0f306a91.js",
    "revision": "51916f848db170f059cdcf6acaa294aa"
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
    "revision": "46b07add742791838ba43b144195709c"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "de3c2613ae811e8a47d622b22f0d342e"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "6b3cd40ffead94de90dfab446b07d9e3"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "a467733072001021765294e07452ac99"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "26d4b6426ccd9f3984bfd8adb9c29b61"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "f6fe3ff06693ef41dfadb0bf85e980a2"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "c73db653e71b52d013b5e62eef110793"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "720a9c1f2df626a89b04dcad14a120e4"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "90ad2ca27142e367ae1241fd94591a6c"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "0a870269928eee5a02d6709278cc5f38"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "419ecd86e013005ab992f275006048b0"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "92bb59d540e0e94799c5e80a60b8743c"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "f949b665b41e94f382f632274bb737f9"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "eadd293bd72846d82d6bda0a208b82ce"
  },
  {
    "url": "categories/index.html",
    "revision": "faba1c786f6e97700dd157d790083ffd"
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
    "revision": "dc435326a20d832f33caa316d6c50e5b"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "7e9cb325f0d71bd084c90d870b26d418"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "660fe36592b89291df0aac8b3575bcf0"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "156b78a0720e13255b4842c8336e3d58"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "ab0bd5dbff8d8f23f8ae0dc11011c844"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "7165322038a0f8e8248c942258fdd006"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "17f402b10ebf536a686c73739c390df1"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "f521387d80cda5a6d84d92b59efad4ba"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "037f0f35575f15b998b9eb134d9d6120"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "8bb479b080f82832ece461af51707397"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "b06c8de06d1822f3f82777d0c3b2770e"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "4747d22ad7a0a84cd0659cf2b46efc15"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "aa71ad866c13e1390454cc8d06f418f9"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "e7fdc588c1d209da066ebc1859e1fddc"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "43eea60061b0ba3e51cbce850419ab6d"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "fd65d0a623ac111c8034589dbc3549aa"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "4f2df47e73c501f240c922ce0c1eb3b5"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "5f3df1e4653da64bec6dbeeaec9da0b1"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "8647bf887df5b0017de94f8ecdd3d63e"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "5040b4060a92ce6f2a69f509fb2895e4"
  },
  {
    "url": "tag/html/index.html",
    "revision": "40d38d514274e9e8cf0166bf1d2f73c1"
  },
  {
    "url": "tag/index.html",
    "revision": "d9ba094cae7207398bc06089507f2514"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "d6ab15872f3116d67f64326f94a4cac4"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "96616e2ac164086919b47b8718157ed0"
  },
  {
    "url": "tag/node/index.html",
    "revision": "23b18b09b2a21535985bdf3691024806"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "e552a7d7c36dfd1dbf91f47e491c3a9f"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "6aaaee09d9c1a8dc071af99004084ef1"
  },
  {
    "url": "tag/python/index.html",
    "revision": "96027241d0ec59d7e334a9164305c7ef"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "eaefe1ee095ba2987301704550f91cf9"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "90a006a6e82ff304f6790823b890fa8e"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "b499c4f37f579e6f8d7fce6f91bc4842"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "fb093f5a6a2df09c8077787a4f34a0f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "444665535064f5ed0464b43965b2f583"
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
