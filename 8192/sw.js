const basePath = "/8192";

const version = "1.14",
    preCache = "PRECACHE-" + version,
    cacheList = [
        basePath + "/",
        basePath + "/style/main.css",
        basePath + "/style/bootstrap.min.css",
        basePath + "/style/animate.min.css",
        basePath + "/js/keyboard_input_manager.js",
        basePath + "/js/html_actuator.js",
        basePath + "/js/grid.js",
        basePath + "/js/tile.js",
        basePath + "/js/local_storage_manager.js",
        basePath + "/js/game_manager.js",
        basePath + "/js/application.js"
    ];

/*  Service Worker Event Handlers */

self.addEventListener( "install", function ( event ) {

    console.log( "Installing the service worker!" );

    self.skipWaiting();

    caches.open( preCache )
        .then( cache => {

            cache.addAll( cacheList );

        } );

} );

self.addEventListener( "activate", function ( event ) {

    event.waitUntil(

        caches.keys().then( cacheNames => {
            cacheNames.forEach( value => {

                if ( value.indexOf( version ) < 0 ) {
                    caches.delete( value );
                }

            } );

            console.log( "service worker activated" );

            return;

        } )

    );

} );

self.addEventListener( "fetch", function ( event ) {

    event.respondWith(

        caches.match( event.request )
        .then( function ( response ) {

            if ( response ) {
                return response;
            }

            return fetch( event.request );
        } )
    );

} );