import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      title: t.about.educationTitle1,
      place: t.about.educationPlace1,
      period: t.about.educationPeriod1,
      bullets: t.about.educationBullets1,
    },
    {
      title: t.about.educationTitle2,
      place: t.about.educationPlace2,
      period: t.about.educationPeriod2,
      bullets: t.about.educationBullets2,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.about.education}
        </h2>
        <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-2xl shadow-md card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-primary font-semibold uppercase tracking-wide">{t.about.education}</p>
                <h3 className="text-xl font-semibold">Formación académica</h3>
              </div>
            </div>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.title} className="p-4 rounded-xl bg-muted/40 border border-border/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.title}</h4>
                      <p className="text-sm text-muted-foreground">{edu.place}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">{edu.period}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {edu.bullets.map((item) => (
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

export default Education;
