const cacheName = 'raju-kirana-v1';
const assets = ['/', 'index.html', 'manifest.json'];

self.addEventListener('install', evt => {
    evt.waitUntil(caches.open(cacheName).then(cache => {
        cache.addAll(assets);
    }));
});

self.addEventListener('fetch', evt => {
    evt.respondWith(caches.match(evt.request).then(res => {
        return res || fetch(evt.request);
    }));
});