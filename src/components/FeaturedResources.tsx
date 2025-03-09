
import React, { useEffect, useRef } from "react";
import { Book, Brain, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-panel rounded-xl p-6 card-hover opacity-0 animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-serenity-100 text-serenity-700 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-foreground/75 text-sm leading-relaxed">{description}</p>
      <div className="mt-4">
        <a href="#" className="inline-flex items-center text-sm font-medium text-serenity-600 hover:text-serenity-700">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const FeaturedResources: React.FC = () => {
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
      id="resources" 
      ref={sectionRef}
      className="section-container transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mindful-100 text-mindful-800 mb-4">
          <Book className="h-4 w-4 mr-2" />
          <span>Valuable Resources</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Expert-Curated Mental Health Resources</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Discover carefully selected tools, articles, and guides to support your mental wellness journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResourceCard 
          icon={<Brain className="h-6 w-6" />}
          title="Understanding Anxiety"
          description="Learn about the different types of anxiety disorders, their symptoms, and evidence-based coping strategies."
          delay={300}
        />
        <ResourceCard 
          icon={<FileText className="h-6 w-6" />}
          title="Self-Care Guides"
          description="Practical tips and routines for maintaining your mental well-being in your daily life."
          delay={400}
        />
        <ResourceCard 
          icon={<Book className="h-6 w-6" />}
          title="Recommended Reading"
          description="Books, research papers, and articles recommended by mental health professionals."
          delay={500}
        />
      </div>

      <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <Button className="bg-transparent hover:bg-transparent text-foreground hover:text-foreground/80 border border-input hover:border-muted-foreground transition-colors">
          View All Resources <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedResources;
