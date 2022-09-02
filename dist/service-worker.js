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
    "revision": "4826e1df568b2c5ba914ddac2c3a4e63"
  },
  {
    "url": "about/index.html",
    "revision": "01eef9e75f9e2524905ebbe2a9f176ab"
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
    "url": "assets/js/14.ff6d6394.js",
    "revision": "59b5406b10cfbca390a3e02472c4cb60"
  },
  {
    "url": "assets/js/15.9be230f2.js",
    "revision": "95bce832382e171953fc3288d3bda513"
  },
  {
    "url": "assets/js/16.e4829134.js",
    "revision": "4edd3a579459366dcccd853ad17cbfb7"
  },
  {
    "url": "assets/js/17.6842e171.js",
    "revision": "e5264cfea50582ef33c3342a2a43a7d5"
  },
  {
    "url": "assets/js/18.5852e732.js",
    "revision": "219c09096681f96eb12092d0cece9fa8"
  },
  {
    "url": "assets/js/19.d0eeb861.js",
    "revision": "34b8b110b3a07ea000ad129088f4c43a"
  },
  {
    "url": "assets/js/20.5fb859a7.js",
    "revision": "6303e0629bfeb3fc2ad44999afe713bb"
  },
  {
    "url": "assets/js/21.0e09aed7.js",
    "revision": "9b0ef7dd3edb397e393e4d65ef050d82"
  },
  {
    "url": "assets/js/22.79c77b6d.js",
    "revision": "c79a4b593a291adbea1dc104744e6a95"
  },
  {
    "url": "assets/js/23.fba75328.js",
    "revision": "925d9b6881d882f3c05b2d46015dcc51"
  },
  {
    "url": "assets/js/24.cfdc2302.js",
    "revision": "c457bc39e16690e4cb4a760f01a9c6fd"
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
    "url": "assets/js/5.23ac9039.js",
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
    "url": "assets/js/app.1dccbc25.js",
    "revision": "7fc48ca8ff97ba90751d0f2de13f3ae7"
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
    "revision": "b53ebf2f65338f546a5abbf0ec7eb0fc"
  },
  {
    "url": "blogs/education/高中英语同步练习册外研版听力音频合集.html",
    "revision": "4316e7e9ae5252978821206c3bc4a193"
  },
  {
    "url": "blogs/other/yeah.html",
    "revision": "04d8fa69d1b5bbe8fea27f8adcfb97d6"
  },
  {
    "url": "blogs/story/去2022世界5g大会的一些感触.html",
    "revision": "0cf9d7049495dfbe3695b86a13fb9abd"
  },
  {
    "url": "blogs/tec/啊哈算法的学习.html",
    "revision": "21b9958f31bbed133c5d1ede505dce15"
  },
  {
    "url": "blogs/tec/神奇的picture标签.html",
    "revision": "85587fb810e0a30b9fe7a5ddedc8cb34"
  },
  {
    "url": "blogs/tec/玩Diffsinger的小记.html",
    "revision": "d3b3489ebb1bc8e73e99f0a99665df7f"
  },
  {
    "url": "blogs/tec/node-json-db的一些坑.html",
    "revision": "dee30068e7ad273af240e4669e753330"
  },
  {
    "url": "blogs/tec/QQ机器人的搭建.html",
    "revision": "04eedfdc52622abcde3e8b5ccedb2a57"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "333c85737aa11a639f347c9e01413bdb"
  },
  {
    "url": "categories/教育相关/index.html",
    "revision": "1b28a371eb6354576dbd704867217f6d"
  },
  {
    "url": "categories/名片集/index.html",
    "revision": "d7de669d7f1d136504582ae53232d83d"
  },
  {
    "url": "categories/日记/index.html",
    "revision": "d482de2a38ea466615afd8a31d8827ed"
  },
  {
    "url": "categories/游记/index.html",
    "revision": "f55b7c6c0544be9f8d2992e951c7937b"
  },
  {
    "url": "categories/index.html",
    "revision": "d3f712c653bf925aa0e1639bacc6a9b4"
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
    "revision": "c2587889efa5d217d33004aea8ba8b02"
  },
  {
    "url": "logo.png",
    "revision": "781feef2426faf603fbdcf09cb42f0c7"
  },
  {
    "url": "README.en.html",
    "revision": "b8a5f863883f9b25993f7055ef906d2c"
  },
  {
    "url": "tag/2022大事件/index.html",
    "revision": "632705e86c7b9e82884437140765d22c"
  },
  {
    "url": "tag/2022世界5g大会/index.html",
    "revision": "adbc16d8bc6296aeecbec12f036dbd43"
  },
  {
    "url": "tag/5G/index.html",
    "revision": "3a66832dccdb2d22a0b659b3a4028c45"
  },
  {
    "url": "tag/啊哈/index.html",
    "revision": "9524014780000adc852df6bcb395163b"
  },
  {
    "url": "tag/啊哈磊/index.html",
    "revision": "847b0a445f74110fb56a4dd4309676e5"
  },
  {
    "url": "tag/高中/index.html",
    "revision": "262ffc0df333a423cb9c23839556f330"
  },
  {
    "url": "tag/歌声合成/index.html",
    "revision": "918a1242e9216ee746e46715b3d115b1"
  },
  {
    "url": "tag/哈尔滨/index.html",
    "revision": "a982085a49599747c54d82e6111acae5"
  },
  {
    "url": "tag/科技展/index.html",
    "revision": "cedeaa3714d036c11478ca40f88b324e"
  },
  {
    "url": "tag/名片/index.html",
    "revision": "1f623d600c3e9b6c1174d3e87ee849b4"
  },
  {
    "url": "tag/趣事小记/index.html",
    "revision": "e67836d26eac2902121709c02d81194e"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "603dd207bae95b74a03953736f441da7"
  },
  {
    "url": "tag/听力/index.html",
    "revision": "6c510a4c5ba5a89e11fb653edfa3ca4e"
  },
  {
    "url": "tag/外研版/index.html",
    "revision": "bd6ccf45af6b4cde7fcf5d4c18955dd5"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "0336fb89cce1d94a8765b66b25efe513"
  },
  {
    "url": "tag/英语听力/index.html",
    "revision": "2cc2f21afe0367d9caca70a186d33834"
  },
  {
    "url": "tag/展览/index.html",
    "revision": "d530a9369d3d9955e78fa0ff36e79349"
  },
  {
    "url": "tag/diffsinger/index.html",
    "revision": "1fb146f845f34d5db2441015d589d444"
  },
  {
    "url": "tag/gocqhttp - nodejs/index.html",
    "revision": "e72eff9eef94c6876f6c512c9d61d181"
  },
  {
    "url": "tag/html/index.html",
    "revision": "eea9589cd3efaa2ee1ee547b0bcaf483"
  },
  {
    "url": "tag/index.html",
    "revision": "c1b1d12f438d431d79ab539eeb607432"
  },
  {
    "url": "tag/koishi/index.html",
    "revision": "b03ae9027fcf895faf2952e2e8fa8da7"
  },
  {
    "url": "tag/node-json-db/index.html",
    "revision": "9ac23c06bb3d80e9b9f79fc877c65f7b"
  },
  {
    "url": "tag/node/index.html",
    "revision": "1591103464da65f0dc0929bf53b0f602"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "699363f9b2cdb4103316bd2cb4f032c0"
  },
  {
    "url": "tag/oi/index.html",
    "revision": "2ce8b388643b5cf45246dee46371b84e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "394bc18e3c67c22454a4d726c40c7002"
  },
  {
    "url": "tag/qq机器人/index.html",
    "revision": "a0b6a207250b131127b80b74d003df46"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "7406bdc72d1fffcac512e54cfeaaca25"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "d3507238bd3f922d1cd6919c2d2fc33d"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "0e4fa8c0cfdc50ad29b020496261a12f"
  },
  {
    "url": "timeline/index.html",
    "revision": "46c311c7f919d47f357ff6a3362b0083"
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
