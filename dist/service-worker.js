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
    "revision": "bff342a5ac5179d2050eae0b1689b589"
  },
  {
    "url": "about/index.html",
    "revision": "d839e7fb83727778560db4761359b914"
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
    "url": "assets/js/app.963ae6f8.js",
    "revision": "59ab6a8dea4572d57940b8d83cbb1853"
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
    "revision": "372e80d1f515a42201d8c219b7031663"
  },
  {
    "url": "blogs/education/英语周报听力强化训练音频.html",
    "revision": "addd1b3139f5db0696ba9761a8a9d8f2"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "83bfd3a084db7acdcfa61a6878b1642d"
  },
  {
    "url": "blogs/essay/准备参加叶圣陶征文的短文.html",
    "revision": "3e5d5e13b87c9621e0882ac62c4442a7"
  },
  {
    "url": "blogs/games/Rizline试玩感触.html",
    "revision": "d02d65784a12281e5ebe79664eabb6ca"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "dc5e58925a364969a93a78a7a9500dd2"
  },
  {
    "url": "blogs/other/疫情从严防到突然放开的小日记.html",
    "revision": "98b3a29e8c74295809a52c2d1f779faf"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "22073f3d9da4f78207d9209a0ab53bb0"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "054bc61106ce3a5f19f40288574ef3a4"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "4c18ba70de9b588d5dff37ff2065cefd"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "e2a0c01e5889340063446d110e5371aa"
  },
  {
    "url": "blogs/tec/数学建模活动的经历.html",
    "revision": "ed333004df134c1710a16e6d48f45480"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "19e6cec435d4d37209bfc4cc8b5dd727"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "8aac7034b5d024f12ab0dc1a518025d9"
  },
  {
    "url": "categories/index.html",
    "revision": "1cc6eaa269956afcac9f28344b8bcffb"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "295f47b21eeb1d91656df87bc63b72c1"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "6eea97d8b595683cf54b9442e0324ccf"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "4a6c7c3c59ff98b74d029f8301249e9f"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "6fb14a46fa3d92e5a4484c99cc28dc5e"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "a7d4e0a2e44621fcd10ea2f83f4dbd60"
  },
  {
    "url": "categories/音游/index.html",
    "revision": "fb3974fa0dfaa1609c3e255f7b7870d3"
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
    "revision": "d24f886a3d1fa41915f7174377dcc2b2"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "b9acf81248aaa4fb2f6ea04c3ee35f72"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "671458bcae714651ce24fdf75190ddae"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "a4d85c8682cd6012be9b83883645c656"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "cd00be128ec716ef0ff62c437dfb5043"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "56d5edc93b021cd2aac3f6c32e6929fe"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "c444409192850b392dc3c22b8012d4a0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "62d4cdcacdb79c248b7d026ff35cc37b"
  },
  {
    "url": "tag/index.html",
    "revision": "829cadd00503fdd23f63324ede50ffed"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "5b7d2b4e01bb42805f18aacd8793970f"
  },
  {
    "url": "tag/LSTM/index.html",
    "revision": "2ff5bd76ca437378227b5f8e1d0ec9f3"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "d74bb5f8d0776af3f9bfeab7597e15fa"
  },
  {
    "url": "tag/node/index.html",
    "revision": "2a530f06c332d468f8a59adaa3b5c240"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "5f53d8f6a96d570f2a9a9996e99409cc"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "2e57149b0fa8004838cb28eb9fa6fa88"
  },
  {
    "url": "tag/Pigeon Games/index.html",
    "revision": "33d7398cf8fad5c1b9886b95bfca8426"
  },
  {
    "url": "tag/python/index.html",
    "revision": "08af1c973cc2256090ee03087ea65774"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "4d419f21e53d54c4afd2bd5eef384f8b"
  },
  {
    "url": "tag/rizline/index.html",
    "revision": "9563d97d3a0c2626f89e976e4b6164fc"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b9ff2192ef466b2e31102505b670d33e"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "0205771e4f8eecd480007e33c01b7317"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "53ba2aea92d2d3c60edecbdfa5bb401f"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "baf90ca35ea49ebac10bcb932e419362"
  },
  {
    "url": "tag/养生/index.html",
    "revision": "30a4a845bab176ab36daf4ab4ee928bd"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "94bf84f7d145f5b5fe9c6baa6ce19f73"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "a8eaeea5cd87e78f9f180d815f5e2e22"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "bc105c1d6182c32c3db15f044fca1709"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "ccfefc66a5a5fe9864bff8c35d56e5da"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "16442dae3517072275d9744e4510fccb"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "61f7645909a33d059d24ac3c79d4cb70"
  },
  {
    "url": "tag/文章/index.html",
    "revision": "bed129be30d89f1cc794ced249cef489"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "96ca6ed065286ad0588d4df0ad61df92"
  },
  {
    "url": "tag/疫情/index.html",
    "revision": "b38fb01d6929bb6ce0ba0e72720cc7ab"
  },
  {
    "url": "tag/神经网络/index.html",
    "revision": "54858750dfabb940499c6bdd439055c1"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "68e7f9167a12ce6d5cf5043edf76e0db"
  },
  {
    "url": "tag/穴位/index.html",
    "revision": "89bd59f88bbff9ac8b92ffec0950787a"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "c1c29c549b1990cf0a37f0322b9b1bdd"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "ee757f30e534e6a529b883e5f9f0b83c"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "361534d2148a292de6e100510d8c2477"
  },
  {
    "url": "tag/英语周报/index.html",
    "revision": "8686aa403e6f7b9ed9f01477251d9245"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "56ad9699940daa02d4b1e7a7f7b24d17"
  },
  {
    "url": "tag/音游/index.html",
    "revision": "54cad7987c6f2fce67aa4602b483d7ae"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "3ee5706099022bfd87675828d62f889c"
  },
  {
    "url": "tag/鸽游/index.html",
    "revision": "8e5874dd1a26250e960c94fb4d4c806a"
  },
  {
    "url": "test.html",
    "revision": "0dc704ee85136d57421cb78f581fd66c"
  },
  {
    "url": "timeline/index.html",
    "revision": "88b4aedd9c47299cbe6997568a3bb67e"
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
