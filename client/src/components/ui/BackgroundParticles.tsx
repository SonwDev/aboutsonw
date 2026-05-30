import React from 'react';

const BackgroundParticles: React.FC = () => {
  const particles = React.useMemo(() => Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 10,
    driftX: Math.random() * 80 - 40,
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/10 blur-sm"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
            '--drift-x': `${p.driftX}px`,
          } as React.CSSProperties}
        />
      ))}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial opacity-30" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-conic opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-dot-pattern opacity-10" />
    </div>
  );
};

export default BackgroundParticles;
