
import React, { useEffect, useRef } from "react";
import { FileText, Download, BookOpen, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceProps {
  title: string;
  description: string;
  type: string;
  downloadLink: string;
  index: number;
}

const Resource: React.FC<ResourceProps> = ({ 
  title, 
  description, 
  type, 
  downloadLink,
  index 
}) => {
  return (
    <div 
      className="opacity-0 animate-fade-in" 
      style={{ animationDelay: `${300 + (index * 100)}ms` }}
    >
      <div className="glass-panel rounded-xl p-6 h-full flex flex-col card-hover">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-mindful-100 text-mindful-600 flex-shrink-0 mb-4">
          {type === "guide" && <BookOpen className="h-5 w-5" />}
          {type === "worksheet" && <FileText className="h-5 w-5" />}
          {type === "checklist" && <FileCheck className="h-5 w-5" />}
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-foreground/75 text-sm flex-1 mb-4">{description}</p>
        
        <Button variant="outline" size="sm" className="w-full justify-center flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </Button>
      </div>
    </div>
  );
};

const ResourcesHub: React.FC = () => {
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

  const resources = [
    {
      title: "Anxiety Management Toolkit",
      description: "A comprehensive guide to understanding anxiety triggers, physical symptoms, and practical coping techniques.",
      type: "guide",
      downloadLink: "#"
    },
    {
      title: "Daily Mood Tracker",
      description: "Track your mood patterns, identify triggers, and recognize improvements with this printable worksheet.",
      type: "worksheet",
      downloadLink: "#"
    },
    {
      title: "Mindful Sleep Routine",
      description: "Improve your sleep quality with this evidence-based routine combining relaxation techniques and healthy habits.",
      type: "checklist",
      downloadLink: "#"
    },
    {
      title: "Crisis Support Plan",
      description: "Create a personalized plan for difficult moments, including emergency contacts and self-care strategies.",
      type: "worksheet",
      downloadLink: "#"
    },
    {
      title: "Cognitive Distortions Guide",
      description: "Learn to identify and challenge common thinking patterns that contribute to anxiety and depression.",
      type: "guide",
      downloadLink: "#"
    },
    {
      title: "Self-Compassion Exercises",
      description: "Practice treating yourself with the same kindness you would offer to a good friend during difficult times.",
      type: "worksheet",
      downloadLink: "#"
    }
  ];

  return (
    <section 
      id="resources-hub" 
      ref={sectionRef}
      className="section-container transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-mindful-100 text-mindful-800 mb-4">
          <FileText className="h-4 w-4 mr-2" />
          <span>Resources Hub</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Free Mental Health Resources</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Download practical worksheets, guides, and tools designed by mental health professionals to support your wellbeing.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Resource 
            key={index}
            index={index}
            title={resource.title}
            description={resource.description}
            type={resource.type}
            downloadLink={resource.downloadLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ResourcesHub;
