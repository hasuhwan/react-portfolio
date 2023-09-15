import { useState, useEffect } from "react";
import type { RefObject } from "react";
export default function useIntersectionObserver(
  target: RefObject<HTMLDivElement>,
  threshold = 0.5
) {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!target.current) {
      return;
    }
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        }
      });
    };
    const options = { root: null, rootMargin: "0px", threshold: threshold };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  });

  return isInViewport;
}
