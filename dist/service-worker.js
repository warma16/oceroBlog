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
    "revision": "35034b8c027cb5a5a6f52a73fb9a70b9"
  },
  {
    "url": "about/index.html",
    "revision": "d7e726884311c94164457681af8f07c9"
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
    "url": "assets/js/app.ca358c81.js",
    "revision": "b36d2c11e7bb507375254884b523bf51"
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
    "revision": "97fc423ef1ce0f48629b2d3162f7c800"
  },
  {
    "url": "blogs/education/英语周报听力强化训练音频.html",
    "revision": "7a5383a8f291777fbb80828d096da991"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "3cda46091932b95aa1ccef5d0b3251e6"
  },
  {
    "url": "blogs/essay/准备参加叶圣陶征文的短文.html",
    "revision": "a2f334ade574b622de1aed5c40eddf89"
  },
  {
    "url": "blogs/games/Rizline试玩感触.html",
    "revision": "74b7857890f6efd1a80b0eae2c9391a9"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "46d34f67202e75c63b57e86930ff72e5"
  },
  {
    "url": "blogs/other/疫情从严防到突然放开的小日记.html",
    "revision": "ff7ad11e54d6ffad4ccd20352b433ffa"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "aa96e3dce2b277b1d9dab97e556d9c6a"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "4332e8b2ea1ad7fb1f367f98a7dd30a9"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "f8781c147367cf4ed9f68771c6d0d73c"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "205528bc31ab34b5448f8c565d6c748e"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "3ee506f2d5587a9be7b83f43dc4a8ce0"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "1cc4be83f46a0904245619cde812f3d1"
  },
  {
    "url": "categories/index.html",
    "revision": "0b33a48c49244937e82ea3b3e97b3a7c"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "b2b6a7810800d4455ec9ff2f9bc0cd0e"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "50f3d28afecccb4587b45887f4c667da"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "d44ccd3614eb9fb8094fff78b9f7a0c9"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "aa283c6e993cd7f93ef05c9d9a6de1f6"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "67e4bbb9b3fd3dfc29f01743e78e70c1"
  },
  {
    "url": "categories/音游/index.html",
    "revision": "e06da1b574a0684214295147fabe4df2"
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
    "revision": "7586a5883b4484dde6f2bae271f24d91"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "b4ebdbaaa2680d8111a6cf7cf2929015"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "176deef8b823673e98fd7b2c2b115f46"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "ea1f330840760da0131c46b68e8f5a66"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "95cf596ffda8a5d476f505788fbb4634"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "e0cacc04b75214657f9418f62c871453"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "d57688ba2e17d97874a337ba035c0ee1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a31f6ac6d38bbbf5b363ee6a5f81df35"
  },
  {
    "url": "tag/index.html",
    "revision": "ddacceb1092475647342b0adea6ddec0"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "e1273ef841ecef347b9e2ee265d3f557"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "30331a6a055e4aff888b2d072e87860c"
  },
  {
    "url": "tag/node/index.html",
    "revision": "c38d5c18295055ab838f5b901fead85b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "c24c5b601d4a021e3bcc363b83428184"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "709e1eeab8aa57e586566fc5e983be36"
  },
  {
    "url": "tag/Pigeon Games/index.html",
    "revision": "1bedc81889e07b08c0a56aaab4dda535"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b2d537cbc7f965203382b14a0d52274a"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "1ff4d5289ea57f8ee77e972bfdf847eb"
  },
  {
    "url": "tag/rizline/index.html",
    "revision": "93404a60d0ba7454d6bbf2bda98eb5ce"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "56d4b686f7c184c1501598d053d1aeb9"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "11b1c7f55a33fcd9c41e73f06a44c39b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "c3f4f261425f3152d36ab267ab4fe5cb"
  },
  {
    "url": "tag/作文/index.html",
    "revision": "b6f34345bd5d8058bcda66b8236395a6"
  },
  {
    "url": "tag/养生/index.html",
    "revision": "3650eae05a6cb87deeaa324f1000d957"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "793f216f22e25e6cf35c50d098d56f8e"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "2ba2f7a0d13a426bae7330fad6d03e83"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "23c7c9b399ab4d03bfd1e22db9032f5e"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "c6758651eb9dda7f0cda0b6e18014e16"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "e9c5f1ee04eb3ce296b586bd5278cf3c"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "97de7bdbe1e4085c5b338169b56f8e08"
  },
  {
    "url": "tag/文章/index.html",
    "revision": "89d47ae2af779ac3d0631b47773c0035"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "a5f7ba7032c71258adf1ab12ef71f4d8"
  },
  {
    "url": "tag/疫情/index.html",
    "revision": "8256f36c04a742b7610deb6f17528b16"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "e164887e4b46568701d38a818c9760ac"
  },
  {
    "url": "tag/穴位/index.html",
    "revision": "c2d7b9618a5fc00cb3ae3eccdd1b9494"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "fedd8ffdb879fbf1822c24db8e8a5963"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "8169b2e24effda97d940444d47338d93"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "7ed8ff2b8c444766fdfcbc79a77ddb33"
  },
  {
    "url": "tag/英语周报/index.html",
    "revision": "b231a50c43ef609b86536eb8e83e61c5"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "1e5ad5623d3f7625424b5e028bc8ae5d"
  },
  {
    "url": "tag/音游/index.html",
    "revision": "e796e51193422b725a38eaf89d25f826"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "a8b5ecd8064ff1c99eb1fae284c98b3e"
  },
  {
    "url": "tag/鸽游/index.html",
    "revision": "a816261c4158f8bafc1502dd33038ccb"
  },
  {
    "url": "test.html",
    "revision": "34b7a7ace224fb1ee34706702aa9f16a"
  },
  {
    "url": "timeline/index.html",
    "revision": "ffe814a2489a96d0c6152b53dfee1819"
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
