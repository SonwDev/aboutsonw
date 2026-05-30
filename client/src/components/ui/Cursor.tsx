import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  const hasHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
  if (!hasHover) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary/70 pointer-events-none z-[9999]"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    />
  );
}
