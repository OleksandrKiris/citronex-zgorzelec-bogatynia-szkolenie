const CACHE_PREFIX = "citronex-zgorzelec-bogatynia-szkolenie-";
const CACHE_NAME = CACHE_PREFIX + "20260715-frontend-clarity4-zb";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./mapa.html",
  "./magazyn.html",
  "./tablet.html",
  "./szklarnia.html",
  "./reader.html",
  "./lekarz.html",
  "./kontakty.html",
  "./grupy.html",
  "./miasto.html",
  "./mowa.html",
  "./slownik.html",
  "./zakazy.html",
  "./test.html",
  "./manifest.webmanifest",
  "./assets/css/training.css?v=20260715-frontend-clarity4-zb",
  "./assets/js/training-data.js?v=20260715-frontend-clarity4-zb",
  "./assets/js/location-custom.js?v=20260715-frontend-clarity4-zb",
  "./assets/js/training-app.js?v=20260715-frontend-clarity4-zb",
  "./assets/brand/polskie-pomidory-logo.png",
  "./assets/brand/polskie-pomidory-icon.png",
  "./assets/orientation/sklarnia-etap-excel.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(CORE_ASSETS.map(async (asset) => {
      try {
        await cache.add(new Request(asset, { cache: "reload" }));
      } catch (error) {
        // One missing optional asset cannot block the whole offline cache.
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response && response.ok) {
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (error) {
      return cache.match("./index.html");
    }
  })());
});

