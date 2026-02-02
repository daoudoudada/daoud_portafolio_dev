import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';

const Hero = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/daoudoudada', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/daoud-oudada/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:oudadadaoud21@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={profileImage}
                alt="Daoud Oudada"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 -m-3 animate-pulse" />
          </div>

          {/* Content */}
          <div className="text-center stagger-children max-w-xl">
            <p className="text-primary font-medium text-lg mb-2">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {t.hero.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-semibold mb-4">
              {t.hero.role}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.hero.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#projects" className="btn-primary">
                {t.hero.viewProjects}
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#cv" className="btn-outline">
                {t.hero.downloadCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
