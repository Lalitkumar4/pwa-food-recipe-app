# Food Recipe App (PWA)

This app is a Progressive Web App.

[Live Demo]()

## 🚀 Features

- `Installable`- The app can be installed from the home screen of the user's device. Service workers and the web app manifest enable this.
- `Launch Screen`- The app offers a smooth experience when used from the home screen, showcasing a personalized launch screen. The web app manifest file defines the launch screen.
- `Offline Access`- In order to enable users to access their recipes even while they are offline, the app leverages service workers to cache essential files.
- `Offline Fallback Page`- If a user tries to access a page that hasn't been cached while offline, the app displays an offline fallback page informing the user that the content is unavailable until the connection is restored.

### ⚙️ Service Worker

> This service worker provides caching and offline support for a progressive web app (PWA).

### Service Worker Features

- Installs a static cache for app shell assets, like as HTML, CSS, JS, images, etc., during the installation of the service worker.
- Uses a cache limit function to set a maximum of 15 entries for the dynamic cache. When the limit is reached, older cache entries are removed.
- Enhances the dynamic cache during runtime with fetched resources. As a result, while the user is offline, pages can be provided from the cache.
- Provides a fallback page for offline HTML requests.
- Deletes outdated cache versions during activation.

`Static Cache`

This allows the app to serve static assets from cache without making network requests.

`Dynamic Cache`

This cache is used to store fetched network responses at runtime. The fetch handler checks this cache first before making network request. This allows pages to be served from cache when offline. The limitCacheSize method limits the cache to 15 entries by deleting the oldest entry when limit is reached.

`Fallback Page`

When the service worker is unable to serve an HTML page from cache or network, it will serve the fallback page /pages/fallback.html instead. This provides a custom offline page.

`Cache Management`

In order to avoid using out-of-date caches, the service worker clears out previous cache versions during activation. This gives the app offline functionality and basic caching. Further improvements can be made to the service worker to include capabilities like background sync and syncing.
