import { useEffect, useRef, useState } from "react";


const useIsVisible = <T extends Element>(threshold: number = 0.1, onlyFirsttime: boolean = true) => {
  const isVisibleRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!onlyFirsttime) {
          setIsVisible(entry.isIntersecting);
        } else {
          if (!isVisible && entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
            observer.unobserve(entry.target);
          }
        }
      },
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
  }, [isVisibleRef, threshold, onlyFirsttime]);

  return { isVisible, isVisibleRef };
}

export default useIsVisible;