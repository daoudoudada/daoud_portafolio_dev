export type ProjectCategory = 'all' | 'web' | 'mobile' | 'ml';

export interface ProjectDetail {
  id: number;
  slug: string;
  technologies: string[];
  category: ProjectCategory;
  image: string;
  demoUrl?: string;
  githubUrl: string;
}

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: 'todo-list-app',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'localStorage'],
    category: 'web',
    image: '/projects/To_do_list.png',
    githubUrl: 'https://github.com/daoudoudada/To_do_list.git',
  },
  {
    id: 2,
    slug: 'hospital-del-mar-app',
    technologies: ['Kotlin', 'Jetpack Compose', 'Material Design 3', 'Supabase', 'MVVM Architecture', 'Coroutines'],
    category: 'mobile',
    image: '/projects/hospitaldelmar.png',
    githubUrl: 'https://github.com/daoudoudada/Proyecto-Hospital-Mar-.git',
  },
  {
    id: 3,
    slug: 'ai-chatbot-fullstack',
    technologies: ['Python 3.14+', 'FastAPI', 'SQLAlchemy', 'SQLite', 'JWT', 'Argon2', 'OpenAI API', 'Google Gemini API', 'HTML5', 'CSS3', 'JavaScript ES6+'],
    category: 'web',
    image: '/projects/chatbot.png',
    githubUrl: 'https://github.com/daoudoudada/Chatboot.git',
  },
  {
    id: 4,
    slug: 'dev-portfolio',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn-ui', 'React Query', 'Context API'],
    category: 'web',
    image: '/projects/portafolio.png',
    githubUrl: 'https://github.com/daoudoudada/daoud_portafolio_dev',
  },
  {
    id: 5,
    slug: 'mappsapp',
    technologies: ['Kotlin', 'Jetpack Compose', 'Material Design 3', 'Google Maps SDK Compose', 'Play Services Location', 'Supabase BaaS', 'Ktor HTTP Client', 'Coroutines'],
    category: 'mobile',
    image: '/projects/Mapps_app.png',
    githubUrl: 'https://github.com/daoudoudada/MappsApp.git',
  },
  {
    id: 6,
    slug: 'netflix-content-analysis-ml',
    technologies: ['Python 3.9+', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Google Colab', 'Jupyter'],
    category: 'ml',
    image: '/projects/dataanalist.png',
    demoUrl: 'https://colab.research.google.com/drive/1k3aqUA-N7oS442W2ygqslMTDc5ryfBeQ?usp=sharing',
    githubUrl: 'https://github.com/daoudoudada/Netflix_Content_Analysis.git',
  },
];
