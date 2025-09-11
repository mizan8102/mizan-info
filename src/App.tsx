import React, { useState } from 'react';
import { OldBookReader } from './components/OldBookReader';
import { SettingsFAB } from './components/SettingsFAB';
import { HelpHeader } from './components/HelpHeader';
import { Header } from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { samplePages } from './data/samplePages';
import { portfolioPages } from './data/portfolioData';
import PortfolioApp from './PortfolioApp';
// import { BookPage } from './hooks/useBookPagination';
import './App.css';

type AppMode = 'demo' | 'portfolio';

function AppContent() {
  const [mode, setMode] = useState<AppMode>('demo');
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
    console.log(`Navigated to page ${pageIndex + 1}`);
  };

  const getCurrentTitle = () => {
    if (mode === 'portfolio') {
      return portfolioPages[currentPage]?.title || 'Portfolio';
    }
    return samplePages[currentPage]?.title || 'Demo Book';
  };

  const getTotalPages = () => {
    return mode === 'portfolio' ? portfolioPages.length : samplePages.length;
  };

  // Render the appropriate component based on mode
  if (mode === 'portfolio') {
    return <PortfolioApp />;
  }

  return (
    <div className="app-background">
      {/* Header */}
      <Header
        mode={mode}
        onModeChange={setMode}
        onSettingsClick={() => setShowSettings(!showSettings)}
        onHelpClick={() => setShowHelp(!showHelp)}
        currentPage={currentPage}
        totalPages={getTotalPages()}
        currentTitle={getCurrentTitle()}
      />

      <div className="p-4 mx-auto max-w-7xl">

        {/* Page Info */}
        <div className="p-4 mb-8 rounded-lg shadow-lg backdrop-blur-sm app-card">
          <div className="text-center">
            <div className="text-sm app-text-secondary">
              <strong>Current Page:</strong> {currentPage + 1} of {getTotalPages()}
            </div>
            <div className="mt-1 text-xs app-text-secondary">
              Use the header controls to customize your reading experience
            </div>
          </div>
        </div>

        

        {/* Book Reader */}
        <div className="p-8 rounded-xl shadow-2xl app-card">
          <OldBookReader
            pages={samplePages}
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
          <p>
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p className="mt-2 text-sm">
            A demonstration of modern web development techniques for creating immersive reading experiences
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
