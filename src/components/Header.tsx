import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  BookOpen, 
  User, 
  Settings, 
  HelpCircle, 
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  mode: 'demo' | 'portfolio';
  onModeChange: (mode: 'demo' | 'portfolio') => void;
  onSettingsClick: () => void;
  onHelpClick: () => void;
  currentPage: number;
  totalPages: number;
  currentTitle: string;
  sections?: { title: string; index: number }[];
  onJumpToPage?: (index: number) => void;
}

export function Header({
  mode,
  onModeChange,
  onSettingsClick,
  onHelpClick,
  currentPage,
  totalPages,
  currentTitle,
  sections,
  onJumpToPage
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'demo', label: 'Demo Book', icon: BookOpen, description: 'Interactive book experience' },
    { id: 'portfolio', label: 'Portfolio', icon: User, description: 'Professional showcase' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 shadow-sm backdrop-blur-sm transition-colors duration-300 bg-white/95 dark:bg-gray-900/95 dark:border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* <div className="flex justify-center items-center w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg shadow-sm">
                <span className="text-sm font-black tracking-widest text-white" style={{fontFamily:'var(--book-font-headline, serif)'}}>MZ</span>
              </div> */}
              <div>
                <h1 className="text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white" style={{fontFamily:'var(--History Jumper, serif)'}}>
                  Mizan
                </h1>
                <p className="text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400" style={{fontFamily:'var(--book-font-small, serif)'}}>
                  Interactive Career Story & Project Showcase
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = mode === item.id;
              
              return (
                <Button
                  key={item.id}
                  onClick={() => onModeChange(item.id as 'demo' | 'portfolio')}
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-amber-600 shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              );
            })}

            {/* Sections Picker (Portfolio) */}
            {mode === 'portfolio' && sections && sections.length > 0 && onJumpToPage && (
              <div className="ml-2">
                <select
                  aria-label="Jump to section"
                  className="px-2 py-2 text-sm text-gray-700 bg-white rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                  value={currentPage}
                  onChange={(e) => onJumpToPage(Number(e.target.value))}
                >
                  {sections.map((s) => (
                    <option key={s.index} value={s.index}>{s.title}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Page Info */}
          <div className="hidden items-center space-x-4 lg:flex">
            <div className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
              <span className="font-medium">{currentTitle}</span>
              <span className="mx-2">•</span>
              <span>Page {currentPage + 1} of {totalPages}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-500" />
                )}
              </motion.div>
            </Button>

            {/* Help Button */}
            <Button
              onClick={onHelpClick}
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Open help"
            >
              <HelpCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </Button>

            {/* Settings Button */}
            <Button
              onClick={onSettingsClick}
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Open settings"
            >
              <Settings className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            {/* Mobile Navigation */}
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = mode === item.id;
                
                return (
                  <Button
                    key={item.id}
                    onClick={() => {
                      onModeChange(item.id as 'demo' | 'portfolio');
                      setIsMobileMenuOpen(false);
                    }}
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start space-x-3 px-4 py-3 rounded-lg ${
                      isActive
                        ? 'text-white bg-amber-600'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-xs opacity-75">{item.description}</div>
                    </div>
                  </Button>
                );
              })}

              {/* Mobile Sections Picker (Portfolio) */}
              {mode === 'portfolio' && sections && sections.length > 0 && onJumpToPage && (
                <div className="px-2">
                  <label className="block mb-1 text-xs text-gray-600 dark:text-gray-300">Portfolio Sections</label>
                  <select
                    aria-label="Jump to section"
                    className="px-2 py-2 w-full text-sm text-gray-700 bg-white rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                    value={currentPage}
                    onChange={(e) => {
                      onJumpToPage(Number(e.target.value));
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {sections.map((s) => (
                      <option key={s.index} value={s.index}>{s.title}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Mobile Page Info */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-300">
                <div className="font-medium">{currentTitle}</div>
                <div>Page {currentPage + 1} of {totalPages}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
