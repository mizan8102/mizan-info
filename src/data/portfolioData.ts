export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  category: 'SaaS' | 'ERP' | 'FinTech' | 'E-commerce' | 'Other';
  status: 'Completed' | 'In Progress' | 'Planned';
}

export const projects: Project[] = [
  {
    id: 'saas-platform',
    title: 'Multi-Tenant SaaS Platform',
    description: 'A comprehensive SaaS platform with multi-tenancy, subscription management, and advanced analytics.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'AWS'],
    features: [
      'Multi-tenant architecture',
      'Subscription billing integration',
      'Real-time analytics dashboard',
      'API rate limiting',
      'Advanced user management'
    ],
    category: 'SaaS',
    status: 'Completed'
  },
  {
    id: 'erp-system',
    title: 'Enterprise Resource Planning System',
    description: 'Full-featured ERP system for manufacturing companies with inventory, HR, and financial modules.',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Docker'],
    features: [
      'Inventory management',
      'HR and payroll system',
      'Financial reporting',
      'Production planning',
      'Supply chain management'
    ],
    category: 'ERP',
    status: 'Completed'
  },
  {
    id: 'fintech-app',
    title: 'Digital Banking Platform',
    description: 'Secure digital banking platform with payment processing and financial management tools.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API', 'AWS'],
    features: [
      'Account management',
      'Payment processing',
      'Transaction history',
      'Budget tracking',
      'Security compliance'
    ],
    category: 'FinTech',
    status: 'Completed'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Marketplace',
    description: 'Multi-vendor e-commerce platform with advanced search and recommendation engine.',
    technologies: ['Laravel', 'Vue.js', 'Elasticsearch', 'Redis'],
    features: [
      'Multi-vendor support',
      'Advanced search',
      'Recommendation engine',
      'Payment gateway integration',
      'Order management'
    ],
    category: 'E-commerce',
    status: 'In Progress'
  }
];

export const workExperience = [
  {
    id: 'senior-dev',
    company: 'TechCorp Solutions',
    position: 'Senior Software Engineer',
    duration: '2022 - Present',
    location: 'Remote',
    responsibilities: [
      'Lead development of scalable SaaS applications serving 10,000+ users',
      'Architect and implement microservices using Laravel and Docker',
      'Mentor junior developers and conduct code reviews',
      'Optimize application performance resulting in 40% faster load times'
    ],
    technologies: ['Laravel', 'Vue.js', 'AWS', 'Docker', 'MySQL']
  },
  {
    id: 'full-stack-dev',
    company: 'InnovateTech',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Developed and maintained ERP systems for manufacturing clients',
      'Built responsive web applications using Laravel and Vue.js',
      'Implemented RESTful APIs and integrated third-party services',
      'Collaborated with cross-functional teams in Agile environment'
    ],
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Git']
  }
];