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
    id: 'blackorigin-trading-bot',
    title: 'BlackOrigin: Scalable Marketplace Trading Bot',
    description: 'A high-performance SaaS trading bot for automated trading on Bybit using TradingView signals. Handles millions of transactions with sub-second execution, cross-market price comparison, and real-time signal processing.',
    technologies: ['Laravel', 'Next.js', 'RabbitMQ', 'Redis', 'MySQL', 'WebSocket', 'Prometheus', 'Grafana', 'Stripe', 'JWT', 'OneSignal', 'REST API', 'SOAP API', 'VOLET(Crypto Payment Gateway)'],
    features: [
      'Real-time signal processing with immediate TradingView alert response',
      'Automated trade lifecycle management from signal to execution',
      'Cross-market price comparison across multiple exchanges',
      'Concurrency-safe operations with Redis distributed locks',
      'Multi-gateway payment support (Stripe, Zip, Klarna, AfterPay, Crypto)',
      'Real-time notifications via Telegram, Email, Browser, and Slack',
      'Robust monitoring with Prometheus, Grafana, and centralized logging',
      'Queue ordering with RabbitMQ priorities and routing',
      'JWT authentication with third-party providers (Google, Telegram, Apple, Twitter, Facebook)'
    ],
    liveUrl: 'https://medium.com/@mizan.developer2001/how-we-built-blackorigin-a-scalable-marketplace-trading-bot-dd43a3149301',
    category: 'FinTech',
    status: 'Completed'
  },
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
    id: 'ambala-it',
    company: 'Ambala IT',
    position: 'Software Engineer',
    duration: 'January 2024 – Present',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Designed and deployed cloud-based FinTech solutions',
      'Built a crypto trading bot handling millions of transactions with sub-second execution using RabbitMQ & Redis',
      'Developed multi-tenant SaaS platforms and ERP systems (Laravel, Vue.js 3) with faster queries and real-time dashboards',
      'Integrated billing, accounting, payment gateways, inventory, and reporting systems into enterprise apps',
      'Implemented CI/CD pipelines (GitHub Actions) and improved performance with Redis caching',
      'Managed distributed systems and monitoring (Grafana) ensuring 99.9% application uptime'
    ],
    technologies: ['Laravel', 'Vue.js 3', 'PHP', 'Python', 'Next.js', 'React.js', 'RabbitMQ', 'Redis', 'GitHub Actions', 'Grafana','AWS', 'Google Cloud', 'MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Git', 'Linux', 'REST API', 'SOAP API']
  },
  {
    id: 'z-it-solutions',
    company: 'Z IT Solutions Limited',
    position: 'Software Engineer',
    duration: 'December 2022 – October 2023',
    location: 'Dhaka, Bangladesh',
    responsibilities: [
      'Designed and implemented scalable architectures, including the Repository Pattern and reusable Vue.js component libraries, which were successfully used in multiple enterprise projects',
      'Optimized API performance by 60% through Redis caching, resulting in faster response times and improved user experience',
      'Developed and integrated real-time application features using WebSocket and Pusher',
      'Modernized legacy codebases, improving maintainability, stability, and long-term scalability',
      'Established Git workflows and automated testing practices, reducing production bugs by 30%',
      'Provided technical leadership by mentoring junior developers and conducting code reviews to enforce coding standards and best practices'
    ],
    technologies: ['Vue.js', 'Redis', 'WebSocket', 'Pusher', 'Git', 'Repository Pattern', 'API Optimization']
  },
  {
    id: 'universal-tech',
    company: 'Universal Technology Corporation',
    position: 'Software Developer',
    duration: 'March 2021 – November 2022',
    location: 'Feni, Bangladesh',
    responsibilities: [
      'Build reusable code and libraries for future use',
      'Creating self-contained, reusable, and testable modules and components',
      'Optimize application for maximum speed and scalability',
      'Front-End Functional Development of ERP application Form'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'ERP Systems', 'Frontend Development', 'Component Libraries']
  }
];