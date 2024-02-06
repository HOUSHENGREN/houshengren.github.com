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
    "revision": "c3971f919bffa14da0f48a7cc3d14483"
  },
  {
    "url": "alipay.png",
    "revision": "6971af0f5eb2cd0e864aaf6a95ab43c9"
  },
  {
    "url": "archives/index.html",
    "revision": "2e72648de12847033a7aed6c93e47eb5"
  },
  {
    "url": "assets/css/0.styles.cbcec7f5.css",
    "revision": "915efe88bfff7da1a32fd7c5302e30f0"
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
    "url": "assets/js/1.4fbc27b8.js",
    "revision": "937d4a1ef8d48e2654500911c53c8eac"
  },
  {
    "url": "assets/js/13.44e41877.js",
    "revision": "ed48fbe219cf40d6d6ce1c4f2551e301"
  },
  {
    "url": "assets/js/14.5f49d7e9.js",
    "revision": "d6c4bb4f52a82aad50fd99d5045865c0"
  },
  {
    "url": "assets/js/15.8b2a1903.js",
    "revision": "9fb9baa98f30658670eb9b221344bb70"
  },
  {
    "url": "assets/js/16.eff686f4.js",
    "revision": "8aee6938be8d19cd9e86705473dc19f9"
  },
  {
    "url": "assets/js/17.14f194c6.js",
    "revision": "81ddae7296f11b52b5c6865171e942d6"
  },
  {
    "url": "assets/js/18.bda03105.js",
    "revision": "c66eae7f1cb4d705d2ac5eb67b4a4952"
  },
  {
    "url": "assets/js/19.6c56d5c2.js",
    "revision": "48e13184dc510c3b27a70769b41135b9"
  },
  {
    "url": "assets/js/2.128f5b04.js",
    "revision": "894b04188de194ca1f0572ed9375e654"
  },
  {
    "url": "assets/js/20.d5b09668.js",
    "revision": "75156682310a771c85296f1ea838b1e2"
  },
  {
    "url": "assets/js/21.b782518c.js",
    "revision": "641ee0b5b42b38f7f67c35331eb8e9e4"
  },
  {
    "url": "assets/js/22.0f73b306.js",
    "revision": "44e8edfd045fedf500bc9c1bd450131e"
  },
  {
    "url": "assets/js/23.0b2c92fd.js",
    "revision": "4b8d95498776357926c2369ff668a0ad"
  },
  {
    "url": "assets/js/24.ffa9e1e0.js",
    "revision": "ca5e0e5c510a6967f12e77e27b53cd06"
  },
  {
    "url": "assets/js/25.361e4d6b.js",
    "revision": "99e12bf864b41512fdb3d7d0ec62c10c"
  },
  {
    "url": "assets/js/26.653d4c70.js",
    "revision": "76905f3c741ac150fd5d893e56f9274b"
  },
  {
    "url": "assets/js/27.7179f22d.js",
    "revision": "a4720ad7c7ad8c633a36f8caa616e8d3"
  },
  {
    "url": "assets/js/28.86fbec5a.js",
    "revision": "61a8af19e04a8053e0a0482ce41d8df1"
  },
  {
    "url": "assets/js/29.42ff9a82.js",
    "revision": "18b4c7c5556adbdc1128879bd55386b8"
  },
  {
    "url": "assets/js/3.eeccbbc2.js",
    "revision": "9f48d19b775fd691d540a0c18c9f9921"
  },
  {
    "url": "assets/js/30.64ec7aef.js",
    "revision": "25802faa05f8bb3b080c7a84a671a80c"
  },
  {
    "url": "assets/js/31.1103011d.js",
    "revision": "93806709f75d7d14555dd75d174aba8e"
  },
  {
    "url": "assets/js/32.305d2971.js",
    "revision": "86a06e7151a692790b01dfd9ec2fb830"
  },
  {
    "url": "assets/js/33.2af8229f.js",
    "revision": "947e0a2234515d8b505b7a8246f3d229"
  },
  {
    "url": "assets/js/34.a950e828.js",
    "revision": "2dfed4470d43a18e9797f31c1fb8cec6"
  },
  {
    "url": "assets/js/35.1ee0345d.js",
    "revision": "e9ae30ca62fed9f4119bd48f7a62a82d"
  },
  {
    "url": "assets/js/36.f01f511f.js",
    "revision": "978e3cf1458f76bcf546e3d8f1f5a6b7"
  },
  {
    "url": "assets/js/37.f344e9a8.js",
    "revision": "feba6d342d43ddf9c23d9861efa43a2e"
  },
  {
    "url": "assets/js/38.dd353604.js",
    "revision": "fdea68ec18ad6516ff419fce863f63c0"
  },
  {
    "url": "assets/js/39.f17ab078.js",
    "revision": "293f72ba141a50a07ff70092ed4ce682"
  },
  {
    "url": "assets/js/4.0d643e06.js",
    "revision": "fc374bcb61a8f382229f4c08e066ff00"
  },
  {
    "url": "assets/js/40.d3bbaae8.js",
    "revision": "ba8074a10ab75f7f54bab39847589537"
  },
  {
    "url": "assets/js/41.78d12b0c.js",
    "revision": "19fbcd4d60624ce89379745cee9f501f"
  },
  {
    "url": "assets/js/42.6e50eb0f.js",
    "revision": "bb82fdb26a823bdf9517daca42a1569c"
  },
  {
    "url": "assets/js/43.9f30d6d7.js",
    "revision": "acb5368364741fc79ed3e09a0c02e8bc"
  },
  {
    "url": "assets/js/44.ccd5fe85.js",
    "revision": "43a2256b9e76677c4b828c8dae258804"
  },
  {
    "url": "assets/js/45.dc4e69a6.js",
    "revision": "39ebcc1032605f253a498d16ae339bbd"
  },
  {
    "url": "assets/js/46.96fa674a.js",
    "revision": "7c75c3d06835ea343c70968fd2becd28"
  },
  {
    "url": "assets/js/47.9a788256.js",
    "revision": "24fb0ad6079db4b6767638604c3972d8"
  },
  {
    "url": "assets/js/48.168593c5.js",
    "revision": "2448ca054eb7375e2ad5f54526af79a1"
  },
  {
    "url": "assets/js/49.d338ccf1.js",
    "revision": "4cdfd2ca9ec991ad1db488992318c11d"
  },
  {
    "url": "assets/js/5.c32b3c2d.js",
    "revision": "e6391bf4a76cf293959c4b8c94c76184"
  },
  {
    "url": "assets/js/50.03f7e657.js",
    "revision": "5c8c727557fbcc5c2fa76d76d9017ef3"
  },
  {
    "url": "assets/js/51.80c2a82e.js",
    "revision": "7e231b3bd800dd97f6560eb53dd1ee74"
  },
  {
    "url": "assets/js/52.1a116564.js",
    "revision": "4d1747803219eda22a8b14983166ce30"
  },
  {
    "url": "assets/js/53.b7c7c8f6.js",
    "revision": "4c74542917ec3cb16ae65ad427305370"
  },
  {
    "url": "assets/js/54.d0c31163.js",
    "revision": "652c041da3c6a43a74c82fe45706970f"
  },
  {
    "url": "assets/js/55.adab45e8.js",
    "revision": "9227b00bbe5a6db0b4717cef1b7d944d"
  },
  {
    "url": "assets/js/56.5149f60f.js",
    "revision": "0742a471e02a9ed915221beb7e60f1d5"
  },
  {
    "url": "assets/js/57.16e1a63e.js",
    "revision": "5b37653c21b35923d25183e4b5df1e5a"
  },
  {
    "url": "assets/js/58.ff29d203.js",
    "revision": "88ac2e387fd0cbfb3025c03f593e5cbd"
  },
  {
    "url": "assets/js/59.117d02a3.js",
    "revision": "ca4e826191f1b2a1b28469f0b9541f7e"
  },
  {
    "url": "assets/js/6.05ec6233.js",
    "revision": "722625fb1163fd3cbbb52dfa0036bf41"
  },
  {
    "url": "assets/js/60.9055324b.js",
    "revision": "893d3624db2be5d01da2d0570cbd9269"
  },
  {
    "url": "assets/js/61.a821bac4.js",
    "revision": "91e5b659587bf23ce03aced2142cd21b"
  },
  {
    "url": "assets/js/62.447f0f57.js",
    "revision": "54a68c18e659d0025ca008b0dcdcfed8"
  },
  {
    "url": "assets/js/63.fe1cff31.js",
    "revision": "fd5728d476718009b72c74249cf713b6"
  },
  {
    "url": "assets/js/64.29c46443.js",
    "revision": "fdf9eea2ae1a4dd27425f5938e52cd30"
  },
  {
    "url": "assets/js/65.0d6d46d4.js",
    "revision": "e9a1c2e9a5720c148d4f0515339f1faf"
  },
  {
    "url": "assets/js/7.3a1017b1.js",
    "revision": "27a82b20a3a67d3cf17f3d48bff02f37"
  },
  {
    "url": "assets/js/8.fc663020.js",
    "revision": "e5a095fee0404a5ca67fce8b51140ad4"
  },
  {
    "url": "assets/js/9.c1bc783d.js",
    "revision": "5b42bda9575aaf6e52d4736df30b57f2"
  },
  {
    "url": "assets/js/app.e5edc1d9.js",
    "revision": "8f563ec6725f63a7a471b901f2fae36f"
  },
  {
    "url": "assets/js/vendors~flowchart.e7b1ca1c.js",
    "revision": "d3ad2551b5cbe1ff1454565acbd83aec"
  },
  {
    "url": "assets/js/vuejs-paginate.4333bb6f.js",
    "revision": "90636be47c22ba2048dd025889c0d9e5"
  },
  {
    "url": "avatar.jpg",
    "revision": "7d66bec655f81955f6a4435c8d9b8a66"
  },
  {
    "url": "categories/algorithm/index.html",
    "revision": "3c908089c75a34045b766f424d442060"
  },
  {
    "url": "categories/daily life/index.html",
    "revision": "69f1a891de6fd5622827ac8b81de2c4f"
  },
  {
    "url": "categories/efficient/index.html",
    "revision": "28814568a174d05aa89146f9894da4b6"
  },
  {
    "url": "categories/experience/index.html",
    "revision": "257a713d2ace90e18af4acb83f652114"
  },
  {
    "url": "categories/git/index.html",
    "revision": "c136c382271ab2747dada50d77c73fc3"
  },
  {
    "url": "categories/index.html",
    "revision": "ff9c075888af0d21d09ce51536a18a3b"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "efd1dc659dc0ddbac70495149c1416de"
  },
  {
    "url": "categories/screen/index.html",
    "revision": "f388edf9a6426928b86ce119c94b5891"
  },
  {
    "url": "categories/study/index.html",
    "revision": "16b41472d6ac9b5efa12a0441e342782"
  },
  {
    "url": "cursor03.png",
    "revision": "5c82d7557e929e8f2874a681a9183a36"
  },
  {
    "url": "friend-links/index.html",
    "revision": "6e902d155e7856f2dbf40b041d7fe0e7"
  },
  {
    "url": "index.html",
    "revision": "3449a09c00c6606feddc7eda678110aa"
  },
  {
    "url": "page/2/index.html",
    "revision": "1bf416ec2ce1d8468af77b863579370f"
  },
  {
    "url": "page/3/index.html",
    "revision": "93d57e9cfbd2ef6eab3f2239d8e83ee8"
  },
  {
    "url": "post/2021/07/12/study-ps.html",
    "revision": "e8e446cde5c0a5b76a8fd8c458ca208e"
  },
  {
    "url": "post/2022/03/18/study-blender.html",
    "revision": "4232d9676fadea97f11643b2f49a5388"
  },
  {
    "url": "post/2022/05/02/experience-qrcode.html",
    "revision": "925b5305fe1939a082debbe99d91e352"
  },
  {
    "url": "post/2022/05/11/experience-scroll-text.html",
    "revision": "69814a296759fc9bc84a6676ffb889f0"
  },
  {
    "url": "post/2022/06/02/screen-echart01.html",
    "revision": "83b21b695dd32962a612d6163c034c2a"
  },
  {
    "url": "post/2022/08/03/efficient-vscode-config.html",
    "revision": "4411f5d8623a1bc38051ae1dd4506805"
  },
  {
    "url": "post/2022/08/11/efficient-vscode-vim.html",
    "revision": "dc0265c0d92c94c8de407eb92360cc8a"
  },
  {
    "url": "post/2022/09/02/screen-echart02.html",
    "revision": "073d44a476781962c9fa7f27cf02befd"
  },
  {
    "url": "post/2022/10/11/experience-false.html",
    "revision": "7329380bd29f4d39ead4554f1475ce3a"
  },
  {
    "url": "post/2022/10/14/efficient-keyboard-man.html",
    "revision": "1d7ae5cfd25c40e9514d5278becc4bd6"
  },
  {
    "url": "post/2022/11/06/algorithm-001.html",
    "revision": "f2ac0039796b920c93163a758485fc75"
  },
  {
    "url": "post/2022/11/18/study-001.html",
    "revision": "8cb699294131f3d218cb06acf9acc32d"
  },
  {
    "url": "post/2022/12/11/study-002.html",
    "revision": "d55a50614e447776ddee23ef26d9e380"
  },
  {
    "url": "post/2023/02/01/screen-config-params.html",
    "revision": "4ddeb093725d0314fd62d324a0c4e884"
  },
  {
    "url": "post/2023/03/20/notes-001.html",
    "revision": "da9c2e18a226d64eeef7a3234662fd12"
  },
  {
    "url": "post/2023/03/23/experience-print.html",
    "revision": "04f7f4d8d6d3e64f631701388abeae8a"
  },
  {
    "url": "post/2023/03/26/notes-002.html",
    "revision": "54443aafd409403543f98942e2228dbc"
  },
  {
    "url": "post/2023/04/01/notes-003.html",
    "revision": "7d6ce3b12e9f27aa3b4900e08bd49514"
  },
  {
    "url": "post/2023/06/01/daily-life-001.html",
    "revision": "4cdcfbac11fd93a9f09bd3e47996c652"
  },
  {
    "url": "post/2023/06/03/git-001.html",
    "revision": "1decd88249f0105c5f94156fee3aece0"
  },
  {
    "url": "post/2023/06/04/vuepress-001.html",
    "revision": "6e557615b75c0245e835d3dd1d51c04d"
  },
  {
    "url": "post/2023/08/13/notes-004.html",
    "revision": "f8b538b06a1d97d7c18c43c3c3944c06"
  },
  {
    "url": "post/2023/08/16/experience-vue-directives.html",
    "revision": "c9b7b76ec15963a550c334d126d7994e"
  },
  {
    "url": "post/2023/08/17/experience-dynamic-route.html",
    "revision": "ffff2ce07f7f5e9f0b141771d200dac6"
  },
  {
    "url": "post/2023/08/17/vuepress-002.html",
    "revision": "516e1236389618e6dc9c9be970b67b73"
  },
  {
    "url": "screen/performance/001.html",
    "revision": "a86a1533ccbeede312800e31b170899f"
  },
  {
    "url": "screen/scroll-list.html",
    "revision": "7b04d36c257f71faea2aa63b91b5aabb"
  },
  {
    "url": "screen/scroll-text.html",
    "revision": "d969c15cc299e48371ac33e7bee0694d"
  },
  {
    "url": "tags/algorithm/index.html",
    "revision": "df9e99c5951c4b2ba3a7897fce3c2e44"
  },
  {
    "url": "tags/Blender/index.html",
    "revision": "f55a3069449a7e62d79e9a562b27a4be"
  },
  {
    "url": "tags/cook/index.html",
    "revision": "ef4652be910e0cb96f180eff6bcb511f"
  },
  {
    "url": "tags/echart/index.html",
    "revision": "e067e7dce006b71b5ed85a6f3dbabca0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a9af6f88478ca9034dbf858de4007be9"
  },
  {
    "url": "tags/index.html",
    "revision": "a41db4825781bc39218d68291294e5a1"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "855a8dfd7a005ebb292aaee934ef4665"
  },
  {
    "url": "tags/ps/index.html",
    "revision": "13b0a594465e1a4d2644c0a81e1bd3e6"
  },
  {
    "url": "tags/screen project/index.html",
    "revision": "fb4affd45e99d1a6661aee7337971d42"
  },
  {
    "url": "tags/thoughts/index.html",
    "revision": "325c0bde3744ddc562a7782befdba81d"
  },
  {
    "url": "tags/threejs/index.html",
    "revision": "77b6947061b49bb28ef79d569356e908"
  },
  {
    "url": "tags/vim/index.html",
    "revision": "a0e8bc7c8dba5ed4aeb5e2029d289d9b"
  },
  {
    "url": "tags/vscode/index.html",
    "revision": "0400c6476626a66b006217075944665b"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "addb886766d37eea7cc7b50e106b6421"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "16f457d7b4d3c1f13d5b8cb6c3e0c1ee"
  },
  {
    "url": "tags/window/index.html",
    "revision": "391933414fbfdde8101dfe3c061da426"
  },
  {
    "url": "vuepress-theme/index.html",
    "revision": "54c679d14cc978cd52a946522081d406"
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
