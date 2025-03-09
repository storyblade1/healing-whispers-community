
import React, { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import HeroSection from "@/components/HeroSection";
import FeaturedResources from "@/components/FeaturedResources";
import SupportForums from "@/components/SupportForums";
import MindfulnessSection from "@/components/MindfulnessSection";
import Testimonials from "@/components/Testimonials";
import JoinCommunity from "@/components/JoinCommunity";
import TeamSection from "@/components/TeamSection";
import ResourcesHub from "@/components/ResourcesHub";
import UpcomingEvents from "@/components/UpcomingEvents";
import FAQ from "@/components/FAQ";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <MainLayout>
      <HeroSection />
      <FeaturedResources />
      <SupportForums />
      <MindfulnessSection />
      <ResourcesHub />
      <TeamSection />
      <UpcomingEvents />
      <Testimonials />
      <FAQ />
      <JoinCommunity />
    </MainLayout>
  );
};

export default Index;
