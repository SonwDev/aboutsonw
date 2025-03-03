import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from '@/components/canvas/Scene';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Loading from '@/components/ui/Loading';
import useScroll from '@/hooks/useScroll';

export default function Home() {
  const { scrollPosition } = useScroll();

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full h-screen">
        <Suspense fallback={<Loading />}>
          <Canvas
            camera={{ 
              position: [3, 3, 8], 
              fov: 60,
              near: 0.1,
              far: 1000
            }}
            style={{ background: '#1a1a1a' }}
          >
            <Scene scrollPosition={scrollPosition} />
          </Canvas>
        </Suspense>
      </div>

      <div className="relative z-10">
        <About />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}