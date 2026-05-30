import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Mail, Github, Youtube } from "lucide-react";

const contacts = [
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
    value: "@TransSonw",
    href: "https://www.youtube.com/@TransSonw",
    color: "from-red-600 to-red-800"
  }
];

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl w-full"
      >
        <Card className="border-primary/30 bg-background/80 shadow-xl shadow-black/30">
          <CardContent className="p-8 md:p-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
              Get in Touch
            </h2>

            <p className="text-center text-muted-foreground mb-10 text-lg">
              Let's collaborate and create something amazing together
            </p>

<<<<<<< HEAD
            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-4 p-6 rounded-xl border border-primary/20 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
=======
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
                    href: "https://github.com/SonwDev",
                    color: "from-gray-600 to-gray-800"
                  },
                  { 
                    icon: Youtube, 
                    label: "YouTube", 
                    value: "Subscribe",
                    href: "https://youtube.com/@TransSonw",
                    color: "from-red-600 to-red-800"
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
>>>>>>> 4834134a206dec8c728ca9121880af0f8e2692a2
                >
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
              ))}
            </div>

            <div className="text-center mt-12 pt-8 border-t border-primary/20">
              <p className="text-muted-foreground mb-4">Have a project in mind? I'd love to hear about it!</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-opacity duration-150"
                asChild
              >
                <a href="mailto:sonwbusiness@gmail.com">Start a Conversation</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
