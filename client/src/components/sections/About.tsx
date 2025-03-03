import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <Card className="border-primary/20 backdrop-blur-sm bg-background/80">
          <CardContent className="p-6">
            <motion.h1 
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm [Your Name]
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A passionate developer focused on creating beautiful web experiences
            </motion.p>
            <motion.p 
              className="text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              With expertise in modern web technologies including React,
              TypeScript, and responsive design, I bring creative visions to life
              through clean and efficient code.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}