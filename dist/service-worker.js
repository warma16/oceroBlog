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
    "revision": "887f4d2ee01f1cc5b27a98796f249862"
  },
  {
    "url": "about/index.html",
    "revision": "b7f2bfae875b26830669ba1f2fef01cf"
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
    "url": "assets/js/11.2813e1ce.js",
    "revision": "959d2ac85f7b2b0ff53d974cd7fa53a0"
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
    "url": "assets/js/15.25fecd5e.js",
    "revision": "08e1a83752753cb1da0d699f039414bc"
  },
  {
    "url": "assets/js/16.8fdaee87.js",
    "revision": "1c06aef592cbbb7765d834b634f725b1"
  },
  {
    "url": "assets/js/17.fe0132aa.js",
    "revision": "3dddb21e44f911cabe76d6dfd7039c10"
  },
  {
    "url": "assets/js/18.31a42179.js",
    "revision": "8bd4c9dbe437011bf59fed64693f441c"
  },
  {
    "url": "assets/js/19.35d56343.js",
    "revision": "374bcf5102b2804c652b9e3c8c3b8bb8"
  },
  {
    "url": "assets/js/20.e9b9cf2f.js",
    "revision": "ab5dab6c3e6f88d360757def6cb595c9"
  },
  {
    "url": "assets/js/21.6542f2db.js",
    "revision": "ae581e313f4e9b27b4196f6437b397c8"
  },
  {
    "url": "assets/js/22.1d640c4b.js",
    "revision": "20b1568eea2b2e4aa3f64136994bfd25"
  },
  {
    "url": "assets/js/23.65487b59.js",
    "revision": "a6d37447255295927e50c0ac943638c9"
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
    "url": "assets/js/5.50d2cd4a.js",
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
    "url": "assets/js/app.cbb4236f.js",
    "revision": "3a4f836ac11b8e734d5e54655d4b67aa"
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
    "revision": "7fac63424699f146e935e92c273fd252"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "4e9104b20308c72999d9ac1572163349"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "1f50b23121a5aacd027545749e7eac63"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "1e03ad4e560253fdf73d9e51a7d8bdb5"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "45bc1c726b507f3028f5ecd0704f5cab"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "e6e4bd0aa7b5ed03a32448cb82456936"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "3311eb12d7bff8186c9d0c574ffce4e0"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "ecb8e578ffc140c240a11d6ca9f7804e"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "09ef11a4ef36b08b9baa1d3e11d59eaf"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "a514aac0d054ac6e7ae798246c327f58"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "7a8d8a92f922f6eab28e4c6818288f5e"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "9b8e649ba29a6c2d6e4485469c4b3731"
  },
  {
    "url": "categories/index.html",
    "revision": "3c10e5cb2da10c3842c1922caf29ab1c"
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
    "revision": "f3c26f0803ade0c87b86769a637553e4"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "93274482b9802b5beef8f8103f3e038f"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "c378943d93fc64e4c78972f0784ee25a"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "a074f5d0dc5af4c83b712beccdb4c171"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "83ecb0a26589c41d0982b08d23aa5406"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "7546b2ba4c27b226efcb93e5eea6c5ba"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "a1ec4c24b065b38293eea1a197b2937f"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "af524956336444f63a03974c70ed8a1e"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "0e0da27e69af0015b406266e0b7d0d1b"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "cc22c839879b7d06e1f374b347e8cf1c"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "b6ecf07f81f4884c47c79f89aa0c05cc"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "57a60e1de99fd3be18c4470deac5af71"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "bb789a9e0470b0bcf2c1a82fe62b6cff"
  },
  {
    "url": "tag/展览/index.html",
    "revision": "82237636ec7f184e041f6d486cf925f5"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "3f3ddc6a92374b9fe30797a4381a7983"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "e9be13efdb540cd1a6d4b4e5a9d5ccb0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9980891bae2f122e8bb37530e353186c"
  },
  {
    "url": "tag/index.html",
    "revision": "88190eef0d89c76d0e4a78273af30d1c"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "e088ae5bcec70e1d3004cda6fa5953dc"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "e506a9649f818e7da0d399cc33b4bc22"
  },
  {
    "url": "tag/node/index.html",
    "revision": "79c15b0033a6e0c4452e71fb7871617b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "794ddfbd9ce709efc1583dd460df5009"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "5fed81b83d2744a62b0a6b44486e7a31"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1a334de7691213414bd51d7806c21863"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "28e454f155f94e46e3e92452a964666e"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "637f5c5adcafcbdab80c9bd864cafcd8"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "65d5ed78a3f0093a594bc1d208ca461b"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2732c12e388e8b8cd7ecf2e02d7d7730"
  },
  {
    "url": "timeline/index.html",
    "revision": "3668afca2ec8e25271a83a194a484a5d"
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
