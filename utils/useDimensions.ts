import { useEffect, useRef, useState } from 'react';
import { set } from 'react-ga';

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.

export const useDimensions = (ref) => {
  // if (ref.current === null) throw new Error('Missing ref value');
  const [dimensions, setDimentions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // const elementPosition = ref.current.getBoundingClientRect();
    const resize = () => {
      setDimentions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
        // x: ref.current.x,
        // y: ref.current.y,
        // left: ref.current.left,
        // top: elementPosition.top,
      });
    };

    window.addEventListener('resize', resize);

    resize();
    return () => window.removeEventListener('resize', resize);
  }, [ref]);

  return dimensions;
};
