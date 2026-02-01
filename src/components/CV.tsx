import { useLanguage } from '@/contexts/LanguageContext';
import { FileDown, FileText } from 'lucide-react';

const CV = () => {
  const { t } = useLanguage();

  return (
    <section id="cv" className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl shadow-lg p-8 md:p-12 card-hover">
          <div className="w-20 h-20 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.cv.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.cv.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/CvDaoudOudada.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary inline-flex"
            >
              <FileText className="w-5 h-5" />
              {t.cv.view}
            </a>
            <a
              href="/CvDaoudOudada.pdf"
              download="Daoud_Oudada_CV.pdf"
              className="btn-primary inline-flex"
            >
              <FileDown className="w-5 h-5" />
              {t.cv.download}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
