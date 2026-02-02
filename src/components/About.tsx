import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Code, Users, Briefcase, CheckCircle2 } from 'lucide-react';

const About = () => {
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

  const technologies = [
    'Java',
    'JavaScript',
    'Python',
    'Kotlin',
    'SQL',
    'C',
    'HTML5',
    'CSS3',
    'WordPress',
    'PostgreSQL',
    'MongoDB',
    'Firebase',
    'Supabase',
    'Android Studio',
    'Jetpack Compose',
    'Docker',
    'AWS',
    'Git',
    'JUnit',
  ];

  const softSkills = t.about.softSkillsList;

  return (
    <section id="about" className="py-20 section-alt">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.about.title}
        </h2>
        <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <p className="text-lg text-muted-foreground text-center mb-16 leading-relaxed">
            {t.about.description}
          </p>

          <div className="space-y-8">
            {/* Experiencia laboral */}
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
            {/* Formación académica */}
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

          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {/* Tecnologías */}
            <div className="bg-card p-6 rounded-2xl shadow-md card-hover md:col-span-2">
              <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.about.technologies}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-card p-6 rounded-2xl shadow-md card-hover">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{t.about.softSkills}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-secondary-foreground font-medium text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
