import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User,
  Briefcase,
  Code,
  GraduationCap,
  Award,
  BookOpen,
  Users,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface FloatingPortfolioNavProps {
  currentPage: number;
  totalPages: number;
  sections: { title: string; index: number }[];
  onJumpToPage: (index: number) => void;
  portfolioPages: any[];
}

interface CategoryGroup {
  category: string;
  icon: React.ComponentType<any>;
  pages: any[];
  color: string;
  gradient: string;
}

export function FloatingPortfolioNav({
  currentPage,
  totalPages,
  sections,
  onJumpToPage,
  portfolioPages
}: FloatingPortfolioNavProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define portfolio categories with icons and styling
  const categoryGroups: CategoryGroup[] = [
    { 
      category: 'About & Personal', 
      icon: User, 
      pages: portfolioPages.filter(p => p.id.includes('cover') || p.id.includes('about')), 
      color: 'text-blue-600 dark:text-blue-400',
      gradient: 'from-blue-500 to-blue-600'
    },
    { 
      category: 'Professional Experience', 
      icon: Briefcase, 
      pages: portfolioPages.filter(p => p.id.includes('experience') || p.id.includes('projects')), 
      color: 'text-green-600 dark:text-green-400',
      gradient: 'from-green-500 to-green-600'
    },
    { 
      category: 'Technical Skills', 
      icon: Code, 
      pages: portfolioPages.filter(p => p.id.includes('skills') || p.id.includes('technical')), 
      color: 'text-purple-600 dark:text-purple-400',
      gradient: 'from-purple-500 to-purple-600'
    },
    { 
      category: 'Education & Research', 
      icon: GraduationCap, 
      pages: portfolioPages.filter(p => p.id.includes('education') || p.id.includes('research')), 
      color: 'text-indigo-600 dark:text-indigo-400',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    { 
      category: 'Achievements & Awards', 
      icon: Award, 
      pages: portfolioPages.filter(p => p.id.includes('achievements')), 
      color: 'text-yellow-600 dark:text-yellow-400',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    { 
      category: 'Blog & Writing', 
      icon: BookOpen, 
      pages: portfolioPages.filter(p => p.id.includes('blog')), 
      color: 'text-red-600 dark:text-red-400',
      gradient: 'from-red-500 to-red-600'
    },
    { 
      category: 'Community & Courses', 
      icon: Users, 
      pages: portfolioPages.filter(p => p.id.includes('communities') || p.id.includes('courses')), 
      color: 'text-teal-600 dark:text-teal-400',
      gradient: 'from-teal-500 to-teal-600'
    },
    { 
      category: 'Projects & Contact', 
      icon: FolderOpen, 
      pages: portfolioPages.filter(p => p.id.includes('personal-projects') || p.id.includes('testimonials') || p.id.includes('contact')), 
      color: 'text-pink-600 dark:text-pink-400',
      gradient: 'from-pink-500 to-pink-600'
    }
  ].filter(cat => cat.pages.length > 0);

  // Find current category
  const getCurrentCategory = () => {
    const currentPageData = portfolioPages[currentPage];
    if (!currentPageData) return null;
    
    return categoryGroups.find(cat => 
      cat.pages.some(page => page.id === currentPageData.id)
    );
  };

  const handleCategoryClick = (category: CategoryGroup) => {
    if (category.pages.length > 0) {
      const firstPageIndex = portfolioPages.findIndex(p => p.id === category.pages[0].id);
      if (firstPageIndex !== -1) {
        onJumpToPage(firstPageIndex);
      }
    }
    setActiveCategory(category.category === activeCategory ? null : category.category);
  };

  const handlePageClick = (pageIndex: number) => {
    onJumpToPage(pageIndex);
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  // Desktop Sidebar Navigation
  const DesktopSidebar = () => (
    <motion.div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 ${isExpanded ? 'w-80' : 'w-16'} transition-all duration-300`}
      initial={false}
      animate={{ width: isExpanded ? 320 : 64 }}
    >
      <div className="overflow-hidden rounded-r-2xl border border-gray-200 floating-nav-gradient floating-nav-backdrop dark:border-gray-700 floating-nav-shadow">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex justify-center items-center p-4 w-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isExpanded ? (
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Navigation Content */}
        <div className="px-2 pb-4">
          {/* Categories */}
          <div className="space-y-2">
            {categoryGroups.map((category, idx) => {
              const Icon = category.icon;
              const isActive = getCurrentCategory()?.category === category.category;
              const isCategoryExpanded = activeCategory === category.category;

              return (
                <div key={category.category} className="relative">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group category-hover-effect ${
                      isActive 
                        ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg` 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : category.color}`} />
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: 'auto' }}
                          exit={{ opacity: 0, width: 0 }}
                          className="overflow-hidden flex-1 ml-3 text-left"
                        >
                          <div className={`font-medium text-sm ${isActive ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`}>
                            {category.category}
                          </div>
                          <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                            {category.pages.length} section{category.pages.length !== 1 ? 's' : ''}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {!isExpanded && (
                      <div className="absolute left-full px-2 py-1 ml-2 text-xs text-white whitespace-nowrap bg-gray-900 rounded opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                        {category.category}
                      </div>
                    )}
                  </button>

                  {/* Category Pages */}
                  <AnimatePresence>
                    {isExpanded && isCategoryExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-2 ml-8 space-y-1"
                      >
                        {category.pages.map((page) => {
                          const pageIndex = portfolioPages.findIndex(p => p.id === page.id);
                          const isCurrentPage = pageIndex === currentPage;
                          
                          return (
                            <button
                              key={page.id}
                              onClick={() => handlePageClick(pageIndex)}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                                isCurrentPage
                                  ? 'text-amber-800 bg-amber-100 border-l-2 border-amber-500 dark:bg-amber-900/30 dark:text-amber-200'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                              }`}
                            >
                              <div className="truncate">{page.title}</div>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="p-3 mt-6 bg-gray-50 rounded-lg dark:bg-gray-800/50"
              >
                <div className="flex justify-between items-center mb-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>Progress</span>
                  <span>{currentPage + 1} / {totalPages}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                  <div 
                    className="h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 progress-glow"
                    style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );

  // Mobile Bottom Navigation
  const MobileBottomNav = () => (
    <div className="fixed right-0 bottom-0 left-0 z-40">
      {/* Expanded Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            className="floating-nav-gradient floating-nav-backdrop border-t border-gray-200 dark:border-gray-700 p-4 max-h-[60vh] overflow-y-auto nav-scrollbar"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Portfolio Navigation
              </h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {categoryGroups.map((category) => {
                const Icon = category.icon;
                const isActive = getCurrentCategory()?.category === category.category;
                
                return (
                  <button
                    key={category.category}
                    onClick={() => handleCategoryClick(category)}
                    className={`p-3 rounded-lg border transition-all ${
                      isActive
                        ? `bg-gradient-to-r ${category.gradient} text-white border-transparent`
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-white' : category.color}`} />
                    <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-700 dark:text-gray-200'}`}>
                      {category.category}
                    </div>
                    <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                      {category.pages.length} sections
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Current Section Pages */}
            {activeCategory && (
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  {activeCategory} Sections
                </h4>
                <div className="space-y-2">
                  {categoryGroups.find(c => c.category === activeCategory)?.pages.map((page) => {
                    const pageIndex = portfolioPages.findIndex(p => p.id === page.id);
                    const isCurrentPage = pageIndex === currentPage;
                    
                    return (
                      <button
                        key={page.id}
                        onClick={() => handlePageClick(pageIndex)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          isCurrentPage
                            ? 'text-amber-800 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-200'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {page.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Bar */}
      <div className="px-4 py-2 border-t border-gray-200 floating-nav-gradient floating-nav-backdrop dark:border-gray-700 floating-nav-shadow">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center px-3 py-2 space-x-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Categories
            </span>
          </button>

          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>{currentPage + 1} / {totalPages}</span>
            <div className="w-20 h-1 bg-gray-200 rounded-full dark:bg-gray-700">
              <div 
                className="h-1 bg-amber-500 rounded-full transition-all duration-300 progress-glow"
                style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isMobile ? <MobileBottomNav /> : <DesktopSidebar />}
    </>
  );
}
