self.addEventListener('install', function(event) {
    event.waitUntil(preLoad());
});

var preLoad = function() {
    console.log('Installing roll a dice app...');

    return caches.open('offline').then(function(cache) {
        return cache.addAll([
            '/assets', 'index.html',
        ]);
    });
};
