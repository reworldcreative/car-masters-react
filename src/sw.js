const cacheName = "my-cache";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/app.js",
        "/fonts/Gilroy-Bold.woff2",
        "/fonts/Gilroy-Bold.eot",
        "/fonts/Gilroy-Bold.ttf",
        "/fonts/Gilroy-ExtraBold.woff2",
        "/fonts/Gilroy-ExtraBold.eot",
        "/fonts/Gilroy-ExtraBold.ttf",
        "/fonts/Gilroy-Medium.woff2",
        "/fonts/Gilroy-Medium.eot",
        "/fonts/Gilroy-Medium.ttf",
        "/fonts/Gilroy-Regular.woff2",
        "/fonts/Gilroy-Regular.eot",
        "/fonts/Gilroy-Regular.ttf",
        "/fonts/Gilroy-SemiBold.woff2",
        "/fonts/Gilroy-SemiBold.eot",
        "/fonts/Gilroy-SemiBold.ttf",
        "/img/logo/logo.svg",
        // Додайте файли, які ви хочете кешувати
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});