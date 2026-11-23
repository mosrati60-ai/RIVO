
const CACHE_NAME = 'RIVO-shell-v3';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './taximoto-background.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();

    await Promise.all(
      keys
        .filter((key) =>
          key.startsWith('taxi-moto-tunisia-shell-') &&
          key !== CACHE_NAME
        )
        .map((key) => caches.delete(key))
    );

    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (
    request.method !== 'GET' ||
    url.origin !== self.location.origin
  ) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, {
          cache: 'no-store'
        });

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put('./index.html', response.clone());
        }

        return response;
      } catch (error) {
        const cache = await caches.open(CACHE_NAME);
        return (
          await cache.match('./index.html') ||
          await cache.match('./') ||
          Response.error()
        );
      }
    })());

    return;
  }

  if (
    /\/(manifest\.webmanifest|icons\/icon-(192|512)\.png|taximoto-background\.jpg)$/
      .test(url.pathname)
  ) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);

      try {
        const response = await fetch(request, {
          cache: 'no-store'
        });

        if (response.ok) {
          await cache.put(request, response.clone());
        }

        return response;
      } catch (error) {
        return (await cache.match(request)) || Response.error();
      }
    })());
  }
});
