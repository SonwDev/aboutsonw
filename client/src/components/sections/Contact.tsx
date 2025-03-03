import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
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
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                email@example.com
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
