import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetailContent = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    // Scroll al título del proyecto cuando la página carga
    const projectTitle = document.getElementById('project-title');
    if (projectTitle) {
      setTimeout(() => {
        projectTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.projects.notFound || 'Proyecto no encontrado'}</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary inline-flex gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.projects.backToHome || 'Volver al inicio'}
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const projectData = t.projects.list[project.slug];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <button 
              onClick={() => navigate('/#projects')}
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors mb-6 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              {t.projects.backToProjects || 'Volver a proyectos'}
            </button>
            
            <div className="flex items-center gap-4 mb-4">
              <h1 id="project-title" className="text-4xl md:text-5xl font-bold text-foreground">
                {projectData.title}
              </h1>
              <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                {projectData.status}
              </span>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {projectData.shortDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex gap-2"
              >
                <Github className="w-5 h-5" />
                {t.projects.viewCode}
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t.projects.viewDemo}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-lg max-h-96 object-cover">
              <img 
                src={project.image} 
                  alt={projectData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Content Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Summary */}
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{t.projects.projectDescription || 'Resumen del proyecto'}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {projectData.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-foreground">{t.projects.mainFeatures || 'Funcionalidades principales'}</h2>
                    <div className="space-y-3">
                      {projectData.features.map((feature: string, index: number) => (
                        <div key={index} className="flex gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Learnings */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">{t.projects.challenges || 'Retos'}</h3>
                      <ul className="space-y-3">
                        {projectData.challenges.map((challenge: string, index: number) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground">{t.projects.learnings || 'Aprendizajes'}</h3>
                      <ul className="space-y-3">
                        {projectData.learnings.map((learning: string, index: number) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Tech Stack */}
                  <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                    <h3 className="text-xl font-bold mb-4 text-foreground">{t.projects.technologiesUsed || 'Tecnologías'}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Box */}
                  <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                    <h3 className="text-xl font-bold mb-4 text-foreground">{t.projects.status || 'Estado'}</h3>
                    <div className="px-4 py-3 rounded-lg text-center font-semibold bg-green-100 text-green-800">
                      {projectData.status}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="bg-card rounded-2xl p-6 shadow-md border border-border space-y-3">
                    <h3 className="text-xl font-bold mb-4 text-foreground">{t.projects.links || 'Enlaces'}</h3>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 w-full px-4 py-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-colors text-foreground font-medium"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full px-4 py-2 bg-foreground/10 hover:bg-foreground/20 rounded-lg transition-colors text-foreground font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        {t.projects.liveDemo || 'Demo en vivo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-secondary/30 border-t border-border">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">{t.projects.moreProjects || '¿Quieres ver más proyectos?'}</h2>
              <button 
                onClick={() => navigate('/#projects')}
                className="btn-primary inline-flex gap-2"
              >
                <ArrowLeft className="w-5 h-5 rotate-180" />
                {t.projects.backToProjects || 'Volver a proyectos'}
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  };

const ProjectDetail = () => {
  return (
    <LanguageProvider>
      <ProjectDetailContent />
    </LanguageProvider>
  );
};

export default ProjectDetail;
