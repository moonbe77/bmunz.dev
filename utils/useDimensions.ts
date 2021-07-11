import { useEffect, useRef } from 'react';

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref) => {
  // if (ref.current === null) throw new Error('Missing ref value');

  const dimensions = useRef({
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const elementPosition = ref.current.getBoundingClientRect();
    // const scroll = { x: window.scrollX, Y: window.scrollY };
    // console.log(scroll);

    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
    dimensions.current.x = elementPosition.x;
    dimensions.current.y = elementPosition.y;
    dimensions.current.left = elementPosition.left;
    dimensions.current.top = elementPosition.top;
  }, []);

  return dimensions.current;
};
