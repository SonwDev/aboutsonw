import { motion, useTransform, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "TypeScript", "Next.js", "TailwindCSS",
  "Node.js", "PostgreSQL", "Git", "AWS",
  "UI/UX Design", "Responsive Design", "RESTful APIs", "GraphQL"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0.2, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.8, 1], [0, 1, 1, 1]);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background/50 to-background overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-3xl w-full relative"
      >
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/3 rounded-full blur-xl"
        />

        <Card className="border-primary/30 backdrop-blur-md bg-gradient-to-br from-background/90 via-background/95 to-background/80 shadow-2xl shadow-primary/10">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-5">
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
                transition={{ duration: 0.6 }}
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
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill} 
                    variants={item}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="w-full text-center py-3 px-4 text-sm font-medium bg-gradient-to-r from-background/80 to-background/60 border border-primary/20 hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-500/10 transition-all duration-300 shadow-lg hover:shadow-primary/20"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Progress indicators */}
              <motion.div 
                className="mt-12 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-foreground/80 mb-6">Proficiency Levels</h3>
                {[
                  { category: "Frontend Development", level: 95 },
                  { category: "Backend Development", level: 85 },
                  { category: "UI/UX Design", level: 80 },
                  { category: "Database Management", level: 75 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{item.category}</span>
                      <span className="text-primary font-medium">{item.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
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