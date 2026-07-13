const CACHE_PREFIX = "citronex-zgorzelec-bogatynia-szkolenie-";
const CACHE_NAME = CACHE_PREFIX + "20260713-polskie-pomidory-logo1";

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
  "./assets/css/training.css?v=20260713-polskie-pomidory-logo1",
  "./assets/js/training-data.js?v=20260713-polskie-pomidory-logo1",
  "./assets/js/location-custom.js?v=20260713-polskie-pomidory-logo1",
  "./assets/js/training-app.js?v=20260713-polskie-pomidory-logo1",
  "./assets/brand/polskie-pomidory-logo.png",
  "./assets/brand/polskie-pomidory-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(CORE_ASSETS.map(async (asset) => {
      try {
        await cache.add(new Request(asset, { cache: "reload" }));
      } catch (error) {
        // Offline cache stays resilient if a non-critical asset fails.
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((name) => {
      if ((name.startsWith(CACHE_PREFIX) || name.startsWith("citronex-siechnice-training-")) && name !== CACHE_NAME) {
        return caches.delete(name);
      }
      return Promise.resolve();
    }));
    await self.clients.claim();
  })());
});

async function putInCache(request, response) {
  if (!response || !response.ok) return;
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    await putInCache(request, response);
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    return cached || caches.match("./index.html");
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  await putInCache(request, response);
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  const accept = request.headers.get("accept") || "";
  if (request.mode === "navigate" || accept.includes("text/html")) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (["script", "style", "worker"].includes(request.destination)) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});



