import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, MapPin, Briefcase } from 'lucide-react';
import { projects, workExperience } from '../data/portfolioData';
import { TerminalCard, TerminalText, TerminalCommand } from '../components/ui/terminal-card';

export function CyberpunkPortfolioPage() {
  const [activeTab, setActiveTab] = useState<'projects' | 'experience'>('projects');

  useEffect(() => {
    document.title = 'Portfolio | Mizan Rahman - Software Engineer';
  }, []);

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.95 },
    active: { opacity: 1, scale: 1 }
  };

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
            PORTFOLIO_ARCHIVE
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-mono px-4">
            // Showcasing scalable applications and technical expertise
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-black/50 border border-green-400/30 rounded-lg p-1 backdrop-blur-sm w-full sm:w-auto">
            <div className="flex space-x-1">
              {[
                { id: 'projects', label: 'PROJECTS', icon: Briefcase },
                { id: 'experience', label: 'EXPERIENCE', icon: MapPin }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'projects' | 'experience')}
                    className={`
                      flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded font-mono text-xs sm:text-sm transition-all duration-200 flex-1 sm:flex-initial
                      ${activeTab === tab.id
                        ? 'bg-green-400/20 text-green-400 border border-green-400/50'
                        : 'text-gray-400 hover:text-green-400 hover:bg-green-400/10'
                      }
                    `}
                    variants={tabVariants}
                    animate={activeTab === tab.id ? 'active' : 'inactive'}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.id.toUpperCase()}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <TerminalCommand 
              command="ls -la /projects"
              output={`Total: ${projects.length} projects found`}
              className="mb-4 md:mb-6 text-xs sm:text-sm"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TerminalCard 
                    title={`project_${project.id}.exe`}
                    variant={project.status === 'Completed' ? 'success' : 'warning'}
                    className="h-full"
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white font-mono mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <TerminalText prefix="//" variant="muted">
                          FEATURES
                        </TerminalText>
                        <div className="mt-2 space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <TerminalText key={idx} prefix=">" className="text-xs">
                              {feature}
                            </TerminalText>
                          ))}
                          {project.features.length > 3 && (
                            <TerminalText prefix=">" className="text-xs" variant="muted">
                              +{project.features.length - 3} more features
                            </TerminalText>
                          )}
                        </div>
                      </div>

                      <div>
                        <TerminalText prefix="//" variant="muted">
                          TECH_STACK
                        </TerminalText>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-xs font-mono text-green-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-green-400/20">
                        <div className="flex items-center space-x-4">
                          <span className={`
                            px-2 py-1 rounded text-xs font-mono
                            ${project.status === 'Completed' 
                              ? 'bg-green-400/20 text-green-400' 
                              : 'bg-yellow-400/20 text-yellow-400'
                            }
                          `}>
                            {project.status.toUpperCase()}
                          </span>
                          <span className="text-xs font-mono text-gray-500">
                            {project.category.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex space-x-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-green-400/30 rounded hover:bg-green-400/10 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 text-green-400" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 border border-green-400/30 rounded hover:bg-green-400/10 transition-colors"
                            >
                              <Github className="w-4 h-4 text-green-400" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TerminalCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <TerminalCommand 
              command="cat /var/log/work_experience.log"
              output={`${workExperience.length} employment records found`}
              className="mb-6"
            />
            
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TerminalCard 
                    title={`${job.company.toLowerCase().replace(/\s+/g, '_')}.log`}
                    variant="success"
                  >
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white font-mono">
                            {job.position}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-green-400 font-mono">
                              {job.company}
                            </span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400 text-sm">
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-mono text-green-400">
                            {job.duration}
                          </span>
                        </div>
                      </div>

                      <div>
                        <TerminalText prefix="//" variant="muted">
                          KEY_RESPONSIBILITIES
                        </TerminalText>
                        <div className="mt-3 space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <TerminalText key={idx} prefix="•" className="text-sm">
                              {responsibility}
                            </TerminalText>
                          ))}
                        </div>
                      </div>

                      <div>
                        <TerminalText prefix="//" variant="muted">
                          TECHNOLOGIES_USED
                        </TerminalText>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-green-400/10 border border-green-400/30 rounded text-xs font-mono text-green-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TerminalCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <TerminalCard title="system_stats.json" variant="success">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-400 font-mono">PROJECTS</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  {workExperience.length}
                </div>
                <div className="text-sm text-gray-400 font-mono">COMPANIES</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  4+
                </div>
                <div className="text-sm text-gray-400 font-mono">YEARS_EXP</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  15+
                </div>
                <div className="text-sm text-gray-400 font-mono">TECHNOLOGIES</div>
              </div>
            </div>
          </TerminalCard>
        </motion.div>
      </div>
    </div>
  );
}