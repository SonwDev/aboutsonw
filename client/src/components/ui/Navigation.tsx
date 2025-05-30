import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full text-left"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsOpen(false);
                }}
              >
                About
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left"
                onClick={() => {
                  window.scrollTo(0, window.innerHeight);
                  setIsOpen(false);
                }}
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                className="w-full text-left"
                onClick={() => {
                  window.scrollTo(0, window.innerHeight * 2);
                  setIsOpen(false);
                }}
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
