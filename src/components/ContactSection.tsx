import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mnayangowda@gmail.com",
      link: "mailto:mnayangowda@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8904820919",
      link: "tel:+918904820919"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      link: "#"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS is not configured. Please set up environment variables.');
        toast({
          title: "Configuration Error",
          description: "Email service is not configured. Please contact the administrator.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'No subject',
        message: formData.message,
        to_email: 'mnayangowda@gmail.com',
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // Success
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/10">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have a question? I'd love to hear from you.
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-slide-right">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 card-gradient rounded-xl hover:scale-105 transition-smooth group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{info.title}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="card-gradient rounded-xl p-6">
              <h4 className="font-bold mb-4">Ready to start a project?</h4>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities and challenging projects. 
                Whether you're a startup looking for a technical co-founder or an 
                established company needing development expertise, let's talk!
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Available for work
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  Remote friendly
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up">
            <form onSubmit={handleSubmit} className="card-gradient rounded-xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className={`bg-background border-border ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`bg-background border-border ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me more about your project or question..."
                  rows={6}
                  className={`bg-background border-border resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;