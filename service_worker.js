self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('streamlit-pwa').then(function(cache) {
        return cache.addAll([
          '/',
          '/static',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  