import { Suspense } from 'react';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Loading from '@/components/ui/Loading';

export default function Home() {
  return (
    <div className="w-full bg-background">
      <Suspense fallback={<Loading />}>
        <main className="relative z-10">
          <About />
          <Skills />
          <Contact />
        </main>
      </Suspense>
    </div>
  );
}