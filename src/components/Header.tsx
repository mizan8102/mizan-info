import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Menu,
  Settings, 
  HelpCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onMenuClick: () => void;
  onSettingsClick: () => void;
  onHelpClick: () => void;
  currentPageTitle: string;
}

export function Header({
  onMenuClick,
  onSettingsClick,
  onHelpClick,
  currentPageTitle
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu Button & Logo */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onMenuClick}
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
               {/* Logo */}
               <div className="relative group">
                 <img 
                   src="/logo.png"
                   alt="Mizan Rahman Logo"
                   className="w-12 h-12 rounded-lg shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5 border border-border object-contain"
                 />
               </div>
              
              {/* Professional Text */}
              {/* <div className="hidden sm:block">
                <motion.h1 
                  className="text-xl font-bold transition-all duration-300 bg-gradient-to-r from-[#6899ac] via-[#2dc7b5] to-[#264653] bg-clip-text text-transparent"
                  style={{ 
                    fontFamily: 'Inter, system-ui, sans-serif',
                    textShadow: '0 1px 2px rgba(38, 70, 83, 0.1)',
                    backgroundSize: '200% 100%',
                  }}
                  whileHover={{ 
                    backgroundPosition: '100% 0%',
                    transition: { duration: 0.5 }
                  }}
                >
                  Mizanur Rahman
                </motion.h1>
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#2a9d8f' }}
                  ></div>
                  <p 
                    className="text-xs font-medium transition-colors duration-300"
                    style={{ color: '#264653' }}
                  >
                    Software Engineer
                  </p>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Current Page Title */}
          <div className="hidden items-center md:flex">
            <Badge variant="outline" className="text-sm">
              {currentPageTitle}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-1">
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="w-9 h-9 hover:bg-accent hover:text-accent-foreground"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </motion.div>
            </Button>

            {/* Help Button */}
            <Button
              onClick={onHelpClick}
              variant="ghost"
              size="icon"
              className="w-9 h-9 hover:bg-accent hover:text-accent-foreground"
              aria-label="Open help"
            >
              <HelpCircle className="w-4 h-4" />
            </Button>

            {/* Settings Button */}
            <Button
              onClick={onSettingsClick}
              variant="ghost"
              size="icon"
              className="w-9 h-9 hover:bg-accent hover:text-accent-foreground"
              aria-label="Open settings"
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
