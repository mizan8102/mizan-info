import React, { useState } from 'react';
import { OldBookReader } from './components/OldBookReader';
import { SettingsFAB } from './components/SettingsFAB';
import { HelpHeader } from './components/HelpHeader';
import { Header } from './components/Header';
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
        mode="portfolio"
        onModeChange={() => {}}
        onSettingsClick={() => setShowSettings(!showSettings)}
        onHelpClick={() => setShowHelp(!showHelp)}
        currentPage={currentPage}
        totalPages={portfolioPages.length}
        currentTitle={portfolioPages[currentPage]?.title || 'Portfolio'}
        sections={sections}
        onJumpToPage={handlePageChange}
      />

      <div className="p-4 mx-auto max-w-7xl">

        {/* Page Info */}
        <div className="p-4 mb-8 rounded-lg shadow-lg backdrop-blur-sm app-card">
          <div className="text-center">
            <div className="text-sm app-text-secondary">
              <strong>Current Section:</strong> {getPageTitle()} ({currentPage + 1} of {getTotalPages()})
            </div>
            <div className="mt-2 text-xs app-text-secondary">
              Navigate through the pages to explore my professional journey and achievements
            </div>
          </div>
        </div>


        {/* Portfolio Sections Overview */}
        <div className="p-6 mb-8 rounded-lg shadow-lg backdrop-blur-sm app-card">
          <h3 className="mb-4 text-lg font-semibold app-text-primary" style={{ fontFamily: 'var(--book-font-script)' }}>
            Portfolio Sections
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
            {portfolioPages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => handlePageChange(index)}
                className={`p-3 rounded-lg text-sm transition-all duration-200 ${
                  currentPage === index
                    ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-amber-100 dark:bg-gray-700 text-amber-800 dark:text-gray-200 hover:bg-amber-200 dark:hover:bg-gray-600 hover:shadow-md'
                }`}
              >
                <div className="font-medium">{page.title}</div>
                <div className="mt-1 text-xs opacity-75">Page {index + 1}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Blog slider when on Blog section */}
        {isOnBlog && blogPages.length > 0 && (
          <div className="p-4 mb-8 rounded-lg shadow-lg backdrop-blur-sm app-card">
            <h3 className="mb-3 text-lg font-semibold app-text-primary" style={{ fontFamily: 'var(--book-font-script)' }}>
              Blog Posts
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {blogPages.map((bp) => (
                <button
                  key={bp.id}
                  onClick={() => handlePageChange(bp.index)}
                  className={`min-w-[240px] text-left p-4 rounded-lg border transition-all duration-200 ${
                    currentPage === bp.index
                      ? 'bg-amber-600 text-white border-amber-700 shadow-md'
                      : 'bg-amber-50 dark:bg-gray-700/40 border-amber-200 dark:border-gray-600 text-amber-900 dark:text-gray-100 hover:bg-amber-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="text-sm font-semibold truncate">{bp.title}</div>
                  <div className="mt-1 text-xs opacity-80 truncate">Go to page {bp.index + 1}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Book Reader */}
        <div className="p-8 rounded-xl shadow-2xl app-card">
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

        {/* Footer */}
        <footer className="mt-8 text-center app-text-secondary">
          <p style={{ fontFamily: 'var(--book-font-serif)' }}>
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p className="mt-2 text-sm">
            An interactive portfolio showcasing professional excellence and technical expertise
          </p>
        </footer>
      </div>
    </div>
  );
}

export default PortfolioApp;
