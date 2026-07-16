const CACHE_PREFIX = "citronex-zgorzelec-bogatynia-szkolenie-";
const CACHE_NAME = CACHE_PREFIX + "20260716-browser-lang1-zb";

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
  "./assets/css/training.css?v=20260716-browser-lang1-zb",
  "./assets/js/training-data.js?v=20260716-browser-lang1-zb",
  "./assets/js/location-custom.js?v=20260716-browser-lang1-zb",
  "./assets/js/training-app.js?v=20260716-browser-lang1-zb",
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

function networkTimeout(ms = 1400) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), ms);
  });
}

async function cacheMatch(cache, request, fallback = null) {
  const cached = await cache.match(request, { ignoreSearch: true }) || await caches.match(request, { ignoreSearch: true });
  if (cached) return cached;
  if (!fallback) return null;
  return cache.match(fallback, { ignoreSearch: true }) || caches.match(fallback, { ignoreSearch: true });
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const accept = event.request.headers.get("accept") || "";
    const fallback = event.request.mode === "navigate" || accept.includes("text/html") ? "./index.html" : null;
    const cached = await cacheMatch(cache, event.request, null);
    if (cached) {
      fetch(event.request).then((response) => {
        if (response && response.ok) cache.put(event.request, response.clone());
      }).catch(() => {});
      return cached;
    }
    try {
      const response = await Promise.race([fetch(event.request), networkTimeout()]);
      if (!response) return await cacheMatch(cache, event.request, fallback) || Response.error();
      if (response && response.ok) {
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (error) {
      return await cacheMatch(cache, event.request, fallback) || Response.error();
    }
  })());
});

