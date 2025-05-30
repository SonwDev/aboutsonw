import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-sm"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="text-center relative">
            {/* Background glow effects */}
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-xl" />

            <div className="relative z-10">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                variants={item}
              >
                Welcome
              </motion.h1>
              <motion.p 
                className="text-xl md:text-3xl text-muted-foreground/80 font-light tracking-wide"
                variants={item}
              >
                to my portfolio
              </motion.p>

              {/* Animated dots */}
              <motion.div 
                className="flex space-x-2 mt-8"
                variants={item}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-600 shadow-lg"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.7, 1, 0.7],
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                        "0 0 20px 5px rgba(59, 130, 246, 0.3)",
                        "0 0 0 0 rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}