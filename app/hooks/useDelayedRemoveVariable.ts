import { useState, useEffect } from 'react';


function useDelayedRemoveVariable<T>(variable: T, delay: number) {
  const [internal, setInternal] = useState<T | null>(variable);

  useEffect(() => {
    if (delay > 0)  {
      if (variable != null) {
        setInternal(variable);
        setTimeout(() => {
          setInternal(null);
        }, delay);
      }
    }
  }, [variable]);

  return internal;
}


export default useDelayedRemoveVariable;