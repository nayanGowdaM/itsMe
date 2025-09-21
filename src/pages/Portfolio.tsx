import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import QualificationsSection from '../components/QualificationsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <QualificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;