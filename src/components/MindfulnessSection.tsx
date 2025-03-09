
import React, { useEffect, useRef } from "react";
import { Brain, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MindfulnessCardProps {
  index: number;
  title: string;
  description: string;
  image: string;
}

const MindfulnessCard: React.FC<MindfulnessCardProps> = ({ 
  index, 
  title, 
  description, 
  image 
}) => {
  return (
    <div 
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${300 + (index * 100)}ms` }}
    >
      <div className="glass-panel rounded-xl overflow-hidden card-hover h-full flex flex-col">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            loading="lazy"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-foreground/75 text-sm flex-1">{description}</p>
          <Button 
            variant="link" 
            className="text-serenity-600 hover:text-serenity-700 p-0 h-auto mt-4 self-start"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

const MindfulnessSection: React.FC = () => {
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

  const mindfulnessResources = [
    {
      title: "Guided Meditation Series",
      description: "A collection of guided meditations for anxiety, stress, and sleep difficulties.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    {
      title: "30-Day Mindfulness Challenge",
      description: "Simple daily practices to build mindfulness into your routine.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Journal Prompts for Self-Reflection",
      description: "Thought-provoking prompts to deepen self-awareness and insight.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <section 
      id="mindfulness" 
      ref={sectionRef}
      className="section-container transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mindful-100 text-mindful-800 mb-4">
          <Brain className="h-4 w-4 mr-2" />
          <span>Mindfulness Practices</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Cultivate Presence and Peace</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Discover practical mindfulness resources to help you reduce stress, improve focus, and increase self-awareness.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {mindfulnessResources.map((resource, index) => (
          <MindfulnessCard 
            key={index}
            index={index}
            title={resource.title}
            description={resource.description}
            image={resource.image}
          />
        ))}
      </div>

      <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mindful-100 text-mindful-800 mb-6">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Featured Practice</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">5-Minute Breathing Exercise</h3>
              <p className="text-foreground/75 mb-6">
                A simple breathing technique you can practice anywhere to quickly reduce stress and anxiety. Perfect for beginners and experienced practitioners alike.
              </p>
              <Button className="primary-button bg-mindful-600 hover:bg-mindful-700">
                Try It Now
              </Button>
            </div>
            <div className="relative h-full min-h-[300px] bg-mindful-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/90 rounded-full animate-pulse-subtle"></div>
                  <FileText className="h-6 w-6 text-mindful-600 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindfulnessSection;
