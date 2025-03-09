
import React, { useEffect, useRef } from "react";
import { MessageCircle, Users, Heart, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ForumCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  memberCount: string;
  activeDiscussions: number;
  delay: number;
}

const ForumCard: React.FC<ForumCardProps> = ({ 
  icon, 
  title, 
  description, 
  memberCount, 
  activeDiscussions,
  delay
}) => {
  return (
    <div 
      className="glass-panel rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-serenity-100 text-serenity-600 flex-shrink-0">
            {icon}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-foreground/75 text-sm mt-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-muted/50 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-xs text-foreground/60">
            <Users className="h-3 w-3 mr-1" />
            <span>{memberCount} members</span>
          </div>
          <div className="flex items-center text-xs text-foreground/60">
            <MessageCircle className="h-3 w-3 mr-1" />
            <span>{activeDiscussions} discussions</span>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-xs h-8 px-2 text-serenity-600 hover:text-serenity-700 hover:bg-serenity-50">
          Join <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

const SupportForums: React.FC = () => {
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
      id="forums" 
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-transparent to-serenity-50/50 transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-serenity-100 text-serenity-800 mb-4">
          <MessageCircle className="h-4 w-4 mr-2" />
          <span>Support Forums</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Connect with People Who Understand</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Join our moderated forums where you can share experiences, ask questions, and find support from a community that cares.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ForumCard 
          icon={<Heart className="h-5 w-5" />}
          title="Anxiety Support"
          description="A space to discuss anxiety symptoms, treatments, and daily coping strategies."
          memberCount="2.4k"
          activeDiscussions={37}
          delay={300}
        />
        <ForumCard 
          icon={<Brain className="h-5 w-5" />}
          title="Depression Discussions"
          description="Support and understanding for those experiencing depression or supporting loved ones."
          memberCount="1.8k"
          activeDiscussions={24}
          delay={400}
        />
        <ForumCard 
          icon={<Activity className="h-5 w-5" />}
          title="Wellness Practices"
          description="Share and discover daily habits and practices to improve mental well-being."
          memberCount="3.1k"
          activeDiscussions={42}
          delay={500}
        />
        <ForumCard 
          icon={<Users className="h-5 w-5" />}
          title="Family & Relationships"
          description="Navigate challenges in relationships and family dynamics that impact mental health."
          memberCount="1.5k"
          activeDiscussions={19}
          delay={600}
        />
      </div>

      <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: "700ms" }}>
        <Button className="primary-button bg-serenity-600 hover:bg-serenity-700">
          Explore All Forums <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default SupportForums;
