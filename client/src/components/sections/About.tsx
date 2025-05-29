import { motion, useTransform, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full relative"
      >
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        />

        <motion.div style={{ opacity }}>
          <Card className="border-primary/20 backdrop-blur-sm bg-background/80">
            <CardContent className="p-6">
              <motion.h1 
                className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hallo!, I'm Sonw or you can call me Snow.
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                A passionate developer focused on creating projects.
              </motion.p>
              <motion.p 
                className="text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                With expertise in modern technologies including Python, C++,
                TypeScript, and responsive design, I bring creative visions to life
                through clean and efficient code.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}