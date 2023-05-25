import { useEffect, useRef, useState } from "react";


const useMouseOver = <T extends Element>() => {
  const isOverRef = useRef<T | null>(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const setIsOverTrue = () => setIsOver(true);
    const setIsOveFalse = () => setIsOver(false);

    if (isOverRef.current) {
      isOverRef.current.addEventListener('mouseover', setIsOverTrue);
      isOverRef.current.addEventListener('mouseout', setIsOveFalse);
    }

    return () => {
      if (isOverRef.current) {
        isOverRef.current.removeEventListener('mouseover', setIsOverTrue);
        isOverRef.current.removeEventListener('mouseout', setIsOveFalse);
      }
    };
  }, [isOverRef]);

  return { isOver, isOverRef };
}

export default useMouseOver;