
import React, { useEffect, useRef } from "react";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  isVirtual: boolean;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  description, 
  date, 
  time, 
  location,
  attendees,
  isVirtual,
  index 
}) => {
  return (
    <div 
      className="opacity-0 animate-fade-in" 
      style={{ animationDelay: `${300 + (index * 150)}ms` }}
    >
      <div className="glass-panel rounded-xl overflow-hidden h-full flex flex-col card-hover">
        <div className={`h-2 w-full ${isVirtual ? 'bg-serenity-400' : 'bg-warmth-400'}`}></div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${isVirtual ? 'bg-serenity-50 text-serenity-600' : 'bg-warmth-50 text-warmth-600'}`}>
                {isVirtual ? 'Virtual' : 'In-Person'}
              </span>
            </div>
            <div className="flex items-center text-xs text-foreground/60">
              <Users className="h-3 w-3 mr-1" />
              <span>{attendees} attending</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-foreground/75 text-sm flex-1 mb-4">{description}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-foreground/70">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-sm text-foreground/70">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-sm text-foreground/70">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{location}</span>
            </div>
          </div>
          
          <Button className="w-full bg-serenity-600 hover:bg-serenity-700 text-white">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents: React.FC = () => {
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

  const events = [
    {
      title: "Managing Anxiety in Uncertain Times",
      description: "Join Dr. Emma Chen for a workshop on practical tools to manage anxiety during challenging and uncertain periods.",
      date: "May 15, 2023",
      time: "7:00 PM - 8:30 PM EST",
      location: "Zoom (Link provided after registration)",
      attendees: 42,
      isVirtual: true
    },
    {
      title: "Mindfulness Meditation Group",
      description: "A weekly virtual gathering to practice guided meditation together, suitable for beginners and experienced practitioners.",
      date: "Every Thursday",
      time: "8:00 AM - 8:45 AM EST",
      location: "Zoom (Link provided after registration)",
      attendees: 26,
      isVirtual: true
    },
    {
      title: "Community Support Circle",
      description: "An in-person peer support group facilitated by trained moderators in a safe, confidential environment.",
      date: "May 20, 2023",
      time: "6:30 PM - 8:00 PM",
      location: "Community Center, 123 Main St",
      attendees: 18,
      isVirtual: false
    }
  ];

  return (
    <section 
      id="events" 
      ref={sectionRef}
      className="section-container transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-warmth-100 text-warmth-800 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          <span>Upcoming Events</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Join Our Community Events</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Participate in virtual workshops, support groups, and in-person gatherings designed to foster connection and growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard 
            key={index}
            index={index}
            title={event.title}
            description={event.description}
            date={event.date}
            time={event.time}
            location={event.location}
            attendees={event.attendees}
            isVirtual={event.isVirtual}
          />
        ))}
      </div>

      <div className="mt-10 text-center opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <Button variant="outline" className="border-serenity-200 bg-white hover:bg-serenity-50">
          View All Events <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
