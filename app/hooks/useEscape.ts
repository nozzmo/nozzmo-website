import { useEffect } from "react";


const useEscape = (callback: () => void) => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [callback]);
}


export default useEscape;
