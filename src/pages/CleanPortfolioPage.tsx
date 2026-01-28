import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Briefcase } from 'lucide-react';
import { projects, workExperience } from '../data/portfolioData';

export function CleanPortfolioPage() {
  useEffect(() => {
    document.title = 'Portfolio | Mizan Rahman - Software Engineer';
  }, []);

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
            <span className="text-green-400">#</span> Selected Works
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Dir: /projects // Total: {projects.length}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-black/50 border border-green-400/20 rounded-lg hover:border-green-400/50 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-green-400 font-mono">{project.category}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors" />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-400/10 text-green-400 text-xs font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs font-mono rounded">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'
                  }`} />
                  <span className="text-xs text-gray-500 font-mono">{project.status}</span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
            <span className="text-green-400">#</span> Mission Log
          </h2>
          <p className="text-gray-400 mb-12 font-mono text-sm">EXP_V.2.0</p>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-green-400/20"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-400 rounded-full" />

                {/* Job Details */}
                <div className="mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{job.position}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green-400 mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-mono">{job.company}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-sm">{job.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-green-400 mt-1">{'>'}</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-400/5 text-gray-500 text-xs font-mono rounded border border-green-400/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}