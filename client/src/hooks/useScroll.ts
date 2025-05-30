import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const position = window.scrollY;
          setScrollPosition(position);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    // Initial values
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateParallax = (factor: number = 0.5) => {
    return scrollPosition * factor;
  };

  return { scrollPosition, viewportHeight, calculateParallax };
}