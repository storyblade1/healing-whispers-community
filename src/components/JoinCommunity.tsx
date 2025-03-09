
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";

const JoinCommunity: React.FC = () => {
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
      className="section-container transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-serenity-600 to-serenity-400 opacity-90"></div>
          
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]"></div>
          </div>
          
          <div className="relative px-6 py-16 md:py-24 md:px-12 lg:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            <div className="text-center md:text-left max-w-lg md:flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-6 backdrop-blur-sm">
                <Heart className="h-4 w-4 mr-2" />
                <span>Join Our Community</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                Your Mental Health Journey Matters to Us
              </h2>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed text-balance">
                Become part of a caring community dedicated to supporting mental wellness. 
                Connect with others who understand, access valuable resources, and take meaningful 
                steps toward better mental health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-white text-serenity-700 hover:bg-white/90 hover:text-serenity-800">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/40">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="md:flex-1 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="glass-panel bg-white/90 rounded-xl p-6 max-w-sm mx-auto md:ml-auto md:mr-0">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-serenity-600 mr-2" />
                  <h3 className="text-xl font-semibold">Community Benefits</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Access to all support forums",
                    "Weekly virtual support groups",
                    "Guided meditation sessions",
                    "Expert-led workshops",
                    "Personal journal tools",
                    "Resource library"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-serenity-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-serenity-600"></div>
                      </div>
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <p className="text-sm text-foreground/60 mb-1">Join 5,000+ community members</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
