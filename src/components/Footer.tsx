
import React from "react";
import { Heart, Twitter, Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-serenity-600 to-serenity-500">
                MindfulHaven
              </span>
            </div>
            <p className="text-foreground/70 text-sm mb-6 max-w-md">
              A supportive online community dedicated to mental health and well-being. 
              Connect, share, and heal together in a safe and understanding environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-serenity-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-serenity-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-serenity-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-serenity-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Therapist Directory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Support Groups
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Experts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} MindfulHaven. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/70 hover:text-serenity-600 transition-colors">
              Accessibility
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-foreground/50 flex items-center justify-center">
          <span>Made with</span>
          <Heart className="h-3 w-3 mx-1 text-warmth-500" />
          <span>for a healthier mind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
