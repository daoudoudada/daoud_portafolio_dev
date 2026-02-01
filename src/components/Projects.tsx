import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight, Monitor, Smartphone, Brain } from 'lucide-react';
import { projects as projectsData } from '@/data/projects';

type Category = 'all' | 'web' | 'mobile' | 'ml';

const categoryIcons = {
  web: Monitor,
  mobile: Smartphone,
  ml: Brain,
};

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters: { value: Category; label: string }[] = [
    { value: 'all', label: t.projects.filters.all },
    { value: 'web', label: t.projects.filters.web },
    { value: 'mobile', label: t.projects.filters.mobile },
    { value: 'ml', label: t.projects.filters.ml },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.projects.title}
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t.projects.subtitle}
        </p>
        <div className="w-20 h-1 hero-gradient rounded-full mx-auto mb-12" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const CategoryIcon = categoryIcons[project.category];
            const projectTranslations = t.projects.list[project.slug];
            
            return (
              <article 
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden shadow-md card-hover group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={projectTranslations.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center">
                    <CategoryIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{projectTranslations.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
                    {projectTranslations.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 mt-auto">
                    <Link
                      to={`/project/${project.slug}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium flex-1 justify-center"
                    >
                      {t.projects.readMore}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                      title={t.projects.viewCode}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                        title={t.projects.viewDemo}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
