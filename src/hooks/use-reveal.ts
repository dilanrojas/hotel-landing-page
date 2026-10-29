import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element the first time it enters the viewport.
 * The observer is disconnected after the first intersection, so the
 * animation never plays again when the user scrolls back.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
