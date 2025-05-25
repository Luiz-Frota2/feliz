zconst CACHE_NAME = 'aniversario-amor-v1';
const ASSETS = [
  '/feliz/',  // Substitua pelo nome do seu repositório
  '/feliz/index.html',
  '/feliz/amor_puro.mp3',
  '/feliz/amor.jpg',
  '/feliz/icone.png'
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
