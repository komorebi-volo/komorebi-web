'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3be92c1232e737706ea5fc47036a9315",
"version.json": "bc799ba7ac99c145b62d131da5f9ffcf",
"index.html": "8f39ffa6d89c573ede51039ac0f551e3",
"/": "8f39ffa6d89c573ede51039ac0f551e3",
"main.dart.js": "754de0bf4fc60bea3308932dae5fc10d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "3052e0216122d0ba33d6c62ed6d30805",
"icons/Icon-192.png": "1cb7d7f3082abe8fadb1556911c6d484",
"icons/Icon-maskable-192.png": "1cb7d7f3082abe8fadb1556911c6d484",
"icons/Icon-maskable-512.png": "9e293e74f1ac9a9621b64910bb318cac",
"icons/Icon-512.png": "9e293e74f1ac9a9621b64910bb318cac",
"manifest.json": "9d5f1636bd58d2d82b0fe2a188269840",
"assets/AssetManifest.json": "5bc0b36403f4fc9f11d01d00db2ae7b7",
"assets/NOTICES": "9390cf4d69cfb1f4faaa5be0fdb8de0a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "ed40ab108bcc3aa81819a027aa8ec2e4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a16a035d037addef73f3d1e89e1b0cc3",
"assets/fonts/MaterialIcons-Regular.otf": "43d07944edcec569421fff5f28c54b65",
"assets/assets/background.svg": "08b6ef594fc661a110f943159a4eb054",
"assets/assets/demo/stamps/garden04.png": "94c937869bd773ab42c5c02ecb9c758d",
"assets/assets/demo/stamps/garden05.png": "88baedafb810f5f64bcb3eebca525b1b",
"assets/assets/demo/stamps/garden07.png": "6386438c85b2fe6c74057b998901a06c",
"assets/assets/demo/stamps/garden06.png": "91ca01fdc2ea42bdd58d5d258ef222b8",
"assets/assets/demo/stamps/garden02.png": "32dee10df8fc7142c2effe5d83464c5a",
"assets/assets/demo/stamps/garden03.png": "bddc2a8f076fb4b797b72555214ba887",
"assets/assets/demo/stamps/garden01.png": "3625b2e9515eabd5681cd9a13d4b2264",
"assets/assets/demo/posts/feed_02_03.jpg": "000c7f9104c16e6aeec5045773ae42ad",
"assets/assets/demo/posts/feed_02_02.jpg": "27cc2764cf448b32d7cdf56acf739d8d",
"assets/assets/demo/posts/feed_02_01.jpg": "f4cb2018181870151c595d2f915d08b5",
"assets/assets/demo/posts/feed_04_01.jpg": "e6d6962966a1d28030e4efcb60b8aecb",
"assets/assets/demo/posts/feed_04_02.jpg": "e28f9808d2cbab054f5b9d04ffa6d253",
"assets/assets/demo/posts/feed_04_03.jpg": "1f00abfc0dc8042258a6767f761e0e72",
"assets/assets/demo/posts/feed_01_02.jpg": "0573ee7f3d6ca8123701b91a728246d1",
"assets/assets/demo/posts/feed_01_01.jpg": "8fdce3d2bec3077f91e97a0bf0ad3169",
"assets/assets/demo/posts/feed_03_01.jpg": "ba95f0e074165155666980fa0dad9fd2",
"assets/assets/demo/posts/feed_03_02.jpg": "f699606a1d126ad41d5f9a8effd98f4c",
"assets/assets/demo/posts/feed_05_02.jpg": "f3e44e29d6a46f466c62beba306a7adb",
"assets/assets/demo/posts/feed_05_01.jpg": "9870e1c19240683d96c0d848ff392258",
"assets/assets/demo/gardens/garden10.jpg": "eeca42b56d5684d7183f6b3b4c41bf1a",
"assets/assets/demo/gardens/garden04.jpg": "b1d1fd9142fe0443c19ffbad555f89b4",
"assets/assets/demo/gardens/garden05.jpg": "32f0ec3972dc6fefc0f03b900f162bf1",
"assets/assets/demo/gardens/garden11.jpg": "5ab6e4e11a5999fdaf8f3098a19d9573",
"assets/assets/demo/gardens/garden07.jpg": "0e6a81c539320750727a1fc271db717c",
"assets/assets/demo/gardens/garden13.jpg": "898aa7cdbf84e62d04ae64388b46acf0",
"assets/assets/demo/gardens/garden12.jpg": "eeb297d1eee9fb044f54d38c85faf653",
"assets/assets/demo/gardens/garden06.jpg": "345247fc7f8256f7df111d3ae4788abb",
"assets/assets/demo/gardens/garden02.jpg": "489ae90dcf396ec03de57e084331c449",
"assets/assets/demo/gardens/garden16.jpg": "f7410cbfb212d2d467a6a4374b6f366e",
"assets/assets/demo/gardens/garden17.jpg": "05058854c360bd76fdb3774b7d1c1829",
"assets/assets/demo/gardens/garden03.jpg": "863a417d2bdf26b4f2d11fedbc424569",
"assets/assets/demo/gardens/garden15.jpg": "9066634394d796a68c9479489c410a45",
"assets/assets/demo/gardens/garden01.jpg": "f8a2ae4a69eec64f4824de5a6a1f9ed8",
"assets/assets/demo/gardens/garden14.jpg": "d8305c438b86df863c5052260570408e",
"assets/assets/demo/gardens/garden19.jpg": "43c6bb0bdfe1eba704dc1907d174d89a",
"assets/assets/demo/gardens/garden24.jpg": "ce752fe9516ca79d1e3409e2dc14cfb4",
"assets/assets/demo/gardens/garden18.jpg": "943849fcd7f5b0d8e558c6b7d7733ab0",
"assets/assets/demo/gardens/garden23.jpg": "482760282ccce94a58d40196e6450ad3",
"assets/assets/demo/gardens/garden22.jpg": "41de2603a940a7d36001a0e579c7f800",
"assets/assets/demo/gardens/garden20.jpg": "4ba202c1f8c799d01ceaa129a6dd1331",
"assets/assets/demo/gardens/garden08.jpg": "3323f24fb9d35e49e505e21342583ba2",
"assets/assets/demo/gardens/garden09.jpg": "257b42abdb3dc5a9c305e1c361f46a83",
"assets/assets/demo/gardens/garden21.jpg": "3ea132ecf4caa603a31533f9738b9ba1",
"assets/assets/demo/events/260620_1.jpg": "692c2af28caaae0327fb59714146e2ae",
"assets/assets/demo/events/260619_1.jpg": "dca6330314fae1c5a91286ca3bc02bd2",
"assets/assets/demo/events/260919_1.jpg": "5314abf7a0e911da3afec961dfc37d71",
"assets/assets/flower_test.jfif": "75e39ecba80195687f389dae4a138fe5",
"assets/assets/icon_stamp.svg": "a5989e9df45cba3971f72e2036a99ec6",
"assets/assets/icon_menu.svg": "4f3d90de96cf08d914f682b612fac4bc",
"assets/assets/title.png": "3a94806d857049a67fa2136687fcbfc3",
"assets/assets/app_icon.png": "e9549126219236461fffb06e183a1669",
"assets/assets/qr_scan.svg": "c1a6547e456367ef0f11acd119d63a9a",
"assets/assets/hitorihitohana_logo.png": "8b6ea7501a5f6f2a2adf313733584cc4",
"assets/assets/lock.svg": "786dee8cff9d62feb4b276de028a1707",
"assets/assets/flower/flower7.webp": "41b8bb09a17b32808cb40a28f708fe75",
"assets/assets/flower/flower5.png": "1e3caa6eeb75d9925a185d7924d35f27",
"assets/assets/flower/flower6.webp": "1bad16d9a1c2a22a3579f51c5b15322d",
"assets/assets/flower/flower1.png": "a9ded60b5b3e1c11571260fe9eb0def2",
"assets/assets/flower/flower2.png": "93adfd8e49b0f8beffb56cef52c606f6",
"assets/assets/flower/flower3.png": "309eea366994b0034045341f063eaf84",
"assets/assets/flower/flower11.webp": "0f73d26fc9bc109233d03d38fab2852a",
"assets/assets/flower/flower1.webp": "95732f92af0d3db48826f3a8bd1b3a1e",
"assets/assets/flower/flower10.webp": "2c9d6ed0fa16349017807fa065e83f56",
"assets/assets/flower/flower3.webp": "2392a337021fafafdf4792e6db21cb78",
"assets/assets/flower/flower10.png": "9b54c50c43d1beb5387d672751c07c24",
"assets/assets/flower/flower12.webp": "ac1df4c9dbd36b4672215c8296eb3ac8",
"assets/assets/flower/flower2.webp": "6359f42c493c6a7edbb7f147b7c74c52",
"assets/assets/flower/flower9.webp": "0cd77d309f1e44b512df12ad96bd0f68",
"assets/assets/flower/flower5.webp": "dabef611b46d294aaeca4e721c3921ec",
"assets/assets/flower/flower8.png": "43b5d5401deda126118366b8f28bfe37",
"assets/assets/flower/flower4.webp": "b5cda41f3ea7e08cef552ab65d7585f4",
"assets/assets/flower/flower8.webp": "7875523e8146bba7e4b1a4172bb08a6e",
"assets/assets/subtitle.png": "b2538ecabdfc772d917854c9a297ec2e",
"assets/assets/heart.png": "a108558914e06dfa3da44018d9bba71e",
"assets/assets/background_paper.png": "486df6d59fb0da419655d7b6d9d9edb2",
"assets/assets/icon_event.svg": "f9f410805fc9ac93b8867aa7d7ca5d72",
"assets/assets/noto.svg": "fa457b0d4420e31403d3a520ea9fa448",
"assets/assets/icon_post.svg": "d8ed8fe24cca1eb2ae329112277aac62",
"assets/assets/sentence/garden_bun.png": "fe93c2bbbcb019601f67e8ad1c7b5316",
"assets/assets/sentence/login.png": "6f2dddff755d27bd0b0ec4a34658dd48",
"assets/assets/sentence/event_wad.png": "161e786f5f364f93679c8dd3a0643c14",
"assets/assets/sentence/get.png": "57f0d4718b015eb3290ff71252a66b77",
"assets/assets/sentence/garden_share.png": "976a3f87bc1e3da42071de954d204d4d",
"assets/assets/sentence/home.png": "07b877f4f25f6ae801951627a7b9d8d3",
"assets/assets/sentence/login_bun.svg": "2898b6f97812fefc21f9d7e3c65168a6",
"assets/assets/sentence/garden.png": "02df7090e1221ef2b24acec2459666ea",
"assets/assets/sentence/qr_bun.png": "9620c5bd29a6ffd64326796ef6d2fecd",
"assets/assets/comment.png": "ccc92c6151a616bd4dab06a0032d1466",
"assets/assets/icons/home_thin.svg": "6b633d227db582368c6a5e1e00cba6b9",
"assets/assets/icons/user.svg": "b6bdd55ce14c7f4402ccac96de4063db",
"assets/assets/icons/home.svg": "e4081130a119a1ba8d69e8feb90e793f",
"assets/assets/icons/stamp_thin.svg": "228f1899562661c9e2f92f178fc9bda5",
"assets/assets/icons/news_thin.svg": "3c3e1c98a71700afee6daa0fd54f2e32",
"assets/assets/icons/post.svg": "ebae3e33e41f948e14b547580c4709b5",
"assets/assets/icons/home_notext.svg": "4a23cfdc7733b4c3d923593999222ae3",
"assets/assets/icons/pin.svg": "07c584892b4f3502c98b89e8ead68fb1",
"assets/assets/icons/menu_bar.svg": "2fb9d3d256185708ba06e0ca863ea9dd",
"assets/assets/icons/event.svg": "22bd9c90b7d93ab190906046a8a99bf0",
"assets/assets/icons/news.svg": "4b0bbb9ab3de100f0b52d0486f79fae7",
"assets/assets/icons/event_notext.svg": "f57d193b739527ee6df214315634a8ca",
"assets/assets/icons/qr.svg": "47171e2e56da2bb8bbcde9597bd56b02",
"assets/assets/icons/view_thin.svg": "fdfef15b0c850da9e7eba6a9f5ad5a20",
"assets/assets/icons/event_thin.svg": "68549cc3d03dcda686875466cfd54218",
"assets/assets/icons/view.svg": "af67b3839ad22e2bf69041a49937b27d",
"assets/assets/icons/stamp_notext.svg": "474e432a9cf9dc6895fdec752558c691",
"assets/assets/icons/view_notext.svg": "a120fee70ab4fe519fff809df29e6110",
"assets/assets/icons/news_notext.svg": "a84bb4502de96f13dbc0434632d80899",
"assets/assets/icons/post_notext.svg": "08a446ec8fc10a293172bbf3b14cc061",
"assets/assets/icons/stamp.svg": "74655de5d40cf877c68ae60343090d2a",
"assets/assets/noto_shape.svg": "1f8d98d90547050c88ddbba9627aeec3",
"assets/assets/city_button.svg": "587bf12e02abea77594b5b195812ffdf",
"assets/assets/leaf.png": "f7a3b8fcfb4cf99b4e8ca48f541ac744",
"assets/assets/view_button.svg": "17d0fb718a5e63b5106ca3bd413f5dbe",
"assets/assets/welcome_message/message01.png": "7974e0a4efcf2b714c45e7aaa84df7f2",
"assets/assets/add_pic.svg": "4ce9265179b679e560044bb22c553daf",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
