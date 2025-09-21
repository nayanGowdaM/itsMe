import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nayanGowdaM",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mnayangowda/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:mnayangowda@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-width py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="hero-text text-2xl font-bold mb-2">Nayan Gowda M</h3>
            <p className="text-muted-foreground text-sm">
              Software Developer passionate about building scalable solutions
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 hover:bg-secondary rounded-full transition-smooth hover:scale-110 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 group-hover:text-primary transition-smooth" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Nayan Gowda M. All rights reserved.
            </p>
            <p className="flex items-center mt-2 md:mt-0">
              Built with React, Tailwind CSS, and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;