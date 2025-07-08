
const CACHE_NAME = 'portfolio-v2';
const ASSETS = [
  '/',
  'index.html',
  'a-propos.html',
  'messages.html',
  'competences.html',
  'contact.html',
  'projets.html',
  'style.css',
  'script.js',
  'Tpe/index.html',
  'Tpe/style.css',
  'Tpe/script.js'
  'icon-192.png',
  'icon-512.png'
  // Ajoutez TOUTES les routes nécessaires
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
});

self.addEventListener('fetch', (e) => {
if (e.request.mode === 'navigate') {
  e.respondWith(
    caches.match(e.request.url)
      .then(response => response || fetch(e.request))
      .catch(() => caches.match('/offline.html'))
  );
}
});
