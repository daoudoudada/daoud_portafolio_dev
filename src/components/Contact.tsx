import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Mail, text: 'oudadadaoud21@gmail.com', href: 'mailto:oudadadaoud21@gmail.com' },
    { icon: MapPin, text: 'Barcelona, España', href: null },
    { icon: Github, text: 'github.com/daoudoudada', href: 'https://github.com/daoudoudada' },
    { icon: Linkedin, text: 'linkedin.com/in/daoud-oudada', href: 'https://www.linkedin.com/in/daoud-oudada/' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.contact.title}
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t.contact.subtitle}
        </p>
        <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-12" />

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="bg-card rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6">Info</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-foreground">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
