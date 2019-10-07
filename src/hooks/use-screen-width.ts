import { useLayoutEffect, useState } from 'react';

export const useScreenWidth = () => {
   // don't reference window here
  const [ width, setWidth ] = useState(0);

  // only reference window in here
  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};
