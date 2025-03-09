
import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, index }) => {
  return (
    <div 
      className="opacity-0 animate-fade-in" 
      style={{ animationDelay: `${300 + (index * 150)}ms` }}
    >
      <div className="glass-panel rounded-xl p-6 h-full flex flex-col">
        <div className="mb-4 text-serenity-400">
          <Quote className="h-8 w-8" />
        </div>
        <blockquote className="flex-1">
          <p className="text-foreground/90 italic leading-relaxed mb-6">"{quote}"</p>
          <footer>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-foreground/60">{location}</p>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      quote: "Finding this community was a turning point for me. The resources and support have helped me manage my anxiety in ways I never thought possible.",
      author: "Sarah J.",
      location: "Living with anxiety"
    },
    {
      quote: "The forums here gave me a place to express myself without judgment. For the first time, I felt understood by people who truly get what I'm going through.",
      author: "Michael T.",
      location: "Depression recovery journey"
    },
    {
      quote: "The mindfulness practices I've learned through this community have become an essential part of my daily routine. I'm more present, calm, and resilient.",
      author: "Elena R.",
      location: "Practicing mindfulness for 1 year"
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-transparent to-serenity-50/50 transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Community Stories</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Read about how our community has made a difference in people's lives and mental health journeys.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial 
            key={index}
            index={index}
            quote={testimonial.quote}
            author={testimonial.author}
            location={testimonial.location}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
