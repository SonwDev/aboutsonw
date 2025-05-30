import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/">
            <Button variant="ghost" className="text-lg font-bold">
              Sonw
            </Button>
          </Link>

          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => window.scrollTo(0, 0)}>
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.scrollTo(0, window.innerHeight)}
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              onClick={() => window.scrollTo(0, window.innerHeight * 2)}
            >
              Contact
            </Button>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              className="md:hidden relative overflow-hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <X /> : <Menu />}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </Button>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-3 pt-3 pb-4 space-y-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
              {[
                  { label: "About", scrollTo: 0 },
                  { label: "Skills", scrollTo: window.innerHeight },
                  { label: "Contact", scrollTo: window.innerHeight * 2 }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Button
                      variant="ghost"
                      className="w-full text-left hover:bg-primary/10 transition-colors duration-200"
                      onClick={() => {
                        window.scrollTo(0, item.scrollTo);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
            </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
