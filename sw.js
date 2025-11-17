const CACHE_NAME = 'medical-hub-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
