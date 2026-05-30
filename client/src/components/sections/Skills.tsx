import { motion, useTransform, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const skills = [
  "Python", "TypeScript", "Next.js", "TailwindCSS",
  "Node.js", "PostgreSQL", "Git", "AWS",
  "UI/UX Design", "Responsive Design", "RESTful APIs", "GraphQL"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-3xl w-full relative"
      >
        <Card className="border-primary/30 bg-background/80 shadow-2xl shadow-primary/10">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="grid grid-cols-8 gap-4 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="w-full h-4 bg-primary rounded-sm" />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Skills & Expertise
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="w-full text-center py-3 px-4 text-sm font-medium bg-background/60 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-colors duration-200 shadow-lg"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-12 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground/80 mb-6">Proficiency Levels</h3>
                {[
                  { category: "Frontend Development", level: 95 },
                  { category: "Backend Development", level: 85 },
                  { category: "UI/UX Design", level: 80 },
                  { category: "Database Management", level: 75 }
                ].map((bar, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{bar.category}</span>
                      <span className="text-primary font-medium">{bar.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.level}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.08 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
