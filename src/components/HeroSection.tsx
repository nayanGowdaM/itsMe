import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [animatedText, setAnimatedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  const animatedTexts = [
    "Nayan",
    "a Software Developer", 
    "a Problem Solver",
    "aTech Enthusiast"
  ];
  
  const staticDescription = "Software Developer Intern @Greenlight | Java, Spring Boot, AWS, Kotlin, Node.js, Yocto Project Build | Building Scalable, Real-Time & Data-Driven Systems";

  // Typewriter effect for animated text
  useEffect(() => {
    const currentText = animatedTexts[currentTextIndex];
    let charIndex = 0;
    let typedText = '';
    
    const typeText = () => {
      if (charIndex < currentText.length) {
        typedText += currentText[charIndex];
        setAnimatedText(typedText);
        charIndex++;
        setTimeout(typeText, 100); // Typing speed
      } else {
        // Text fully typed, wait then start erasing
        setIsTyping(false);
        setTimeout(eraseText, 2000); // Wait 2 seconds before erasing
      }
    };
    
    const eraseText = () => {
      if (typedText.length > 0) {
        typedText = typedText.slice(0, -1);
        setAnimatedText(typedText);
        setTimeout(eraseText, 50); // Erasing speed
      } else {
        // Text fully erased, move to next text
        setIsTyping(true);
        setCurrentTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }
    };
    
    // Start typing animation
    setTimeout(typeText, 500);
  }, [currentTextIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-width text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="hero-text">
              {animatedText}
              <span className={`inline-block w-0.5 h-12 md:h-16 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
            </span>
          </h1>
          
          <div className="min-h-[4rem] mb-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {staticDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-effect bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1HdzzGuYgUQsD-jocLmllY_QtiUwdEn-H/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/nayanGowdaM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-smooth hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/mnayangowda/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-smooth hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;