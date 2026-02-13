import { useState, useRef, useCallback } from "react";

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      if (node) {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(node);
        observerRef.current = observer;
      }
    },
    [options],
  );

  return { ref, isIntersecting };
}
