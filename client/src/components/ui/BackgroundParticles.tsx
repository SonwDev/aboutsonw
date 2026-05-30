import React from 'react';

const BackgroundParticles: React.FC = () => {
  const particles = React.useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 20 + 25,
    delay: Math.random() * 12,
    driftX: Math.random() * 60 - 30,
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            willChange: 'transform, opacity',
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
            '--drift-x': `${p.driftX}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
