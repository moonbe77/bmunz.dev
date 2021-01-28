import { useState } from 'react';

export const useIntersect = () => {
  const [entry, setEntry] = useState({});

  const observer = new window.IntersectionObserver(([entry]) => {
    setEntry(entry);
  });

  return entry;
};
