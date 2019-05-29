var toCache = ['index.html', 'manifest.webmanifest', 'iconX.png', 'camera.png'];
var version = 'smallr-lens-v1'

self.addEventListener('install', e => {
    console.log('[ServiceWorker] Installed');
    e.waitUntil(
	    caches.open(version).then(function(cache) {
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(toCache);
	    })
	);
});

self.addEventListener('fetch', e => {
    var req = e.request;
    if(caches.match(req)){
        console.log('Caches');
    }
});
