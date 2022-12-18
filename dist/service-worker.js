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
    "revision": "3eb6a0aab5d626ee36353f3f8ffe66fa"
  },
  {
    "url": "about/index.html",
    "revision": "289cf7664a05e99dd2fee7e26c2d68cd"
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
    "url": "assets/js/11.9d40cec5.js",
    "revision": "7697c8db8aacf8ee7f1cb5fe426dc1f2"
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
    "url": "assets/js/17.4350bc94.js",
    "revision": "8541f1472ed6ca3e9cb1467317017a3d"
  },
  {
    "url": "assets/js/18.b41d38d9.js",
    "revision": "703e440ea792706c7132bf52fe805059"
  },
  {
    "url": "assets/js/19.c5a181cc.js",
    "revision": "08f132e25e581f572e7652224e6f53ea"
  },
  {
    "url": "assets/js/20.b362276a.js",
    "revision": "cbd61b73834f6a7344acac8b3aa98883"
  },
  {
    "url": "assets/js/21.a27ea3d9.js",
    "revision": "b9a5f00bd5af25430d29cd873527571b"
  },
  {
    "url": "assets/js/22.e297a50c.js",
    "revision": "d4c241ad88631d3a498c6873101796fa"
  },
  {
    "url": "assets/js/23.46d0500a.js",
    "revision": "9e24f4ca1b029c4060129cf926472512"
  },
  {
    "url": "assets/js/24.e5e18e27.js",
    "revision": "5610aee3c0c3b774fbe101ed5d87480b"
  },
  {
    "url": "assets/js/25.8a400835.js",
    "revision": "2800bed021cb1ef0e9912ba6a2eb59ad"
  },
  {
    "url": "assets/js/26.b2df8914.js",
    "revision": "3bd854d3e2c2ed3b813c92a50ce467ee"
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
    "url": "assets/js/app.31f01bf7.js",
    "revision": "924ed633d30ed7be2e0b40754711e004"
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
    "revision": "29e1bd0146c8afa8c41613ec5c895423"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "c52d7f5ba7ac147a0830f377c89d6691"
  },
  {
    "url": "blogs/games/Rizline试玩感触.html",
    "revision": "07b70a7f1509f30751ada110310901a6"
  },
  {
    "url": "blogs/other/疫情从严防到突然放开的小日记.html",
    "revision": "8adb9c505f75cd3e8e66ba9d9f097e52"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "ebb5f89093d9d29476f8665d9f070514"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "42e4657d5f01277e4c234c2ed48aaf31"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "baa2548750385042d1fc9a559e0dbc97"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "199ee064573dffa3ead7b3a02db842c0"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "1b21b8a9dcbf0ec3c3c9d30887b8db85"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "655fdce948bb818943672bbe4036105d"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "12309e569a5dcc19278047e7c2a76e85"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "ae9e28208cc6a9a206762fcb2f35773a"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "658e03b83e3a75fcd76fd403b6868ac5"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "c283f63e9ddf832133fa61cae60213a9"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "2c5fa2d7c506e184e64d7de6e604f7dd"
  },
  {
    "url": "categories/音游/index.html",
    "revision": "45e04a83ad520af4c7ac0ca2039e48c0"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "f562babcacb256c0c2943a4f5da155ae"
  },
  {
    "url": "categories/index.html",
    "revision": "bd8a0373d34fad12526896bf870146a6"
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
    "revision": "29dd744ce47daac5302b5a68309fd1f1"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "530b60284dac23647422bac53d1d367d"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "54ea829d9ae1b7047f23ba781907865b"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "e6a5922d71b5fedee899cd6f29f76cb0"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "9165a3daab2f6b34a6f86a4dbfdfe7cb"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "127f596d7feedd6edb19356c8eb2e1d1"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "eaa105b5e21c21457a30f0429d8c2848"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "d36f3c38a68c3746590d87af3013e7ea"
  },
  {
    "url": "tag/鸽游/index.html",
    "revision": "1c5cab3aeb9d21058e70a56a189db6b2"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "a3fcd5cb1c9a43d8b8916b38662c95c6"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "53ed84bab432cfdd3b49594e477075e8"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "655c5817b2bd831b4b6e418d4689931c"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "820bbb30cb03b2cc5183eb812908dae6"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "9a4e52c60ee73aa785f4c2cf9d327d4d"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "aba841d3d2bd47b757eac8b4343e6552"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "82c23c1e1ca8dc824585150e84684311"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "a58280958f86000ddc461af79d95d001"
  },
  {
    "url": "tag/穴位/index.html",
    "revision": "319a6d735ed8d344c8ee45479996355b"
  },
  {
    "url": "tag/养生/index.html",
    "revision": "6b979087dfa799613604b4c4bff9791d"
  },
  {
    "url": "tag/疫情/index.html",
    "revision": "2a39723b402ba304b759201478b916b3"
  },
  {
    "url": "tag/音游/index.html",
    "revision": "80e538f870edf2317222e7c036453137"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "6907242c40278df2b750c62213df6c0c"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "ff69670a2294edf02ee911745f988963"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "b869c7cfd728f102ca5ae421c5f4bf05"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "0d1d0c15abe8c5fc2aab03571db7cc05"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bb61eede2f43b4688d91da29259cc531"
  },
  {
    "url": "tag/index.html",
    "revision": "d71ed6a616cd726fed9f3774a467d69f"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "2e70f9839e2e5506cd013dc29400e2c1"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "919f4268f5d37091cffb1afd93da3ce4"
  },
  {
    "url": "tag/node/index.html",
    "revision": "f49db80f2271f5d0f9458fb5d7071c11"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "bdff957e1e6430ab33422c01d97eb4be"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "f6a42f1b5a3c7baaae88f696bbf71c61"
  },
  {
    "url": "tag/Pigeon Games/index.html",
    "revision": "98ea0818cf3c8b58a4eedfd0094a5157"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b4c7b7df43a089566cb70ddda79ab26e"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "76fd0d84475dac518bf8fe914303e20d"
  },
  {
    "url": "tag/rizline/index.html",
    "revision": "c3b56f045609e854b55f141bd9b00a80"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "0b124bef0e690decf8943f72ebf8b16f"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "af0f2795ff992bc74c4597dc69068a4b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "676a2a9f5248007cb62f273293f4c14d"
  },
  {
    "url": "timeline/index.html",
    "revision": "833831a8c6d0292953d8b3a99316782d"
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
