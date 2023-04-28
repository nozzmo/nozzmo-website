import { useEffect, useState } from "react";

const useTemporalMessage = (timeout: number) => {
  const [temporalMessage, setTemporalMessage] = useState<string | null>(null);
  useEffect(() => {
    if (temporalMessage != null) {
      const timer = setTimeout(() => {
        setTemporalMessage(null);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [temporalMessage, timeout]);
  return {
    temporalMessage,
    setTemporalMessage
  };
}

export default useTemporalMessage;