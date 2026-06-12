const PORTFOLIO_DATA = {
  skills: [
    {
      id: 'lang',
      title: 'Lenguajes',
      icon: '{ }',
      iconClass: 'lang',
      items: ['JavaScript', 'Python', 'Kotlin', 'Java', 'HTML', 'CSS']
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Librerías',
      icon: '⚡',
      iconClass: 'framework',
      items: ['React', 'React Native', 'Flutter', 'Node.js', 'Spring Boot', 'Express.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      id: 'databases',
      title: 'Bases de Datos',
      icon: '◉',
      iconClass: 'db',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase']
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: '☁',
      iconClass: 'cloud',
      items: ['Vercel', 'Render', 'Railway', 'AWS', 'Google Cloud', 'Git', 'GitHub', 'GitLab']
    },
    {
      id: 'special',
      title: 'Software Especializado',
      icon: '★',
      iconClass: 'special',
      items: ['VNNOX', 'VNNOX Care', 'Excel', 'R', 'Power BI']
    }
  ],

  projects: [
    {
      id: 'finisterre',
      name: 'Finisterre Yam',
      initials: 'FY',
      description: 'Aplicación web en producción con arquitectura full-stack optimizada para gestión y operaciones del negocio.',
      url: 'https://finisterreyam.vercel.app/',
      deploy: 'Frontend en Vercel',
      tags: ['React', 'Node.js', 'Vercel', 'Full Stack']
    },
    {
      id: 'jacs',
      name: 'JACS',
      initials: 'J',
      description: 'Aplicación web desplegada con enfoque en experiencia de usuario y rendimiento en entorno productivo.',
      url: 'https://jacs-sepia.vercel.app/',
      deploy: 'Desplegado en Vercel',
      tags: ['React', 'JavaScript', 'Vercel', 'Responsive']
    }
  ]
};
