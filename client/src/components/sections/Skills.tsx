import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "TypeScript", "Next.js", "TailwindCSS",
  "Node.js", "PostgreSQL", "Git", "AWS",
  "UI/UX Design", "Responsive Design", "RESTful APIs", "GraphQL"
];

const proficiency = [
  { category: "Frontend Development", level: 95 },
  { category: "Backend Development", level: 85 },
  { category: "UI/UX Design",         level: 80 },
  { category: "Database Management",  level: 75 }
];

export default function Skills() {
  const [barsVisible, setBarsVisible] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl w-full"
      >
        <Card className="border-primary/30 bg-background/80 shadow-xl shadow-black/30">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills &amp; Expertise
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="w-full text-center py-3 px-4 text-sm font-medium bg-background/60 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-colors duration-150 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div ref={barsRef} className="mt-10 space-y-4">
              <h3 className="text-xl font-semibold text-foreground/80 mb-4">Proficiency Levels</h3>
              {proficiency.map((bar, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">{bar.category}</span>
                    <span className="text-primary font-medium">{bar.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full transition-[width] ease-out"
                      style={{
                        width: barsVisible ? `${bar.level}%` : "0%",
                        transitionDuration: "700ms",
                        transitionDelay: `${i * 80}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
