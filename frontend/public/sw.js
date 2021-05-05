self.addEventListener('install', evt => {
    // console.log('Service Worker has been installed', evt)
})

self.addEventListener('activate', evt => {
    // console.log('Service Worker has been activated', evt)
})

self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)
})