
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 via-blue-400/20 to-purple-500/20 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial opacity-30" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-conic opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-dot-pattern opacity-10" />
    </div>
  );
};

export default BackgroundParticles;
