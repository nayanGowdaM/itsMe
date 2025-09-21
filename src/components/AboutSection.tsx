import React from 'react';
import { CheckCircle, Code, Database, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Database,
      title: "Platform DRAM Monitoring",
      description: "Developed C++ application for DDR5 health monitoring via I3C, integrated with Redfish & D-Bus"
    },
    {
      icon: Zap,
      title: "Vehicle Tracking System",
      description: "Created solution with Raspberry Pi and AWS for real-time vehicle tracking with live map integration"
    },
    {
      icon: Users,
      title: "JPMC Code for Good",
      description: "Ranked Top 40 in India, delivered full-stack NGO management solution"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Enthusiastic Software Developer with experience in <span className="text-primary font-semibold">Backend Development</span>. 
              I enjoy building scalable, real-time systems and applying new technologies to solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              My work spans application development and storage systems, giving me a solid foundation to grow as a developer. 
              Currently working as a Software Engineer Intern at <a href="https://greenlight.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline transition-all duration-200">Greenlight</a>, 
              where I focus on building robust financial technology solutions.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Backend Development', 'API Development', 'Real-time Systems', 'Cloud Technologies'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="card-gradient rounded-xl p-6 hover:scale-105 transition-smooth"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;