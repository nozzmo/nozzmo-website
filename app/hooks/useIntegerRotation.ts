import { useState, useEffect } from "react";

const useIntegerRotation = (
  n: number,
  interval: number,
  reverse = false,
  autoRotate = true
) => {
  const [selected, setSelected] = useState(0);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const next = (avoidClearing = false) => {
    setSelected(selected => (selected + 1) % n);
    if (timer && !avoidClearing) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const previous = (avoidClearing = false) => {
    setSelected(selected => (selected - 1 + n) % n);

    if (timer && !avoidClearing) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const start = () => {
    setTimer(
      timer => !timer ? setInterval(() => {
        if (reverse) {
          previous(true);
        } else {
          next(true);
        }
      }, interval) : timer
    );
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  useEffect(() => {
    if (autoRotate) {
      start();
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return { selected, next, previous, start, stop };
}

export default useIntegerRotation;
