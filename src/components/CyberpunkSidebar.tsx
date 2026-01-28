import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Award, 
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin
} from 'lucide-react';
import { aboutData } from '../data/aboutData';
import { SystemStatus } from './ui/status-indicator';

interface CyberpunkSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
}

export function CyberpunkSidebar({ isOpen, onClose, currentPage }: CyberpunkSidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      id: 'about',
      label: 'ABOUT_ME',
      path: '/about',
      icon: User,
      description: 'Personal information and bio'
    },
    {
      id: 'portfolio',
      label: 'PORTFOLIO',
      path: '/portfolio',
      icon: Briefcase,
      description: 'Projects and work experience'
    },
    {
      id: 'skills',
      label: 'TECH_SKILLS',
      path: '/skills',
      icon: Code,
      description: 'Technical expertise and tools'
    },
    {
      id: 'education',
      label: 'EDUCATION',
      path: '/education',
      icon: GraduationCap,
      description: 'Academic background'
    },
    {
      id: 'achievements',
      label: 'ACHIEVEMENTS',
      path: '/achievements',
      icon: Award,
      description: 'Certifications and awards'
    },
    {
      id: 'blog',
      label: 'BLOG_ARTICLES',
      path: '/blog',
      icon: FileText,
      description: 'Technical articles and insights'
    }
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      url: `https://github.com/${aboutData.github}`,
      icon: Github
    },
    {
      label: 'LinkedIn',
      url: `https://linkedin.com/in/${aboutData.linkedin}`,
      icon: Linkedin
    },
    {
      label: 'Email',
      url: `mailto:${aboutData.email}`,
      icon: Mail
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className="cyberpunk-sidebar fixed left-0 top-12 bottom-12 z-50 w-80 bg-black/90 backdrop-blur-sm border-r border-green-400/30 lg:relative lg:top-0 lg:bottom-0"
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        exit={{ x: -320 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col h-full p-6">
          {/* User Profile Section */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="text-center mb-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-lg border-2 border-green-400/50 overflow-hidden">
                <img
                  src={aboutData.profileImage}
                  alt={aboutData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-bold text-white font-mono">
                {aboutData.name.toUpperCase()}
              </h2>
              <p className="text-sm text-green-400 font-mono">
                {aboutData.title.toUpperCase()}
              </p>
            </div>
            
            {/* Location */}
            <div className="flex items-center justify-center space-x-2 text-xs font-mono text-gray-400 mb-4">
              <MapPin className="w-3 h-3" />
              <span>DHAKA, BANGLADESH</span>
            </div>

            {/* System Status */}
            <div className="bg-black/50 border border-green-400/20 rounded p-3">
              <div className="text-xs font-mono text-green-400 mb-2">/// USER_STATUS</div>
              <SystemStatus />
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <div className="text-xs font-mono text-green-400 mb-4">/// NAVIGATION</div>
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                             (item.path === '/blog' && location.pathname.startsWith('/blog'));
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`
                      block p-3 rounded border transition-all duration-200 group
                      ${isActive 
                        ? 'bg-green-400/10 border-green-400/50 text-green-400' 
                        : 'border-green-400/20 text-gray-300 hover:bg-green-400/5 hover:border-green-400/40 hover:text-green-400'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <div className="flex-1">
                        <div className="text-sm font-mono font-medium">
                          {item.label}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">
                          {item.description}
                        </div>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Social Links */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-xs font-mono text-green-400 mb-4">/// CONNECT</div>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-green-400/20 rounded hover:bg-green-400/10 hover:border-green-400/50 transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Terminal Command */}
          <motion.div 
            className="mt-6 p-3 bg-black/50 border border-green-400/20 rounded font-mono text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-green-400 mb-1">$ whoami</div>
            <div className="text-gray-300">software_engineer</div>
            <div className="text-green-400 mt-2">$ status</div>
            <div className="text-gray-300">available_for_hire</div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}