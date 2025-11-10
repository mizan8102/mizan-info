import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { SettingsFAB } from './SettingsFAB';
import { HelpHeader } from './HelpHeader';

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const location = useLocation();

  // Settings for backward compatibility with SettingsFAB
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

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith('/blog/')) return 'Blog Post';
    
    switch (path) {
      case '/about': return 'About Me';
      case '/portfolio': return 'Portfolio & Projects';
      case '/blog': return 'Blog & Articles';
      case '/skills': return 'Technical Skills';
      case '/education': return 'Education';
      case '/achievements': return 'Achievements';
      default: return 'Portfolio';
    }
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.startsWith('/blog')) return 'blog';
    return path.substring(1) || 'about';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        onSettingsClick={() => setShowSettings(!showSettings)}
        onHelpClick={() => setShowHelp(!showHelp)}
        currentPageTitle={getPageTitle()}
      />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
          <Sidebar
            isOpen={true}
            onClose={() => {}}
            currentPage={getCurrentPage()}
          />
        </div>

        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            currentPage={getCurrentPage()}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-h-screen p-4 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Help Modal */}
      <HelpHeader isOpen={showHelp} onClose={() => setShowHelp(false)} />

      {/* Settings Panel */}
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
    </div>
  );
}
