import { useState, useMemo } from 'react';


export default function useCloseable(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(!isOpen);
  
  return useMemo(() => ({ isOpen, close, open, toggle }), [
    isOpen,
    close,
    open,
    toggle,
  ]);
}