
import React, { useEffect, useRef } from "react";
import { Users } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  role, 
  bio, 
  image,
  index 
}) => {
  return (
    <div 
      className="opacity-0 animate-fade-in" 
      style={{ animationDelay: `${300 + (index * 150)}ms` }}
    >
      <div className="glass-panel rounded-xl overflow-hidden h-full flex flex-col card-hover">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
            loading="lazy"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-serenity-600 font-medium mb-3">{role}</p>
          <p className="text-foreground/75 text-sm flex-1">{bio}</p>
        </div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
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

  const teamMembers = [
    {
      name: "Dr. Emma Chen",
      role: "Clinical Psychologist & Community Director",
      bio: "With over 15 years of experience, Emma specializes in anxiety disorders and mindfulness-based therapies. She ensures all community resources are evidence-based.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
    },
    {
      name: "Marcus Johnson",
      role: "Community Manager & Mental Health Advocate",
      bio: "After his own journey with depression, Marcus dedicated his career to creating supportive mental health spaces. He oversees our forum moderation team.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Sophia Patel",
      role: "Mindfulness Instructor & Content Creator",
      bio: "A certified mindfulness teacher with a background in neuroscience, Sophia develops our meditation resources and leads weekly virtual sessions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      name: "James Wilson",
      role: "Peer Support Coordinator",
      bio: "James trains and mentors our volunteer peer supporters, drawing from his background in social work and his lived experience with anxiety and PTSD.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  ];

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="section-container bg-gradient-to-b from-transparent to-serenity-50/50 transition-opacity duration-1000 opacity-0"
    >
      <div className="max-w-3xl mx-auto mb-12 text-center opacity-0 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-serenity-100 text-serenity-800 mb-4">
          <Users className="h-4 w-4 mr-2" />
          <span>Meet Our Team</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">The People Behind MindfulHaven</h2>
        <p className="text-lg text-foreground/75 max-w-2xl mx-auto text-balance">
          Our dedicated team brings together expertise in mental health, community building, and lived experience to create a supportive space for your wellbeing journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            index={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
