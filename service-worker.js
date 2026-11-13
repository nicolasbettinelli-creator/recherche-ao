const CACHE_NAME = "recherche-ao-v2026-preparation-1";
const FILES_TO_CACHE = [
  "./", "./index.html", "./a-propos.html", "./style.css",
  "./script.js", "./data.js", "./mise-a-jour-ao-2026.js", "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(name => name.startsWith("recherche-ao-") && name !== CACHE_NAME).map(name => caches.delete(name))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  // Privilégier la dernière version lorsqu'une connexion est disponible.
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok) {
        const copie = response.clone();
        event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.put(event.request, copie)));
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || (event.request.mode === "navigate" ? caches.match("./index.html") : Response.error())))
  );
});
