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
              {/* 3D Globe Logo */}
              <div className="relative group">
                <div 
                  className="w-12 h-12 rounded-full shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-0.5 overflow-hidden"
                  style={{
                    backgroundColor: '#264653',
                    boxShadow: '0 8px 25px rgba(38, 70, 83, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {/* Rotating Globe Pattern */}
                  <div 
                    className="absolute inset-0 opacity-30 animate-spin"
                    style={{
                      animation: 'spin 20s linear infinite',
                      backgroundImage: `
                        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 1px, transparent 2px),
                        radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 1.5px, transparent 2px),
                        radial-gradient(circle at 20% 60%, rgba(255,255,255,0.2) 1px, transparent 2px),
                        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 2px),
                        radial-gradient(circle at 50% 80%, rgba(255,255,255,0.2) 1.5px, transparent 2px),
                        repeating-conic-gradient(
                          from 0deg at 50% 50%,
                          transparent 0deg,
                          rgba(255,255,255,0.1) 15deg,
                          transparent 30deg,
                          rgba(255,255,255,0.05) 45deg,
                          transparent 60deg
                        )
                      `,
                      backgroundSize: '12px 12px, 8px 8px, 10px 10px, 6px 6px, 14px 14px, 100% 100%'
                    }}
                  ></div>

                  {/* Latitude Lines */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          transparent 0px,
                          rgba(255,255,255,0.3) 1px,
                          transparent 2px,
                          transparent 8px
                        )
                      `
                    }}
                  ></div>

                  {/* Longitude Lines - Rotating */}
                  <div 
                    className="absolute inset-0 opacity-15"
                    style={{
                      animation: 'spin 15s linear infinite reverse',
                      backgroundImage: `
                        repeating-conic-gradient(
                          from 0deg at 50% 50%,
                          transparent 0deg,
                          rgba(255,255,255,0.4) 1deg,
                          transparent 2deg,
                          transparent 30deg
                        )
                      `
                    }}
                  ></div>
                  
                  {/* Globe Shine Effect */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)'
                    }}
                  ></div>

                  {/* Rotating Highlight */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-40"
                    style={{
                      animation: 'spin 8s linear infinite',
                      background: 'conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.3) 10%, transparent 20%, transparent 100%)'
                    }}
                  ></div>
                  
                  <div className="flex relative z-10 justify-center items-center h-full">
                    <span 
                      className="text-lg font-black tracking-wider text-white drop-shadow-sm"
                      style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      MZ
                    </span>
                  </div>
                </div>
                {/* 3D Base Shadow */}
                <div 
                  className="absolute -bottom-1 left-1/2 w-10 h-2 rounded-full opacity-30 blur-sm transition-all duration-300 transform -translate-x-1/2 group-hover:opacity-50"
                  style={{ backgroundColor: '#264653' }}
                ></div>
              </div>
              
              {/* Professional Text */}
              <div className="hidden sm:block">
                <motion.h1 
                  className="text-xl font-bold transition-all duration-300 bg-gradient-to-r from-[#264653] via-[#2a9d8f] to-[#264653] bg-clip-text text-transparent"
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
                  Mizan Rahman
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
                    Software Engineer Portfolio
                  </p>
                </div>
              </div>
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
