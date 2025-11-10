import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  BookOpen, 
  Code, 
  GraduationCap, 
  Award
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
}

const navigationItems = [
  { id: 'about', label: 'About Me', icon: User, description: 'Personal profile & background', path: '/about' },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase, description: 'Projects & work experience', path: '/portfolio' },
  { id: 'blog', label: 'Blog', icon: BookOpen, description: 'Articles & tutorials', path: '/blog' },
  { id: 'skills', label: 'Skills', icon: Code, description: 'Technical expertise', path: '/skills' },
  { id: 'education', label: 'Education', icon: GraduationCap, description: 'Academic background', path: '/education' },
  { id: 'achievements', label: 'Achievements', icon: Award, description: 'Awards & recognition', path: '/achievements' },
];

export function Sidebar({ isOpen, onClose, currentPage }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 z-50 w-80 h-full border-r shadow-lg backdrop-blur-sm bg-background/95 border-border lg:relative lg:translate-x-0 lg:z-auto lg:shadow-none lg:bg-background lg:backdrop-blur-none"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          {/* <div className="p-6 border-b border-border">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">MZ</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold">Mizan Rahman</h2>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="lg:hidden"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div> */}

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <div className="mb-4">
              <h3 className="mb-2 text-xs font-semibold tracking-wider uppercase text-foreground/60 dark:text-muted-foreground">
                Navigation
              </h3>
            </div>
            
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                              (location.pathname.startsWith('/blog') && item.id === 'blog');
              
              return (
                <Button
                  key={item.id}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={`justify-start p-3 w-full h-auto transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Link to={item.path} onClick={onClose}>
                    <Icon className={`flex-shrink-0 mr-3 w-5 h-5 ${
                      isActive ? 'text-primary-foreground' : 'text-foreground'
                    }`} />
                    <div className="flex-1 text-left">
                      <div className={`font-medium ${
                        isActive ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {item.label}
                      </div>
                      <div className={`text-xs ${
                        isActive 
                          ? 'text-primary-foreground/80' 
                          : 'text-muted-foreground dark:text-muted-foreground'
                      }`}>
                        {item.description}
                      </div>
                    </div>
                    {isActive && (
                      <Badge variant="secondary" className="ml-2 bg-primary-foreground/20 text-primary-foreground">
                        Active
                      </Badge>
                    )}
                  </Link>
                </Button>
              );
            })}
          </nav>

          <Separator />

          {/* Footer */}
          <div className="p-4">
            <div className="text-center">
              <p className="text-xs text-foreground/50 dark:text-muted-foreground">
                © 2024 Mizan Rahman
              </p>
              <p className="mt-1 text-xs text-foreground/50 dark:text-muted-foreground">
                Built with React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
