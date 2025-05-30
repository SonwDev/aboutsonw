import { motion, useTransform, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "TypeScript", "Next.js", "TailwindCSS",
  "Node.js", "PostgreSQL", "C++", "AWS",
  "UI/UX Design", "Arduino", "RESTful APIs", "GraphQL"
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

  const y1 = useTransform(scrollYProgress, [0.3, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.8], [0, 1, 1]);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background/50 to-background overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-3xl w-full relative"
      >
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />

        <Card className="border-primary/20 backdrop-blur-sm bg-background/80">
          <CardContent className="p-6">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div key={skill} variants={item}>
                  <Badge 
                    variant="secondary" 
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}