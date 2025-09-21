import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Greenlight",
      position: "Software Engineer Intern",
      duration: "Jul 2025 – Present",
      location: "Hybrid",
      type: "Current",
      responsibilities: [
        "Built and optimized financial rulesets using Kotlin and Spring Boot framework",
        "Improved transaction acceptance rate by 30% through advanced fraud detection algorithms",
        "Collaborated with cross-functional teams to enhance platform security and performance",
        "Implemented real-time monitoring and alerting systems for financial transactions"
      ]
    },
    {
      company: "Pure Storage",
      position: "MTS Intern",
      duration: "Jan 2025 – Jun 2025",
      location: "Bangalore, India",
      type: "Recent",
      responsibilities: [
        "Developed Platform DRAM Monitoring application using C++ for DDR5 memory health tracking",
        "Integrated monitoring system with Redfish APIs and D-Bus communication protocols",
        "Implemented I3C protocol support for advanced memory diagnostics and reporting",
        "Optimized system performance and reliability for enterprise storage solutions"
      ]
    },
    {
      company: "ATDXT",
      position: "Project Intern",
      duration: "Nov 2023 – May 2024",
      location: "Bangalore, India",
      type: "Previous",
      responsibilities: [
        "Built comprehensive Vehicle Tracking System using IoT technologies and Raspberry Pi",
        "Implemented real-time GPS tracking with AWS cloud integration for data processing",
        "Developed interactive web dashboard with live map visualization for vehicle monitoring",
        "Designed scalable architecture to handle multiple concurrent vehicle tracking sessions"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current': return 'bg-primary/20 text-primary border-primary/30';
      case 'Recent': return 'bg-accent/20 text-accent border-accent/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development and engineering
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 glow-effect"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card-gradient rounded-xl p-8 animate-fade-up hover:scale-105 transition-smooth">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-primary font-semibold mb-6">{exp.company}</h4>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Briefcase className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;