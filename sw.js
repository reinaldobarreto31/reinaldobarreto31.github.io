const CACHE_NAME = 'reinaldo-portfolio-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.webmanifest'
];

// On install: cache only essentials and skip waiting immediately
self.addEventListener('install', event => {
  self.skipWaiting(); // take over immediately, don't wait for old SW to die
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// On activate: delete ALL old caches and claim all open tabs immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ).then(() => self.clients.claim()) // take control of all open tabs
  );
});

// Fetch: network first for HTML, cache fallback for assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Always go to network for HTML (never serve stale index.html)
  if (event.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Cache-first for static assets (JS, CSS, images)
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
