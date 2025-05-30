import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    // Initial values
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
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