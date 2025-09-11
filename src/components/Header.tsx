import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  User,
  Briefcase,
  Code,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  Settings, 
  HelpCircle, 
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onSettingsClick: () => void;
  onHelpClick: () => void;
  currentPage: number;
  totalPages: number;
  currentTitle: string;
  sections?: { title: string; index: number }[];
  onJumpToPage?: (index: number) => void;
}

export function Header({
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

  // Portfolio category navigation
  const portfolioCategories = [
    { id: 'personal', label: 'About', icon: User, description: 'Personal profile & philosophy' },
    { id: 'professional', label: 'Experience', icon: Briefcase, description: 'Work experience & projects' },
    { id: 'technical', label: 'Skills', icon: Code, description: 'Technical expertise' },
    { id: 'academic', label: 'Education', icon: GraduationCap, description: 'Academic background' },
    { id: 'achievements', label: 'Awards', icon: Award, description: 'Achievements & recognition' },
    { id: 'content', label: 'Blog', icon: BookOpen, description: 'Blog posts & writing' },
    { id: 'community', label: 'Community', icon: Users, description: 'Community involvement' },
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
            {/* Quick Category Navigation */}
            <div className="flex items-center space-x-1">
              {portfolioCategories.slice(0, 4).map((category) => {
                const Icon = category.icon;
                const relatedPages = sections?.filter(s => 
                  s.title.toLowerCase().includes(category.label.toLowerCase()) ||
                  (category.id === 'personal' && (s.title.includes('About') || s.title.includes('Portfolio'))) ||
                  (category.id === 'professional' && (s.title.includes('Experience') || s.title.includes('Projects'))) ||
                  (category.id === 'technical' && s.title.includes('Skills')) ||
                  (category.id === 'academic' && (s.title.includes('Education') || s.title.includes('Research')))
                ) || [];
                
                return (
                  <Button
                    key={category.id}
                    onClick={() => relatedPages.length > 0 && onJumpToPage && onJumpToPage(relatedPages[0].index)}
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-700"
                    title={category.description}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-xs">{category.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Sections Picker */}
            {sections && sections.length > 0 && onJumpToPage && (
              <div className="ml-4">
                <select
                  aria-label="Jump to section"
                  className="px-3 py-2 text-sm text-gray-700 bg-white rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
            <div className="space-y-2">
              {/* Mobile Category Navigation */}
              <div className="grid grid-cols-2 gap-2">
                {portfolioCategories.map((category) => {
                  const Icon = category.icon;
                  const relatedPages = sections?.filter(s => 
                    s.title.toLowerCase().includes(category.label.toLowerCase()) ||
                    (category.id === 'personal' && (s.title.includes('About') || s.title.includes('Portfolio'))) ||
                    (category.id === 'professional' && (s.title.includes('Experience') || s.title.includes('Projects'))) ||
                    (category.id === 'technical' && s.title.includes('Skills')) ||
                    (category.id === 'academic' && (s.title.includes('Education') || s.title.includes('Research'))) ||
                    (category.id === 'achievements' && (s.title.includes('Awards') || s.title.includes('Achievements'))) ||
                    (category.id === 'content' && s.title.includes('Blog')) ||
                    (category.id === 'community' && s.title.includes('Community'))
                  ) || [];
                  
                  return (
                    <Button
                      key={category.id}
                      onClick={() => {
                        if (relatedPages.length > 0 && onJumpToPage) {
                          onJumpToPage(relatedPages[0].index);
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      variant="ghost"
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-700"
                    >
                      <Icon className="w-4 h-4" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{category.label}</div>
                        <div className="text-xs opacity-75">{category.description}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Mobile Sections Picker */}
              {sections && sections.length > 0 && onJumpToPage && (
                <div className="px-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <label className="block mb-2 text-xs font-medium text-gray-600 dark:text-gray-300">All Portfolio Sections</label>
                  <select
                    aria-label="Jump to section"
                    className="px-3 py-2 w-full text-sm text-gray-700 bg-white rounded-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
