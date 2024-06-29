'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0c33c90d3fff884cef30b050cef15c67",
"assets/AssetManifest.bin.json": "823ce7874576f69b791247f6573bbc1d",
"assets/AssetManifest.json": "e10af80631a7f62bd7fd60da8ca72891",
"assets/FontManifest.json": "8e78d8a0cda30f10e6c58029fb4be369",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/assets/fonts/HT_Pizzeria_W01_Regular.ttf": "6f082a08b8eb9dbb968c2ddce5993666",
"assets/lib/assets/fonts/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/lib/assets/fonts/Quicksand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/lib/assets/images/avatar.png": "2d5e34b805810a325d5f7e1c0c91ebe5",
"assets/lib/assets/images/Back.png": "868945bfcb4903e25336760271fc795a",
"assets/lib/assets/images/background.png": "400a5f51d0e818b8bd77f68bc2731d68",
"assets/lib/assets/images/baked.png": "8bea8bbee9a6f211680e81283ed7006b",
"assets/lib/assets/images/bgDetails.png": "0fa4aec2f8e070fc7688980a1b9fce3d",
"assets/lib/assets/images/donut1.png": "cbeca90185a93c400e20dcb054bad393",
"assets/lib/assets/images/donut2.png": "318e92d4291e6a800a4caf564682a43a",
"assets/lib/assets/images/donut3.png": "6c9b6a070d09123fd9471e84999b45cc",
"assets/lib/assets/images/donut4.png": "ab16a5b8fc9aa590b92fc1e8d8a73740",
"assets/lib/assets/images/donut5.png": "553788df84489c2e66bbaf8ba0c338e5",
"assets/lib/assets/images/donut6.png": "255a6170b6cd85107c712106a70dee4a",
"assets/lib/assets/images/donuts.png": "f0ee011dabb6d8de52167c2c313f46aa",
"assets/lib/assets/images/donuts2.png": "3151bfdf0b01f99b24f9f927569d70ed",
"assets/lib/assets/images/fbIcon.png": "15fbfbf750638811b33e208c6ee40d8c",
"assets/lib/assets/images/Front.png": "01c198c9ca01884b97baa4af71ba00fa",
"assets/lib%255Cassets%255Cimages%255Cavatar.png": "2d5e34b805810a325d5f7e1c0c91ebe5",
"assets/lib%255Cassets%255Cimages%255CBack.png": "868945bfcb4903e25336760271fc795a",
"assets/lib%255Cassets%255Cimages%255Cbackground.png": "400a5f51d0e818b8bd77f68bc2731d68",
"assets/lib%255Cassets%255Cimages%255Cbaked.png": "8bea8bbee9a6f211680e81283ed7006b",
"assets/lib%255Cassets%255Cimages%255CbgDetails.png": "0fa4aec2f8e070fc7688980a1b9fce3d",
"assets/lib%255Cassets%255Cimages%255Cdonut1.png": "cbeca90185a93c400e20dcb054bad393",
"assets/lib%255Cassets%255Cimages%255Cdonut2.png": "318e92d4291e6a800a4caf564682a43a",
"assets/lib%255Cassets%255Cimages%255Cdonut3.png": "6c9b6a070d09123fd9471e84999b45cc",
"assets/lib%255Cassets%255Cimages%255Cdonut4.png": "ab16a5b8fc9aa590b92fc1e8d8a73740",
"assets/lib%255Cassets%255Cimages%255Cdonut5.png": "553788df84489c2e66bbaf8ba0c338e5",
"assets/lib%255Cassets%255Cimages%255Cdonut6.png": "255a6170b6cd85107c712106a70dee4a",
"assets/lib%255Cassets%255Cimages%255Cdonuts.png": "f0ee011dabb6d8de52167c2c313f46aa",
"assets/lib%255Cassets%255Cimages%255Cdonuts2.png": "3151bfdf0b01f99b24f9f927569d70ed",
"assets/lib%255Cassets%255Cimages%255CfbIcon.png": "15fbfbf750638811b33e208c6ee40d8c",
"assets/lib%255Cassets%255Cimages%255CFront.png": "01c198c9ca01884b97baa4af71ba00fa",
"assets/NOTICES": "31d7924f0826f20df5aec37ec4636018",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4aa0338849f2fefd576a94d4b97ff115",
"/": "4aa0338849f2fefd576a94d4b97ff115",
"main.dart.js": "7bd32c6abd1501de7deb0636b6e83452",
"manifest.json": "966b5a129f485970e3850c8cd90a684f",
"version.json": "e17c7cd6f6807ded9ac1c4c0d003f1aa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
