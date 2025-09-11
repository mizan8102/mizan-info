import React, { useState } from 'react';
import { OldBookReader } from './components/OldBookReader';
import { SettingsFAB } from './components/SettingsFAB';
import { HelpHeader } from './components/HelpHeader';
import { Header } from './components/Header';
import { FloatingPortfolioNav } from './components/FloatingPortfolioNav';
import { portfolioPages } from './data/portfolioData';
import './App.css';

function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState(0);
  const [animationType, setAnimationType] = useState<'flip' | 'fade'>('flip');
  const [showPageNumbers, setShowPageNumbers] = useState(true);
  const [showChapterTitle, setShowChapterTitle] = useState(true);
  const [showNavigation, setShowNavigation] = useState(true);
  const [showProgress, setShowProgress] = useState(true);
  const [paperColor, setPaperColor] = useState('#f7f3e9');
  const [textureOpacity, setTextureOpacity] = useState(0.1);
  const [fontSizes, setFontSizes] = useState({
    base: "16px",
    small: "14px",
    large: "18px"
  });
  const [cornerRadius, setCornerRadius] = useState('8px');
  const [spineWidth, setSpineWidth] = useState('12px');
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    console.log(`Navigated to page ${pageIndex + 1}: ${portfolioPages[pageIndex]?.title}`);
  };

  const getPageTitle = () => {
    return portfolioPages[currentPage]?.title || 'Portfolio';
  };

  const getTotalPages = () => {
    return portfolioPages.length;
  };

  // Build sections list for header picker
  const sections = portfolioPages.map((p, index) => ({ title: p.title || `Page ${index + 1}`, index }));

  // Identify blog pages for slider
  const blogPages = portfolioPages
    .map((p, index) => ({ ...p, index }))
    .filter((p) => p.id.startsWith('blog'));
  const isOnBlog = portfolioPages[currentPage]?.id.startsWith('blog');

  return (
    <div className="app-background">
      {/* Header */}
      <Header
        onSettingsClick={() => setShowSettings(!showSettings)}
        onHelpClick={() => setShowHelp(!showHelp)}
        currentPage={currentPage}
        totalPages={portfolioPages.length}
        currentTitle={portfolioPages[currentPage]?.title || 'Portfolio'}
        sections={sections}
        onJumpToPage={handlePageChange}
      />

      <div className="p-4 pb-20 mx-auto max-w-7xl transition-all duration-300 md:pb-4">

        {/* Professional Summary */}
        <div className="p-6 mb-8 rounded-lg shadow-lg backdrop-blur-sm app-card">
          <div className="text-center">
            <h2 className="mb-2 text-2xl font-bold app-text-primary" style={{ fontFamily: 'var(--book-font-script)' }}>
              Professional Portfolio
            </h2>
            <div className="mb-4 text-sm app-text-secondary">
              <strong>Current Section:</strong> {getPageTitle()} ({currentPage + 1} of {getTotalPages()})
            </div>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm leading-relaxed app-text-secondary">
                This comprehensive portfolio showcases my professional and academic journey, including 
                <span className="font-medium"> projects, work experience, technical skills, certifications, 
                research contributions, achievements, publications, and community involvement</span>.
                Navigate through the sections to explore my story and accomplishments.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Portfolio Navigation */}
        <FloatingPortfolioNav
          currentPage={currentPage}
          totalPages={getTotalPages()}
          sections={sections}
          onJumpToPage={handlePageChange}
          portfolioPages={portfolioPages}
        />

        {/* Blog & Writing Section - Enhanced when on Blog pages */}
        {isOnBlog && blogPages.length > 0 && (
          <div className="p-6 mb-8 rounded-lg shadow-lg backdrop-blur-sm app-card">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold app-text-primary" style={{ fontFamily: 'var(--book-font-script)' }}>
                📝 Blog & Writing Collection
              </h3>
              <span className="px-3 py-1 text-sm bg-amber-100 rounded-full app-text-secondary dark:bg-amber-900/20">
                {blogPages.length} Articles
              </span>
            </div>
            
            {/* Blog Cards - Responsive Grid */}
            <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-3">
              {blogPages.map((bp) => (
                <button
                  key={bp.id}
                  onClick={() => handlePageChange(bp.index)}
                  className={`text-left p-4 rounded-lg border transition-all duration-200 hover:scale-105 ${
                    currentPage === bp.index
                      ? 'bg-amber-600 text-white border-amber-700 shadow-lg'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-amber-50 dark:hover:bg-gray-700 hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-sm font-semibold line-clamp-2">{bp.title}</div>
                    <div className={`text-xs px-2 py-1 rounded ${
                      currentPage === bp.index ? 'bg-amber-500' : 'bg-gray-200 dark:bg-gray-600'
                    }`}>
                      Page {bp.index + 1}
                    </div>
                  </div>
                  <div className={`text-xs ${currentPage === bp.index ? 'text-amber-100' : 'text-gray-600 dark:text-gray-400'}`}>
                    {bp.id.includes('js-es6') ? '🔧 Technical Tutorial' : '✍️ Blog Article'}
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Horizontal Scroll for smaller screens */}
            <div className="sm:hidden">
              <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
                {blogPages.map((bp) => (
                  <button
                    key={`mobile-${bp.id}`}
                    onClick={() => handlePageChange(bp.index)}
                    className={`min-w-[200px] flex-shrink-0 text-left p-3 rounded-lg border transition-all duration-200 ${
                      currentPage === bp.index
                        ? 'bg-amber-600 text-white border-amber-700 shadow-md'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <div className="text-sm font-medium truncate">{bp.title}</div>
                    <div className={`text-xs mt-1 ${currentPage === bp.index ? 'text-amber-100' : 'text-gray-500'}`}>
                      Page {bp.index + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Book Reader */}
        <div className="p-0 rounded-xl shadow-2xl app-card">
          <OldBookReader
            pages={portfolioPages}
            startPage={currentPage}
            onPageChange={handlePageChange}
            animationType={animationType}
            showPageNumbers={showPageNumbers}
            showChapterTitle={showChapterTitle}
            showNavigation={showNavigation}
            showProgress={showProgress}
            paperColor={paperColor}
            textureOpacity={textureOpacity}
            fontSizes={fontSizes}
            cornerRadius={cornerRadius}
            spineWidth={spineWidth}
            className="min-h-[600px]"
          />
        </div>

        {/* Help Header */}
        <HelpHeader isOpen={showHelp} onClose={() => setShowHelp(false)} />

        {/* Settings Panel controlled by header button */}
        <SettingsFAB
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
          animationType={animationType}
          setAnimationType={setAnimationType}
          showPageNumbers={showPageNumbers}
          setShowPageNumbers={setShowPageNumbers}
          showChapterTitle={showChapterTitle}
          setShowChapterTitle={setShowChapterTitle}
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
          showProgress={showProgress}
          setShowProgress={setShowProgress}
          paperColor={paperColor}
          setPaperColor={setPaperColor}
          textureOpacity={textureOpacity}
          setTextureOpacity={setTextureOpacity}
          fontSizes={fontSizes}
          setFontSizes={setFontSizes}
          cornerRadius={cornerRadius}
          setCornerRadius={setCornerRadius}
          spineWidth={spineWidth}
          setSpineWidth={setSpineWidth}
        />

        {/* Professional Footer */}
        <footer className="pt-8 mt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold app-text-primary" style={{ fontFamily: 'var(--book-font-script)' }}>
                Mizan's Professional Portfolio
              </h3>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed app-text-secondary">
                A comprehensive showcase of professional excellence, technical expertise, and continuous learning.
                This interactive portfolio demonstrates modern web development skills while presenting my career journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-semibold app-text-primary">🛠️ Built With</h4>
                <p className="text-sm app-text-secondary">React, TypeScript, Tailwind CSS, Framer Motion</p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold app-text-primary">📚 Features</h4>
                <p className="text-sm app-text-secondary">Interactive book reader, responsive design, dark mode</p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold app-text-primary">🎯 Purpose</h4>
                <p className="text-sm app-text-secondary">Professional portfolio & technical showcase</p>
              </div>
            </div>

            <div className="text-xs app-text-secondary">
              <p>© 2024 Mizan. All rights reserved.</p>
              <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PortfolioApp;
