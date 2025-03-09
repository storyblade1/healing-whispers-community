
import React, { useEffect, useRef } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
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
      id="faq" 
      ref={sectionRef}
      className="section-container transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warmth-100 text-warmth-800 mb-4">
          <HelpCircle className="h-4 w-4 mr-2" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Common Questions About Our Community</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Find answers to questions about membership, support resources, and how our community works.
        </p>
      </div>

      <div className="max-w-3xl mx-auto glass-panel rounded-xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium text-lg">
              How is this community different from social media?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/75">
              Unlike general social media, our community is specifically designed for mental health support with moderated forums, expert resources, and a focus on creating a safe, supportive environment. We prioritize privacy, meaningful connections, and evidence-based information.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium text-lg">
              Is the community moderated?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/75">
              Yes, all forums and discussions are monitored by trained moderators who ensure conversations remain supportive, respectful, and constructive. Our community guidelines are designed to create a safe space for everyone.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium text-lg">
              Are there professionals available in the community?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/75">
              While we have mental health professionals who contribute resources and occasionally participate in discussions, our community is primarily peer-to-peer support. We clearly identify professional content and regularly update our resource library with expert-verified information.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium text-lg">
              Is my information kept private?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/75">
              We take privacy seriously. Your personal information is never sold or shared with third parties. You can control your visibility settings and choose how much you want to share with the community. For more details, please review our Privacy Policy.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium text-lg">
              What should I do in a mental health crisis?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/75">
              Our community is not designed for crisis intervention. If you or someone you know is experiencing a mental health emergency, please contact your local emergency services (like 911), call the National Suicide Prevention Lifeline at 988, or text HOME to 741741 to reach the Crisis Text Line.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
