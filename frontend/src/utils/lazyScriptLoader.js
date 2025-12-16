/**
 * Lazy Script Loader Utility
 * 
 * Loads third-party scripts after user interaction (scroll, touch, click)
 * or after a timeout, whichever comes first. This improves PageSpeed scores
 * by deferring non-critical resources.
 * 
 * Usage:
 * ```javascript
 * import { loadScriptOnInteraction } from '@/utils/lazyScriptLoader';
 * 
 * useEffect(() => {
 *   loadScriptOnInteraction({
 *     src: 'https://example.com/script.js',
 *     id: 'my-script',
 *     onLoad: () => console.log('Script loaded'),
 *     timeout: 5000
 *   });
 * }, []);
 * ```
 */

/**
 * Load a script after user interaction or timeout
 * @param {Object} options - Configuration options
 * @param {string} options.src - Script URL
 * @param {string} options.id - Unique script ID (prevents duplicates)
 * @param {Function} options.onLoad - Callback when script loads
 * @param {Function} options.onError - Callback on error
 * @param {number} options.timeout - Fallback timeout in ms (default: 5000)
 * @param {Object} options.attributes - Additional script attributes
 * @returns {Function} Cleanup function
 */
export function loadScriptOnInteraction({
  src,
  id,
  onLoad,
  onError,
  timeout = 5000,
  attributes = {}
}) {
  // Check if script already exists
  if (id && document.getElementById(id)) {
    if (onLoad) onLoad();
    return () => {};
  }

  let loaded = false;
  let timeoutId = null;
  const events = ['scroll', 'touchstart', 'mousedown', 'keydown'];

  const loadScript = () => {
    if (loaded) return;
    loaded = true;

    // Clear timeout and remove event listeners
    if (timeoutId) clearTimeout(timeoutId);
    events.forEach(event => {
      window.removeEventListener(event, loadScript, { passive: true });
    });

    // Create and inject script
    const script = document.createElement('script');
    if (id) script.id = id;
    script.src = src;
    script.async = true;

    // Add custom attributes
    Object.keys(attributes).forEach(key => {
      script.setAttribute(key, attributes[key]);
    });

    // Set callbacks
    if (onLoad) script.onload = onLoad;
    if (onError) script.onerror = onError;

    document.body.appendChild(script);

    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ Lazy loaded script: ${src}`);
    }
  };

  // Add event listeners for user interaction
  events.forEach(event => {
    window.addEventListener(event, loadScript, { passive: true, once: true });
  });

  // Fallback timeout
  timeoutId = setTimeout(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`⏱️ Timeout reached, loading script: ${src}`);
    }
    loadScript();
  }, timeout);

  // Return cleanup function
  return () => {
    if (timeoutId) clearTimeout(timeoutId);
    events.forEach(event => {
      window.removeEventListener(event, loadScript, { passive: true });
    });
  };
}

/**
 * Load script using requestIdleCallback with fallback
 * Best for low-priority scripts that don't need user interaction
 * @param {Object} options - Same as loadScriptOnInteraction
 * @returns {Function} Cleanup function
 */
export function loadScriptOnIdle({
  src,
  id,
  onLoad,
  onError,
  timeout = 3000,
  attributes = {}
}) {
  // Check if script already exists
  if (id && document.getElementById(id)) {
    if (onLoad) onLoad();
    return () => {};
  }

  const loadScript = () => {
    const script = document.createElement('script');
    if (id) script.id = id;
    script.src = src;
    script.async = true;

    // Add custom attributes
    Object.keys(attributes).forEach(key => {
      script.setAttribute(key, attributes[key]);
    });

    if (onLoad) script.onload = onLoad;
    if (onError) script.onerror = onError;

    document.body.appendChild(script);

    if (process.env.NODE_ENV === 'development') {
      console.log(`✅ Idle loaded script: ${src}`);
    }
  };

  // Use requestIdleCallback if available
  if ('requestIdleCallback' in window) {
    const callbackId = requestIdleCallback(loadScript, { timeout });
    return () => cancelIdleCallback(callbackId);
  } else {
    // Fallback to setTimeout
    const timeoutId = setTimeout(loadScript, timeout);
    return () => clearTimeout(timeoutId);
  }
}

/**
 * Load multiple scripts in sequence
 * @param {Array<Object>} scripts - Array of script configs
 * @param {Function} onComplete - Callback when all scripts loaded
 * @returns {Function} Cleanup function
 */
export function loadScriptsSequentially(scripts, onComplete) {
  let index = 0;
  const cleanupFns = [];

  const loadNext = () => {
    if (index >= scripts.length) {
      if (onComplete) onComplete();
      return;
    }

    const script = scripts[index];
    index++;

    const originalOnLoad = script.onLoad;
    const cleanup = loadScriptOnIdle({
      ...script,
      onLoad: () => {
        if (originalOnLoad) originalOnLoad();
        loadNext();
      }
    });

    cleanupFns.push(cleanup);
  };

  loadNext();

  return () => {
    cleanupFns.forEach(fn => fn());
  };
}

export default {
  loadScriptOnInteraction,
  loadScriptOnIdle,
  loadScriptsSequentially
};
