import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Award, BookOpen, ExternalLink } from 'lucide-react';
import { TerminalCard, TerminalText, TerminalCommand } from '../components/ui/terminal-card';

export function CyberpunkSkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    document.title = 'Technical Skills | Mizan Rahman - Software Engineer';
  }, []);

  const skillCategories = [
    {
      id: 'backend',
      title: 'BACKEND_DEV',
      icon: Code,
      description: 'Server-side technologies and frameworks',
      skills: [
        { name: 'Laravel', proficiency: 95, years: '4+ years', category: 'framework' },
        { name: 'PHP', proficiency: 95, years: '4+ years', category: 'language' },
        { name: 'Node.js', proficiency: 85, years: '2+ years', category: 'runtime' },
        { name: 'RESTful APIs', proficiency: 95, years: '4+ years', category: 'architecture' },
        { name: 'GraphQL', proficiency: 70, years: '1+ years', category: 'query_language' }
      ]
    },
    {
      id: 'frontend',
      title: 'FRONTEND_DEV',
      icon: Cloud,
      description: 'Modern web interfaces and user experiences',
      skills: [
        { name: 'Vue.js', proficiency: 95, years: '3+ years', category: 'framework' },
        { name: 'React', proficiency: 85, years: '2+ years', category: 'framework' },
        { name: 'JavaScript', proficiency: 95, years: '4+ years', category: 'language' },
        { name: 'TypeScript', proficiency: 85, years: '2+ years', category: 'language' },
        { name: 'Tailwind CSS', proficiency: 90, years: '2+ years', category: 'styling' }
      ]
    },
    {
      id: 'database',
      title: 'DATABASE_STORAGE',
      icon: Database,
      description: 'Data management and storage solutions',
      skills: [
        { name: 'MySQL', proficiency: 95, years: '4+ years', category: 'relational' },
        { name: 'PostgreSQL', proficiency: 85, years: '3+ years', category: 'relational' },
        { name: 'MongoDB', proficiency: 75, years: '2+ years', category: 'nosql' },
        { name: 'Redis', proficiency: 85, years: '2+ years', category: 'cache' },
        { name: 'Elasticsearch', proficiency: 70, years: '1+ years', category: 'search' }
      ]
    },
    {
      id: 'devops',
      title: 'DEVOPS_CLOUD',
      icon: Wrench,
      description: 'Infrastructure and deployment automation',
      skills: [
        { name: 'AWS', proficiency: 80, years: '2+ years', category: 'cloud' },
        { name: 'Docker', proficiency: 85, years: '3+ years', category: 'containerization' },
        { name: 'CI/CD', proficiency: 75, years: '2+ years', category: 'automation' },
        { name: 'Linux', proficiency: 85, years: '3+ years', category: 'os' },
        { name: 'Git', proficiency: 95, years: '4+ years', category: 'vcs' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'HackerRank Java (Basic)',
      url: 'https://www.hackerrank.com/certificates/e32d87cc6650',
      status: 'VERIFIED',
      date: '2024'
    },
    {
      name: 'HackerRank SQL (Basic)',
      url: 'https://www.hackerrank.com/certificates/2330d1e151f9',
      status: 'VERIFIED',
      date: '2024'
    }
  ];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return 'text-green-400';
    if (proficiency >= 80) return 'text-yellow-400';
    if (proficiency >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return 'EXPERT';
    if (proficiency >= 80) return 'ADVANCED';
    if (proficiency >= 70) return 'INTERMEDIATE';
    return 'BEGINNER';
  };

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-white mb-3 md:mb-4">
            <span className="text-green-400"># </span>
            TECHNICAL_ARSENAL
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-mono px-4">
            // Comprehensive overview of technical expertise and experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-6 md:mb-8 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-black/50 border border-green-400/30 rounded-lg p-1 backdrop-blur-sm w-full sm:w-auto overflow-x-auto">
            <div className="flex flex-nowrap sm:flex-wrap gap-1 min-w-min">
              {[
                { id: 'all', label: 'ALL' },
                ...skillCategories.map(cat => ({ id: cat.id, label: cat.title }))
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`
                    px-4 py-2 rounded font-mono text-sm transition-all duration-200
                    ${activeCategory === filter.id
                      ? 'bg-green-400/20 text-green-400 border border-green-400/50'
                      : 'text-gray-400 hover:text-green-400 hover:bg-green-400/10'
                    }
                  `}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TerminalCard 
                  title={`${category.id}_skills.json`}
                  variant="success"
                  className="h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-green-400" />
                      <div>
                        <h3 className="text-lg font-bold text-white font-mono">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-white font-medium">
                              {skill.name}
                            </span>
                            <div className="flex items-center space-x-2">
                              <span className={`
                                px-2 py-1 rounded text-xs font-mono
                                ${getProficiencyColor(skill.proficiency)} 
                                bg-current/10 border border-current/30
                              `}>
                                {getProficiencyLabel(skill.proficiency)}
                              </span>
                              <span className="text-xs text-gray-500 font-mono">
                                {skill.years}
                              </span>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-gray-800 rounded-full h-1">
                            <motion.div
                              className={`h-1 rounded-full ${
                                skill.proficiency >= 90 ? 'bg-green-400' :
                                skill.proficiency >= 80 ? 'bg-yellow-400' :
                                skill.proficiency >= 70 ? 'bg-orange-400' : 'bg-red-400'
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TerminalCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills & Tools */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Tools & Platforms */}
          <TerminalCard title="tools_platforms.list" variant="default">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white font-mono">TOOLS</h3>
              </div>
              <div className="space-y-2">
                {['VS Code', 'PhpStorm', 'Postman', 'Figma', 'Slack', 'Jira', 'Trello'].map((tool) => (
                  <TerminalText key={tool} prefix=">" className="text-sm">
                    {tool}
                  </TerminalText>
                ))}
              </div>
            </div>
          </TerminalCard>

          {/* Certifications */}
          <TerminalCard title="certifications.verified" variant="success">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white font-mono">CERTS</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-mono text-white flex-1">
                        {cert.name}
                      </span>
                      <span className="text-xs font-mono text-green-400 ml-2">
                        {cert.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-mono">
                        {cert.date}
                      </span>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 border border-green-400/30 rounded hover:bg-green-400/10 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3 text-green-400" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TerminalCard>

          {/* Learning */}
          <TerminalCard title="learning_queue.todo" variant="warning">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-yellow-400" />
                <h3 className="text-lg font-bold text-white font-mono">LEARNING</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Kubernetes', desc: 'Container orchestration' },
                  { name: 'Machine Learning', desc: 'AI fundamentals' },
                  { name: 'System Design', desc: 'Scalable architectures' }
                ].map((item) => (
                  <div key={item.name} className="space-y-1">
                    <span className="text-sm font-mono text-white font-medium">
                      {item.name}
                    </span>
                    <p className="text-xs text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TerminalCard>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TerminalCard title="experience_summary.stats" variant="success">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">4+</div>
                <div className="text-sm text-gray-400 font-mono">YEARS_EXP</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">15+</div>
                <div className="text-sm text-gray-400 font-mono">TECHNOLOGIES</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">10+</div>
                <div className="text-sm text-gray-400 font-mono">PROJECTS</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">2</div>
                <div className="text-sm text-gray-400 font-mono">CERTIFICATIONS</div>
              </div>
            </div>
          </TerminalCard>
        </motion.div>
      </div>
    </div>
  );
}