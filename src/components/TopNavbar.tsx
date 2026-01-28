import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  Code, 
  Award, 
  Menu,
  X,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { aboutData } from '../data/aboutData';

export function TopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { id: 'about', label: 'About', path: '/about', icon: User },
    { id: 'skills', label: 'Skills', path: '/skills', icon: Code },
    { id: 'experience', label: 'Experience', path: '/portfolio', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', path: '/achievements', icon: Award },
    { id: 'contact', label: 'Contact', path: '/contact', icon: Mail }
  ];

  const socialLinks = [
    { label: 'GitHub', url: `https://github.com/${aboutData.github}`, icon: Github },
    { label: 'LinkedIn', url: `https://linkedin.com/in/${aboutData.linkedin}`, icon: Linkedin },
    { label: 'Email', url: `mailto:${aboutData.email}`, icon: Mail }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-lg border-b border-green-400/30 shadow-lg shadow-green-400/10' 
            : 'bg-black/80 backdrop-blur-sm border-b border-green-400/20'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo/Brand */}
            <Link to="/about" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="MR Logo"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg border border-green-400/50 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/50"
                />
                <div className="absolute inset-0 rounded-lg bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-mono font-bold text-lg md:text-xl group-hover:text-green-400 transition-colors">
                  {aboutData.name.split(' ').map((part, index) => (
                    <span key={index}>
                      {index === 0 && <span className="text-green-400"># </span>}
                      {part}
                      {index === 0 && ' '}
                    </span>
                  ))}
                </div>
                <div className="text-green-400 text-xs font-mono hidden md:block">
                  {aboutData.title}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path || 
                               (item.path === '/blog' && location.pathname.startsWith('/blog'));
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`
                      relative px-4 py-2 font-mono text-sm transition-all duration-200 rounded-md
                      ${isActive 
                        ? 'text-green-400 bg-green-400/10' 
                        : 'text-gray-300 hover:text-green-400 hover:bg-green-400/5'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-400/10 rounded transition-all duration-200 border border-transparent hover:border-green-400/30"
                    title={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-green-400 hover:bg-green-400/10 rounded transition-colors border border-green-400/30"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 md:top-20 right-0 bottom-0 w-full sm:w-80 bg-black/95 backdrop-blur-lg border-l border-green-400/30 z-50 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6 space-y-6">
                {/* User Info */}
                <div className="pb-6 border-b border-green-400/20">
                  <div className="mb-4">
                    <div className="text-white font-mono font-bold text-lg mb-1">
                      {aboutData.name}
                    </div>
                    <div className="text-green-400 text-xs font-mono">
                      {aboutData.title}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-400">STATUS:</span>
                    <span className="text-green-400">AVAILABLE</span>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  <div className="text-xs font-mono text-green-400 mb-3">{'//'} NAVIGATION</div>
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.path || 
                                   (item.path === '/blog' && location.pathname.startsWith('/blog'));
                    const Icon = item.icon;
                    
                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`
                          flex items-center space-x-3 p-3 rounded-md transition-all duration-200 border
                          ${isActive 
                            ? 'bg-green-400/10 border-green-400/50 text-green-400' 
                            : 'border-green-400/20 text-gray-300 hover:bg-green-400/5 hover:border-green-400/40 hover:text-green-400'
                          }
                        `}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-mono text-sm">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                {/* Social Links */}
                <div className="pt-6 border-t border-green-400/20">
                  <div className="text-xs font-mono text-green-400 mb-3">{'//'} CONNECT</div>
                  <div className="flex space-x-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center p-3 border border-green-400/20 rounded-md hover:bg-green-400/10 hover:border-green-400/50 transition-all duration-200"
                        >
                          <Icon className="w-5 h-5 text-gray-400 hover:text-green-400" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Terminal Command */}
                <div className="p-3 bg-black/50 border border-green-400/20 rounded font-mono text-xs">
                  <div className="text-green-400 mb-1">$ whoami</div>
                  <div className="text-gray-300">software_engineer</div>
                  <div className="text-green-400 mt-2">$ status</div>
                  <div className="text-gray-300">available_for_hire</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}