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
    "revision": "9ad56d8d235a684a6513b3407a5bfb86"
  },
  {
    "url": "alipay.png",
    "revision": "6971af0f5eb2cd0e864aaf6a95ab43c9"
  },
  {
    "url": "archives/index.html",
    "revision": "5447d1404c91cade17ee7befbdb45cff"
  },
  {
    "url": "assets/css/0.styles.f50aa37e.css",
    "revision": "33ace3d4606f505b46c09b3a5ad4bb7a"
  },
  {
    "url": "assets/fonts/bbr.f32a0cd1.woff2",
    "revision": "f32a0cd13ac49e36df74467ecd2dceff"
  },
  {
    "url": "assets/fonts/Icon.4187678c.woff",
    "revision": "4187678c70c491cc0fbd880bfd24782a"
  },
  {
    "url": "assets/fonts/ir.1ac22b3a.woff2",
    "revision": "1ac22b3a85c6d7164927d192654ab170"
  },
  {
    "url": "assets/fonts/jsr.8ffec542.woff2",
    "revision": "8ffec5420781e499563421c2fbb4f84a"
  },
  {
    "url": "assets/fonts/lobster.fe012fb7.woff2",
    "revision": "fe012fb7b22e5776c4a2e91889068974"
  },
  {
    "url": "assets/fonts/ml.0a7c6df0.woff2",
    "revision": "0a7c6df06e85d978d096d4d18fd8d43d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.57fb051f.js",
    "revision": "09df27ab9139f1943ef36ba53d57788a"
  },
  {
    "url": "assets/js/11.e2c32161.js",
    "revision": "127addceb23949697b9ad37423ccea96"
  },
  {
    "url": "assets/js/12.8fa9d31c.js",
    "revision": "50f4293835b9d22dfcceefa13c420bf5"
  },
  {
    "url": "assets/js/13.0054edf1.js",
    "revision": "77684877118c003cc18abb07cf11419b"
  },
  {
    "url": "assets/js/14.9cd28107.js",
    "revision": "6f9cf8448c63cf746f19bd5b084cd815"
  },
  {
    "url": "assets/js/15.5ddd7ff5.js",
    "revision": "64c29858e7fde8348df793cac0f928d5"
  },
  {
    "url": "assets/js/16.038febde.js",
    "revision": "9a4356fda280ba0591fd7fd856019fb6"
  },
  {
    "url": "assets/js/17.e3f0d6a6.js",
    "revision": "305fd9128b45efed860c2e880081becb"
  },
  {
    "url": "assets/js/18.d970ba5d.js",
    "revision": "c5584fb085cbfdb05627e7c565398d44"
  },
  {
    "url": "assets/js/19.ee0b5466.js",
    "revision": "2831d6c3d893aa9a5b5399c2eff4275b"
  },
  {
    "url": "assets/js/20.07b64df2.js",
    "revision": "5517e902bfbf6ee123a461c5a710153d"
  },
  {
    "url": "assets/js/21.f9c5199c.js",
    "revision": "33426db5a758bbfd70af3b857fe22fa2"
  },
  {
    "url": "assets/js/22.b11b23a4.js",
    "revision": "184f15e007203c08ef582949bbd19b9a"
  },
  {
    "url": "assets/js/23.ef10013e.js",
    "revision": "457afdcad0e512c999d52399f69f1545"
  },
  {
    "url": "assets/js/24.61506bc6.js",
    "revision": "e1c39d69ef82c791be3ad2fb85a2face"
  },
  {
    "url": "assets/js/25.6b2f9146.js",
    "revision": "52a56b04f4b95c9ea51fcc3afc71b47f"
  },
  {
    "url": "assets/js/26.6c3f8dbf.js",
    "revision": "6acf0168757f4fba612eb8f5d3f755cb"
  },
  {
    "url": "assets/js/27.fee9496e.js",
    "revision": "d6f2ad27ffbc9c1311253f7a58a00982"
  },
  {
    "url": "assets/js/28.e73c1dcc.js",
    "revision": "0688b5f8d9b74424f165e37299064d72"
  },
  {
    "url": "assets/js/29.24106775.js",
    "revision": "a119dd19e7959d39d66d70ba75e549cb"
  },
  {
    "url": "assets/js/30.e94cc0ea.js",
    "revision": "c85e3c25bdddb7d042e9b61b29c69024"
  },
  {
    "url": "assets/js/31.fd88fe4b.js",
    "revision": "152ac9ab7697063f9b9d97d65d99efc2"
  },
  {
    "url": "assets/js/32.7f12029e.js",
    "revision": "e153f592d486bb9139c391276f33b606"
  },
  {
    "url": "assets/js/33.e92ee6a4.js",
    "revision": "a5818536a006290aab2cfd00385a0402"
  },
  {
    "url": "assets/js/34.fb2d407c.js",
    "revision": "f8a582d16644772ac8aa66f307be4e40"
  },
  {
    "url": "assets/js/35.ddb9db04.js",
    "revision": "de41df2c46eb7726437987084b561544"
  },
  {
    "url": "assets/js/4.f9cf82f8.js",
    "revision": "bf44a0a766054f2ab3920b519f9b66df"
  },
  {
    "url": "assets/js/5.b4f15c52.js",
    "revision": "ae8f5100fe3f63d47ff0d8fb8239bf84"
  },
  {
    "url": "assets/js/6.3d8463e2.js",
    "revision": "56629bc2e8bcee475ea8f4f653e1cb05"
  },
  {
    "url": "assets/js/7.b40bc745.js",
    "revision": "216b71ff5c41ea366386e77d488b2c79"
  },
  {
    "url": "assets/js/8.0e83537f.js",
    "revision": "b0a4476c92804d879be443311ef4595c"
  },
  {
    "url": "assets/js/9.c3cd6268.js",
    "revision": "620a263cd8ca10f05cc97b8cb1b9f983"
  },
  {
    "url": "assets/js/app.8cf6faa7.js",
    "revision": "bfec32551ebc2f8bbc6d60129bd65d01"
  },
  {
    "url": "assets/js/vendors~flowchart.bd779e31.js",
    "revision": "04edf14f5c2d2b57c98edaa281bb529f"
  },
  {
    "url": "assets/js/vuejs-paginate.b89ce8e5.js",
    "revision": "4afab9e377c9635d0b11d9ff4e706bfd"
  },
  {
    "url": "avatar.jpg",
    "revision": "7d66bec655f81955f6a4435c8d9b8a66"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "c1028c0ad2e7494e4572633b21927c34"
  },
  {
    "url": "categories/daily life/index.html",
    "revision": "3d5e6030415867cd7270fa7e1a0bbb3d"
  },
  {
    "url": "categories/efficient/index.html",
    "revision": "b88d98e0d3754920241ff786acc22c86"
  },
  {
    "url": "categories/experience/index.html",
    "revision": "1ea280adc9a177a11b0292cf16faab7e"
  },
  {
    "url": "categories/git/index.html",
    "revision": "d0d1c1da0d2a6e2787c504d2c3998e00"
  },
  {
    "url": "categories/index.html",
    "revision": "492a8c898fe07958e5b7a9a3dab15054"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "7f49b2b365f088025fac535a7414c425"
  },
  {
    "url": "categories/screen/index.html",
    "revision": "0e035669aedafcd724d20b94a89244b1"
  },
  {
    "url": "categories/study/index.html",
    "revision": "970b0b45e759c28ee6b5292232de01ab"
  },
  {
    "url": "cursor03.png",
    "revision": "5c82d7557e929e8f2874a681a9183a36"
  },
  {
    "url": "index.html",
    "revision": "1fb6241f256b9090c2b2eb6f91cd941f"
  },
  {
    "url": "page/2/index.html",
    "revision": "63d7d1ef9de48a8b187f0e66ae5877bc"
  },
  {
    "url": "page/3/index.html",
    "revision": "51ce9c7abb9fd51ed59db46b516269c8"
  },
  {
    "url": "post/2021/07/12/study-ps.html",
    "revision": "4edd5ffb06af4983ab6e4a68803e7fa2"
  },
  {
    "url": "post/2022/03/18/study-blender.html",
    "revision": "fc2f9bfe4440d17827fc2af0952be80d"
  },
  {
    "url": "post/2022/05/02/experience-qrcode.html",
    "revision": "83f7dadcc25e53ae2d5503aab9409442"
  },
  {
    "url": "post/2022/05/11/experience-scroll-text.html",
    "revision": "2319ee8636cdee573fe602eb77b6cf34"
  },
  {
    "url": "post/2022/06/02/screen-echart01.html",
    "revision": "36286f210cd51af3f3bf3c63b672ae3a"
  },
  {
    "url": "post/2022/08/03/efficient-vscode-config.html",
    "revision": "804195bae9d905dc83dd4150bcb3b9f0"
  },
  {
    "url": "post/2022/08/11/efficient-vscode-vim.html",
    "revision": "322691e31d4d1435399c60cfbeb0f48a"
  },
  {
    "url": "post/2022/09/02/screen-echart02.html",
    "revision": "9afefa0d1023f2479f80450edb3c70a3"
  },
  {
    "url": "post/2022/10/11/experience-false.html",
    "revision": "084be5f56e7023ebd3bcf887fc5d72f3"
  },
  {
    "url": "post/2022/10/14/efficient-keyboard-man.html",
    "revision": "924b36d60e3f0f4025159233ed184940"
  },
  {
    "url": "post/2022/11/06/algorithm-001.html",
    "revision": "5b34c2da686d77949b4b445e31c9509f"
  },
  {
    "url": "post/2022/11/18/study-001.html",
    "revision": "45b66006f4a242e9657790a17a6c36c8"
  },
  {
    "url": "post/2022/12/11/study-002.html",
    "revision": "9de0b9f0931c9115f5e7b47cea49d497"
  },
  {
    "url": "post/2023/02/01/screen-config-params.html",
    "revision": "237f01a3fbbbd94b27968ef77588acee"
  },
  {
    "url": "post/2023/03/20/notes-001.html",
    "revision": "28248610ddc7f1d5a0def46e93047fdd"
  },
  {
    "url": "post/2023/03/23/experience-print.html",
    "revision": "422e34c9de59e7b8d3f63aec61faf52f"
  },
  {
    "url": "post/2023/03/26/notes-002.html",
    "revision": "215fe54206337414b3e2011c93b09e77"
  },
  {
    "url": "post/2023/04/01/notes-003.html",
    "revision": "686133f64db1f9a7d4cbecf308fa21f9"
  },
  {
    "url": "post/2023/06/01/daily-life-001.html",
    "revision": "559b6fd214c9ac1bb116ac951df46306"
  },
  {
    "url": "post/2023/06/03/git-001.html",
    "revision": "66d791a03121bd8a4e8bba8aa8af159c"
  },
  {
    "url": "post/2023/06/04/vuepress.html",
    "revision": "80c39efdb2b1e7f4dbd9d918f54c73b4"
  },
  {
    "url": "screen/performance/001.html",
    "revision": "b03386cffaead7b48dcb63d2db7031c9"
  },
  {
    "url": "screen/scroll-list.html",
    "revision": "cce1897df76800265db7358a7e851576"
  },
  {
    "url": "screen/scroll-text.html",
    "revision": "65ded2ed7724f23e3100071fe02a7c7e"
  },
  {
    "url": "tags/algorithm/index.html",
    "revision": "6dbd63a5ba47cfb7e5ecfe5d9f24bcf8"
  },
  {
    "url": "tags/Blender/index.html",
    "revision": "ba8d334bba924b732fac55d151191106"
  },
  {
    "url": "tags/cook/index.html",
    "revision": "502c466021efb231fe00acf3a0f99c3a"
  },
  {
    "url": "tags/echart/index.html",
    "revision": "e89678f4e5791985da9d146fc1fe5756"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c93826e1780180825df30c3487e949f4"
  },
  {
    "url": "tags/index.html",
    "revision": "4c11e82201372eaba409fcd920e4d7df"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "72053135cb66bfa53afe3a2fb636c68e"
  },
  {
    "url": "tags/ps/index.html",
    "revision": "c5add1d45b3185e159bd912a1e803fb6"
  },
  {
    "url": "tags/screen project/index.html",
    "revision": "01c7b5dac2ecc2a8674d0f1584e687df"
  },
  {
    "url": "tags/thoughts/index.html",
    "revision": "4a903ff3e2d8316c0dd16ac68f1727d9"
  },
  {
    "url": "tags/threejs/index.html",
    "revision": "eee32a021cf4c88a5312af6ab93be134"
  },
  {
    "url": "tags/vim/index.html",
    "revision": "0b7269004c55d543f2bbe6d4691fc551"
  },
  {
    "url": "tags/vscode/index.html",
    "revision": "5dfb7549c44ddd16655327618ed9a797"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "bf80786e8d9a9d975d0a05e309f0702a"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "43627e06fe533de54c5bf464c3f95ffe"
  },
  {
    "url": "tags/window/index.html",
    "revision": "a1905d8840ce41e95c444cdacd6824b8"
  },
  {
    "url": "vuepress-theme/index.html",
    "revision": "aa7e64be277c5986b9b9bfb432eecbd3"
  },
  {
    "url": "wbb-mad01.jpeg",
    "revision": "a9a25ce2e033b46e2e1fe0d899b25e83"
  },
  {
    "url": "wbb-mad02.png",
    "revision": "38350c46b871702f00b81f4e45a423ea"
  },
  {
    "url": "wechat.png",
    "revision": "96774464ea8b589235c0dd50d1c32fe1"
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
