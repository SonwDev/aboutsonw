import { motion, useTransform, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8]);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full relative px-2 sm:px-4"
      >
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"
        />

        <motion.div style={{ opacity }}>
          <Card className="border-primary/30 backdrop-blur-md bg-gradient-to-br from-background/90 via-background/95 to-background/80 shadow-2xl shadow-primary/10">
          <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-primary/10 rounded-full blur-xl" />

            <div className="relative z-10">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-foreground/90 font-light">
                  I'm a passionate developer who loves creating beautiful and functional web applications. 
                  With expertise in modern technologies and a keen eye for design, I bring ideas to life 
                  through code.
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground font-light">
                  My goal is to craft digital experiences that are both visually stunning 
                  and highly performant, focusing on user-centered design and clean, maintainable code.
                </p>

                {/* Achievement highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/20">
                  {[
                    { number: "50+", label: "Projects Completed" },
                    { number: "3+", label: "Years Experience" },
                    { number: "∞", label: "Lines of Code" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}