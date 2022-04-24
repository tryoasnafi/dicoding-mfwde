import 'regenerator-runtime/runtime';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { setCacheNameDetails } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import CONFIG from './global/config';

setCacheNameDetails({
  prefix: CONFIG.CACHE_NAME,
  suffix: `v${CONFIG.CACHE_VERSION}`,
  precache: 'precache',
  runtime: 'runtime',
});

// Cache all static files first
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new StaleWhileRevalidate({
    cacheName: 'dicoding-api-restaurant-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'style'
    || request.destination === 'script'
    || request.destination === 'worker',
  new StaleWhileRevalidate({
    cacheName: `${CONFIG.CACHE_NAME}-assets`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: `${CONFIG.CACHE_NAME}-images`,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({ maxEntries: 20 }),
    ],
  }),
);

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
