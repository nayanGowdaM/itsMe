import React from 'react';
import { Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolioImage from '@/assets/portfolio-project.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Custom Portfolio Website",
      description: "Modern, responsive portfolio built with React and Tailwind CSS, featuring smooth animations and dark theme.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite"],
      image: portfolioImage
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/10">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and development work
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative card-gradient rounded-xl overflow-hidden hover:scale-105 transition-smooth animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Button */}
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  asChild
                >
                  <a 
                    href="https://github.com/nayanGowdaM/itsMe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;