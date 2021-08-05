// Base Service Worker implementation.  To use your own Service Worker, set the PWA_SERVICE_WORKER_PATH variable in settings.py
// workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

var staticCacheName = 'django-pwa-v' + new Date().getTime()
var dynamicCacheName = 'django-pwa-dynamic-v' + new Date().getTime()
var filesToCache = ['/', '/offline/']

// Cache on install
self.addEventListener('install', (event) => {
  console.warn('[service worker] install')
  console.warn('[service worker] static caching')
  this.skipWaiting()
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache)
    })
  )
})

// Clear cache on activate
self.addEventListener('activate', (event) => {
  console.warn('[service worker] activate')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('django-pwa-'))
          .filter((cacheName) => cacheName !== staticCacheName && cacheName !== dynamicCacheName)
          .map((cacheName) => caches.delete(cacheName))
      )
    })
  )
})

// Serve from Cache
self.addEventListener('fetch', (event) => {
  console.warn('[service worker] fetch')
  event.respondWith(
    caches.open(dynamicCacheName).then(function (cache) {
      console.warn('[service worker] opening dynamic cache')
      return fetch(event.request)
        .then(function (res) {
          if (!(event.request.url.indexOf('http') === 0) || event.request.method !== 'GET') {
            return Promise.resolve(res)
          } else {
            console.warn(`[service worker] save to cache (dynamic). url: ${event.request.url}`)
            cache.put(event.request, res.clone())
            return res
          }
        })
        .catch(function (err) {
          console.warn(`[service worker] request to internet failed (${event.request.url}), returning data from cache`)
          return caches.match(event.request).catch(function (err) {
            return caches.match('/offline/')
          })
        })
    })
  )
})
