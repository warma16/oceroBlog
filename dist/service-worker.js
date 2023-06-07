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
    "revision": "17abae1264f7e61b355ee8803fa5f894"
  },
  {
    "url": "about/index.html",
    "revision": "817cbd9f398d284937951f4656cd1980"
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
    "url": "assets/js/11.ba98bff3.js",
    "revision": "8c8976f1fc0e5805b45d27973b2e2f92"
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
    "url": "assets/js/26.8ae0947a.js",
    "revision": "a51c570f4844368f8175cea124de1f58"
  },
  {
    "url": "assets/js/27.01af16b3.js",
    "revision": "d0d30b72f220f567206f3a733597e194"
  },
  {
    "url": "assets/js/28.9d857ebc.js",
    "revision": "ad1a6e4ff1f183475f7bbeb825100663"
  },
  {
    "url": "assets/js/29.1144192a.js",
    "revision": "e8c64bf75e386e525564c3f39a07271a"
  },
  {
    "url": "assets/js/3.9191311e.js",
    "revision": "e51c4ddd3893dfc151f07957d191a638"
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
    "url": "assets/js/app.3985fbe5.js",
    "revision": "61dd1a1c903b77d15ef15656ad55b385"
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
    "revision": "e7f6406aca2369316d60d8235aff89ee"
  },
  {
    "url": "blogs/education/英语周报听力强化训练音频.html",
    "revision": "42c770f85d6cd4c41d59d5b26cd941e4"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "0ceffa329f0d8574ca9999c2d0346090"
  },
  {
    "url": "blogs/essay/准备参加叶圣陶征文的短文.html",
    "revision": "2c965b99d16a3bd6d537262599113f6b"
  },
  {
    "url": "blogs/games/Rizline试玩感触.html",
    "revision": "c7f00c601283dfdc36217adfdb9f1d57"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "c345dcb62c61dc9e69665b6972831ff7"
  },
  {
    "url": "blogs/other/疫情从严防到突然放开的小日记.html",
    "revision": "6f74978b2aad7cb5376d4dcadc89050c"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "f60b99bc6a97035502e37020965ef638"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "7ff60b352b25536a738ca3249c411e6a"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "bf1459aed6254612b374e1d6a5229298"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "5f6ada21a2a776ff1dd6c38145ab4300"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "b56c886859086054ea1b44853cff84a3"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "a2de3abfd8ee6741cc975161fb3edf76"
  },
  {
    "url": "categories/index.html",
    "revision": "f46671336186045349c9bf9ccdfcca9e"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "dff3b99e01f5fe90f936fec0add4e023"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "ba605bea0209690b27353122b4a59436"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "816936944d915625060d29b633b2bb3f"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "41669905054243cec3f05fef55b5f8c5"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "3cac5b3b71b7b3bc9f3b3934896ee399"
  },
  {
    "url": "categories/音游/index.html",
    "revision": "134d2d4c51d621f50de4f4bbef419edf"
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
    "revision": "bafd88feb64d037846ac42c24cf9faec"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "bc18d953c7556e2800e1040b4dcc42ff"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "82adf80b73722b5e3ad5e76a12866ad9"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "da6aff1e33597d3f887b3f714195af74"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "fd6c73de7c61279274d6661083d0fff8"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "529938b3ddc05385b1679548222412cb"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "271e65751f2dc7943d0fa9ece537c581"
  },
  {
    "url": "tag/html/index.html",
    "revision": "431394275e821a9c9dd3c6a869c85afa"
  },
  {
    "url": "tag/index.html",
    "revision": "86f75c1869d25cbb257502af0a33be0b"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "3a15a293ca974a844720b46f032f590c"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "cc83b0345d2128a5c4435ebd75e32354"
  },
  {
    "url": "tag/node/index.html",
    "revision": "e36ea2b9aa85537b02b8f8e100d1d799"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "77c2b3db94f809c39753f96adc99a0f3"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "d3ba1a78c543b5ae49ef40fd9cae095f"
  },
  {
    "url": "tag/Pigeon Games/index.html",
    "revision": "6ec046fe6bddec8fc24627a385d280ad"
  },
  {
    "url": "tag/python/index.html",
    "revision": "379c1ca28166cd43844839354ff7baa7"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "53b2366a31c0baeac6dec8a75d4983b4"
  },
  {
    "url": "tag/rizline/index.html",
    "revision": "62cce84251fdc44e334f0dc0ed8734cf"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "ce74d50eeddbccacbb656e3113e32ed9"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "ed07e7c1d7f4d59c8f69ff65003b9b82"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c0c6651a34e99d61d1a1522b88d36a84"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "3900af5625dea4a1664a843f6a66cb2d"
  },
  {
    "url": "tag/养生/index.html",
    "revision": "ab434c3aceb0e6e8fd8c30ea791e5755"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "ebf4d52461cf80eeaecc91c57bd6aa0a"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "fef88790051e91ceda1f3c5f1b89eb95"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "fbf2bd2f63bdfcfa3c2db271700bdde9"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "34292cf73631bcfa783759aefc25a963"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "a0e5e498ce65ddf709e868dc56f9fb27"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "10bd15bce2ea96b81c4387b93fbdcad7"
  },
  {
    "url": "tag/文章/index.html",
    "revision": "7d620ebb56cbf25f36ab38b6a520b971"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "aa5e55614135f4258e0d69b824bf695a"
  },
  {
    "url": "tag/疫情/index.html",
    "revision": "9172109481e606a84c445fceb39b1532"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "4c78fc41de6751714a1c48b63ec85e9d"
  },
  {
    "url": "tag/穴位/index.html",
    "revision": "77078867e463665883d5efea774f637e"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "cef79c206414a3b1ea6253708c792f60"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "0dcdab6438f9eaa756ba0dda647d883b"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "3dea71da69eef26bc8d963e72af9fe1d"
  },
  {
    "url": "tag/英语周报/index.html",
    "revision": "c5a4cd5159cff5549a89efef21da834d"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "e5652330596e29727401e2ec91962813"
  },
  {
    "url": "tag/音游/index.html",
    "revision": "63260a89875bfa65ba1dfe745196fa3b"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "c24b4b59c5dbfcdc239e544bdea8d1cd"
  },
  {
    "url": "tag/鸽游/index.html",
    "revision": "b001218567b29834c923b19e493c6a76"
  },
  {
    "url": "test.html",
    "revision": "ea9bc03dd1731dd0cbf32f1800c63ec6"
  },
  {
    "url": "timeline/index.html",
    "revision": "54febe9d83bf653a8c3ce6e7f1c5f633"
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
