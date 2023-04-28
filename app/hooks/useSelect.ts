import { useEffect, useState } from 'react';


export default function useSelect<T>(options: T[], preselected?: number) {
  const [selected, setSelected] = useState<T | undefined>(preselected != null ? options[preselected]: undefined);

  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    preselected
  );

  useEffect(() => {
    if (preselected != null) {
      select(preselected);
    } else {
      clear();
    }
  }, [preselected]);


  const select = (index: number) => {
    setSelected(options[index]);
    setSelectedIndex(index);
  };

  const clear = () => {
    setSelected(undefined);
    setSelectedIndex(undefined);
  };

  const next = () => {
    if (selectedIndex === undefined) {
      select(0);
    } else if (selectedIndex < options.length - 1) {
      select(selectedIndex + 1);
    }
  };

  const previous = () => {
    if (selectedIndex === undefined) {
      select(0);
    } else if (selectedIndex > 0) {
      select(selectedIndex - 1);
    }
  };

  return { selected, selectedIndex, select, clear, next, previous };
}