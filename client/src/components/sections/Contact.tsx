import { motion, useTransform, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <Card className="glass-strong border-primary/40 bg-gradient-to-br from-background/60 via-background/80 to-background/60 shadow-2xl shadow-primary/20 card-hover">
          <CardContent className="p-8 md:p-16 relative overflow-hidden">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/20 to-primary/20 rounded-full blur-2xl animate-float" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-conic opacity-10 rounded-full blur-3xl animate-spin-slow" />

            <div className="relative z-10">
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>

              <motion.p 
                className="text-center text-muted-foreground mb-10 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's collaborate and create something amazing together
              </motion.p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "kazumiyarine@gmail.com",
                    href: "mailto:kazumiyarine@gmail.com",
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
                    icon: Linkedin, 
                    label: "LinkedIn", 
                    value: "Connect",
                    href: "https://linkedin.com",
                    color: "from-blue-600 to-blue-800"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-auto p-6 flex flex-col items-center gap-4 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-background/50 to-background/30 hover:bg-gradient-to-br hover:from-primary/5 hover:to-blue-500/5 transition-all duration-300 group"
                      asChild
                    >
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Call to action */}
              <motion.div 
                className="text-center mt-12 pt-8 border-t border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground mb-4">
                  Have a project in mind? I'd love to hear about it!
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:kazumiyarine@gmail.com">
                    Start a Conversation
                  </a>
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}