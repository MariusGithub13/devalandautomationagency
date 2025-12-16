// frontend/src/hooks/useDeferredLoad.js
// Custom hook to defer loading of third-party scripts until user interaction or timeout
// This significantly improves FCP and LCP by not blocking critical rendering path

import { useState, useEffect } from 'react';

/**
 * Hook to defer loading until user interaction (scroll, touch, mouse) or timeout
 * @param {number} timeout - Milliseconds to wait before loading (default: 5000)
 * @returns {boolean} - True when it's time to load
 */
export const useDeferredLoad = (timeout = 5000) => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // If already triggered, don't set up listeners
    if (shouldLoad) return;

    let timeoutId;
    let triggered = false;

    const triggerLoad = () => {
      if (!triggered) {
        triggered = true;
        setShouldLoad(true);
        cleanup();
      }
    };

    // User interaction events that indicate engagement
    const events = ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'];
    
    events.forEach(event => {
      window.addEventListener(event, triggerLoad, { once: true, passive: true });
    });

    // Fallback timeout - load after specified time regardless of interaction
    timeoutId = setTimeout(triggerLoad, timeout);

    const cleanup = () => {
      if (timeoutId) clearTimeout(timeoutId);
      events.forEach(event => {
        window.removeEventListener(event, triggerLoad);
      });
    };

    return cleanup;
  }, [shouldLoad, timeout]);

  return shouldLoad;
};

/**
 * Hook to load script only when browser is idle
 * Uses requestIdleCallback for optimal performance
 * @param {number} timeout - Fallback timeout if requestIdleCallback not supported
 * @returns {boolean} - True when it's time to load
 */
export const useIdleLoad = (timeout = 3000) => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    let timeoutId;

    const triggerLoad = () => {
      setShouldLoad(true);
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(triggerLoad, { timeout });
    } else {
      // Fallback for browsers without requestIdleCallback
      timeoutId = setTimeout(triggerLoad, timeout);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [shouldLoad, timeout]);

  return shouldLoad;
};
