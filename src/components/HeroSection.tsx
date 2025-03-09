
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle, Users } from "lucide-react";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-opacity duration-1000 opacity-0"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-serenity-100 rounded-full blur-3xl opacity-60 animate-pulse-subtle"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-mindful-100 rounded-full blur-3xl opacity-60 animate-pulse-subtle" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-serenity-100 text-serenity-800 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
                <Heart className="h-4 w-4 mr-2" />
                <span>A Safe Haven for Mental Wellness</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
                Connect, Share, and Heal Together
              </h1>
              
              <p className="text-lg text-foreground/80 text-balance animate-fade-in opacity-0" style={{ animationDelay: "0.7s" }}>
                Whether you're seeking guidance, a listening ear, or simply a place to share your journey, 
                our supportive community is here for you every step of the way.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
                <Button className="primary-button bg-serenity-600 hover:bg-serenity-700">
                  Join Our Community <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-serenity-200 bg-white hover:bg-serenity-50">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 animate-fade-in opacity-0" style={{ animationDelay: "1.1s" }}>
              <div className="glass-panel rounded-xl p-4 text-center">
                <Users className="h-6 w-6 mx-auto mb-2 text-serenity-600" />
                <p className="text-sm text-foreground/80">Supportive Community</p>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center">
                <MessageCircle className="h-6 w-6 mx-auto mb-2 text-serenity-600" />
                <p className="text-sm text-foreground/80">Expert Resources</p>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center">
                <Heart className="h-6 w-6 mx-auto mb-2 text-serenity-600" />
                <p className="text-sm text-foreground/80">Safe Space</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-serenity-200 to-mindful-100 rounded-3xl transform rotate-3 scale-95 blur-sm"></div>
              <div className="relative glass-panel rounded-3xl overflow-hidden shadow-xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="People connecting in a supportive environment" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-2xl shadow-lg animate-slide-in-bottom opacity-0" style={{ animationDelay: "1.2s" }}>
                <p className="text-sm font-medium">Join 5,000+ members</p>
                <p className="text-xs text-foreground/70">Growing every day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
