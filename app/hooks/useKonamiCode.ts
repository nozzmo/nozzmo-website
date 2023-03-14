import { useEffect, useState } from "react";


const useKonamiCode = (callback: () => void) => {
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      setKeys((keys) => [...keys, event.key]);
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  useEffect(() => {
    if (keys.join("").includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba")) {
      callback();
    }
  }, [keys, callback]);
}


export default useKonamiCode;
