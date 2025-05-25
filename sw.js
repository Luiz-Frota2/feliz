const CACHE_NAME = 'aniversario-amor-v1';
const ASSETS = [
  '/seu-repositorio/',  // Substitua pelo nome do seu repositório
  '/seu-repositorio/index.html',
  '/seu-repositorio/amor_puro.mp3',
  '/seu-repositorio/amor.jpg',
  '/seu-repositorio/icons/icon-192x192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
