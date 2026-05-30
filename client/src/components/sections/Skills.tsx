import { motion } from "framer-motion";
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

const section = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.05 } },
  exit:  { opacity: 0, y: -16, transition: { duration: 0.3, ease: "easeIn" } }
};

const child = {
  hidden: { opacity: 0, y: 14 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit:  { opacity: 0, transition: { duration: 0.2 } }
};

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-3xl w-full"
        style={{ willChange: "transform, opacity" }}
      >
        <Card className="border-primary/30 bg-background/80 shadow-xl shadow-black/30">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
            <motion.h2
              variants={child}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Skills & Expertise
            </motion.h2>

            <motion.div
              variants={section}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {skills.map((skill) => (
                <motion.div key={skill} variants={child} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Badge
                    variant="secondary"
                    className="w-full text-center py-3 px-4 text-sm font-medium bg-background/60 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-colors duration-150"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={child} className="mt-10 space-y-4">
              <h3 className="text-xl font-semibold text-foreground/80 mb-4">Proficiency Levels</h3>
              {proficiency.map((bar, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">{bar.category}</span>
                    <span className="text-primary font-medium">{bar.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.level}%` }}
                      transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: "easeOut" }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
