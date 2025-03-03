import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <Card>
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Hi, I'm [Your Name]
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              A passionate developer focused on creating immersive web experiences
            </p>
            <p className="text-foreground">
              With expertise in modern web technologies including React, Three.js,
              and TypeScript, I bring creative visions to life through code.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
