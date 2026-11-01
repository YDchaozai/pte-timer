const CACHE='pte-timer-v231-20261101';
const CORE=['./','./index.html','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png','./assets/adventure-banner.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('pte-timer-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;let u=new URL(e.request.url);if(u.origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){let c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c))}return r}).catch(()=>caches.match(e.request)))});
