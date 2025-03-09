
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-serenity-600 to-serenity-500">
                MindfulHaven
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#resources" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Resources
            </a>
            <a
              href="#forums"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Forums
            </a>
            <a
              href="#mindfulness"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Mindfulness
            </a>
            <a
              href="#events"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Events
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Team
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              FAQ
            </a>
            <Button
              size="sm"
              className="bg-serenity-500 hover:bg-serenity-600 text-white rounded-full px-5"
            >
              Join Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-foreground/80 hover:text-foreground"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 right-0 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#resources"
              className="block py-2 text-base font-medium text-foreground/90 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </a>
            <a
              href="#forums"
              className="block py-2 text-base font-medium text-foreground/90 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Forums
            </a>
            <a
              href="#mindfulness"
              className="block py-2 text-base font-medium text-foreground/90 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mindfulness
            </a>
            <a
              href="#events"
              className="block py-2 text-base font-medium text-foreground/90 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </a>
            <a
              href="#team"
              className="block py-2 text-base font-medium text-foreground/90 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#faq"
              className="block py-2 text-base font-medium text-foreground/90 hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button
              size="sm"
              className="w-full bg-serenity-500 hover:bg-serenity-600 text-white mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
