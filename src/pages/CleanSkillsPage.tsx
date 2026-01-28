import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export function CleanSkillsPage() {
  useEffect(() => {
    document.title = 'Technical Skills | Mizan Rahman - Software Engineer';
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C#', 'C++', 'Java', 'TypeScript', 'PHP']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Vue.js', 'WPF', 'UWP', 'Avalonia UI']
    },
    {
      title: 'Backend',
      skills: ['.NET Framework', 'FastAPI', 'Django', 'Flask', 'Laravel', 'Node.js', 'Express.js']
    },
    {
      title: 'AI / ML',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'LangChain', 'LlamaIndex']
    },
    {
      title: 'Database',
      skills: ['SQL', 'SQLite', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Jira', 'Figma', 'Docker', 'Slack', 'AWS', 'Azure', 'Google Cloud']
    }
  ];

  const certifications = [
    {
      name: 'Java (Basic)',
      issuer: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/e32d87cc6650',
      date: '2024'
    },
    {
      name: 'SQL (Basic)',
      issuer: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/2330d1e151f9',
      date: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-green-400">#</span> Technical Arsenal
          </h1>
          <p className="text-gray-400 text-lg">
            Skills and technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-black/50 border border-green-400/20 rounded-lg"
            >
              <h3 className="text-green-400 font-bold mb-4 font-mono">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-400/5 text-gray-300 text-sm rounded border border-green-400/10 hover:border-green-400/30 hover:bg-green-400/10 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group p-6 bg-black/50 border border-green-400/20 rounded-lg hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-green-400 font-mono">{cert.issuer}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors" />
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-xs text-gray-500 font-mono">Issued: {cert.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Years Experience', value: '4+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Projects', value: '10+' },
            { label: 'Certifications', value: '2' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}