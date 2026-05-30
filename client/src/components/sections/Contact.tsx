import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Youtube } from "lucide-react";

const section = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 } },
  exit:  { opacity: 0, y: -16, transition: { duration: 0.3, ease: "easeIn" } }
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit:  { opacity: 0, transition: { duration: 0.2 } }
};

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        variants={section}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={{ once: false, amount: 0.15 }}
        className="max-w-4xl w-full"
        style={{ willChange: "transform, opacity" }}
      >
        <Card className="border-primary/30 bg-background/80 shadow-xl shadow-black/30">
          <CardContent className="p-8 md:p-16">
            <motion.h2
              variants={child}
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-center"
            >
              Get in Touch
            </motion.h2>

            <motion.p variants={child} className="text-center text-muted-foreground mb-10 text-lg">
              Let's collaborate and create something amazing together
            </motion.p>

            <motion.div variants={section} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "sonwbusiness@gmail.com",
                  href: "mailto:sonwbusiness@gmail.com",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "View Profile",
                  href: "https://github.com",
                  color: "from-gray-600 to-gray-800"
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  value: "Watch Channel",
                  href: "https://www.youtube.com/@TransSonw",
                  color: "from-red-600 to-red-800"
                }
              ].map((contact, index) => (
                <motion.div key={index} variants={child} whileHover={{ y: -4 }}>
                  <Button
                    variant="outline"
                    className="w-full h-auto p-6 flex flex-col items-center gap-4 border-primary/20 hover:border-primary/40 bg-background/50 hover:bg-primary/5 transition-colors duration-200 group"
                    asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-200`}>
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                          {contact.label}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{contact.value}</div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={child} className="text-center mt-12 pt-8 border-t border-primary/20">
              <p className="text-muted-foreground mb-4">Have a project in mind? I'd love to hear about it!</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-opacity duration-150"
                asChild
              >
                <a href="mailto:sonwbusiness@gmail.com">Start a Conversation</a>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
