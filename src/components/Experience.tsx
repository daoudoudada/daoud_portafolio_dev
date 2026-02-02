import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t.about.experienceRole1,
      place: t.about.experiencePlace1,
      period: t.about.experiencePeriod1,
      bullets: t.about.experienceBullets1,
    },
    {
      role: t.about.experienceRole2,
      place: t.about.experiencePlace2,
      period: t.about.experiencePeriod2,
      bullets: t.about.experienceBullets2,
    },
  ];

  return (
    <section id="experience" className="py-20 section-alt">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.about.experience}
        </h2>
        <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-2xl shadow-md card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-primary font-semibold uppercase tracking-wide">{t.about.experience}</p>
                <h3 className="text-xl font-semibold">Experiencia laboral</h3>
              </div>
            </div>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.role} className="p-4 rounded-xl bg-muted/40 border border-border/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                      <p className="text-sm text-muted-foreground">{exp.place}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.bullets.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
