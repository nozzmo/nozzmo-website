import { useEffect, useRef, useState } from "react";


const useIsVisible = <T extends Element>(threshold: number = 0.1) => {
  const isVisibleRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    if (isVisibleRef.current) {
      observer.observe(isVisibleRef.current);
    }

    return () => {
      if (isVisibleRef.current) {
        observer.unobserve(isVisibleRef.current);
      }
    };
  }, [isVisibleRef]);

  return { isVisible, isVisibleRef };
}

export default useIsVisible;