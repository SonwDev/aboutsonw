import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "TypeScript", "Three.js", "Node.js",
  "TailwindCSS", "PostgreSQL", "Git", "Docker"
];

export default function Skills() {
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
            <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
