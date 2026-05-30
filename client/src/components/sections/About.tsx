import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl w-full"
      >
        <Card className="border-primary/30 bg-background/80 shadow-xl shadow-black/30">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
                I'm a passionate developer who loves creating beautiful and functional web applications.
                With expertise in modern technologies and a keen eye for design, I bring ideas to life
                through code.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground font-light">
                My goal is to craft digital experiences that are both visually stunning
                and highly performant, focusing on user-centered design and clean, maintainable code.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/20">
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "3+",  label: "Years Experience" },
                  { number: "∞",   label: "Lines of Code" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
