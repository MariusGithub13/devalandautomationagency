// Service Worker Registration
// This optional code is used to register a service worker for offline capabilities

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

export function register(config) {
  if ('serviceWorker' in navigator) {
    // Use requestIdleCallback to register service worker when browser is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        registerValidSW('/service-worker.js', config);
      });
    } else {
      window.addEventListener('load', () => {
        registerValidSW('/service-worker.js', config);
      });
    }
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content available, reload page
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Content cached for offline use
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error during service worker registration:', error);
      }
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.error(error.message);
        }
      });
  }
}
