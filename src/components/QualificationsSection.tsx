import React from 'react';
import { Code, GraduationCap, Award, Calendar, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const QualificationsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Kotlin", "Java", "C++", "Python", "C", "SQL"]
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["Spring Boot", "Node.js", "React", "Flask", "Express.js"]
    },
    {
      title: "Cloud & Databases",
      skills: ["AWS", "MySQL", "PostgreSQL", "DynamoDB", "MongoDB"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Yocto Project", "Git", "Docker", "Postman", "Linux"]
    }
  ];

  const coursework = [
    "Operating Systems", "Database Management Systems", "Data Structures & Algorithms",
    "Object-Oriented Programming", "Computer Networks", "Software Engineering"
  ];

  const certifications = [
    {
      title: "Data Science for Engineers",
      issuer: "NPTEL",
      badge: "Gold Medal",
      achievement: "Top 5%",
      link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs97/Course/NPTEL23CS97S1464165210083483.pdf"
    },
    {
      title: "Python for Everybody",
      issuer: "Coursera",
      badge: "Certified",
      link: "https://www.coursera.org/account/accomplishments/specialization/YRJ2MVG5SYPF"
    },
    {
      title: "Version Control with Git",
      issuer: "Coursera", 
      badge: "Certified",
      link: "https://coursera.org/share/46de8fd8dc4e5c1e2cda4b67a58a8546"
    },
    {
      title: "Introduction to Soft Computing",
      issuer: "NPTEL",
      badge: "Certified",
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs37/Course/NPTEL24CS37S34660188130120361.pdf"
    }
  ];

  return (
    <section id="qualifications" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Education, skills, certifications, and technical expertise
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Education */}
          <AccordionItem value="education" className="card-gradient rounded-xl px-6 border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid md:grid-cols-3 gap-6 items-center ml-16">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-bold mb-2">R V College of Engineering</h4>
                  <p className="text-primary font-semibold mb-2">Bachelor of Engineering in Computer Science</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      2021 – 2025
                    </div>
                    <span>Bangalore, India</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-lg font-bold hero-text">9.28</div>
                        <div className="text-xs text-muted-foreground">CGPA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Technical Skills */}
          <AccordionItem value="skills" className="card-gradient rounded-xl px-6 border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Technical Skills</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="ml-16">
                <div className="grid lg:grid-cols-2 gap-8 mb-6">
                  {skillCategories.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-4 text-primary text-base">{category.title}</h4>
                      <div className="space-y-2">
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-foreground text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4 text-primary text-base">Core Coursework</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {coursework.map((course, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span className="text-foreground text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Certifications */}
          <AccordionItem value="certifications" className="card-gradient rounded-xl px-6 border-0">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="ml-16">
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="bg-secondary/10 rounded-lg p-4 hover:bg-secondary/20 transition-smooth"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold mb-1 text-sm">{cert.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                          <div className="flex gap-2 mb-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                              {cert.badge}
                            </span>
                            {cert.achievement && (
                              <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">
                                {cert.achievement}
                              </span>
                            )}
                          </div>
                          {cert.link && (
                            <a 
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-smooth"
                            >
                              View Certificate
                              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                        <Award className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default QualificationsSection;