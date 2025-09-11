import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useBookPagination, BookPage } from '../hooks/useBookPagination';
import '../styles/book-theme.css';

export interface OldBookReaderProps {
  pages: BookPage[];
  startPage?: number;
  onPageChange?: (pageIndex: number) => void;
  animationType?: 'flip' | 'fade';
  // Force single-page layout regardless of screen size
  singlePageOnly?: boolean;
  showPageNumbers?: boolean;
  showChapterTitle?: boolean;
  showNavigation?: boolean;
  showProgress?: boolean;
  paperColor?: string;
  textureOpacity?: number;
  fontSizes?: {
    base?: string;
    small?: string;
    large?: string;
  };
  cornerRadius?: string;
  spineWidth?: string;
  className?: string;
}

export function OldBookReader({
  pages,
  startPage = 0,
  onPageChange,
  animationType = 'flip',
  singlePageOnly = true,
  showPageNumbers = true,
  showChapterTitle = true,
  showNavigation = true,
  showProgress = true,
  paperColor = '#f7f3e9',
  textureOpacity = 0.1,
  fontSizes = {},
  cornerRadius = '8px',
  spineWidth = '12px',
  className = '',
}: OldBookReaderProps) {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const {
    currentPageIndex,
    currentPage,
    prevPage,
    totalPages,
    goToPage,
    canGoNext,
    canGoPrev,
    progress,
  } = useBookPagination({ pages, startPage, onPageChange });

  // Check screen size for two-page spread unless singlePageOnly is true
  useEffect(() => {
    const checkScreenSize = () => {
      if (singlePageOnly) {
        setIsWideScreen(false);
      } else {
        setIsWideScreen(window.innerWidth > 768);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [singlePageOnly]);

  // Set CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--book-paper-color', paperColor);
    root.style.setProperty('--book-texture-opacity', textureOpacity.toString());
    root.style.setProperty('--book-corner-radius', cornerRadius);
    root.style.setProperty('--book-spine-width', spineWidth);
    
    if (fontSizes.base) root.style.setProperty('--book-font-size-base', fontSizes.base);
    if (fontSizes.small) root.style.setProperty('--book-font-size-small', fontSizes.small);
    if (fontSizes.large) root.style.setProperty('--book-font-size-large', fontSizes.large);
  }, [paperColor, textureOpacity, cornerRadius, spineWidth, fontSizes]);

  // Handle page navigation with animation
  const handlePageChange = useCallback(async (newPageIndex: number) => {
    if (isAnimating || newPageIndex === currentPageIndex) return;
    
    setIsAnimating(true);
    goToPage(newPageIndex);
    
    // Wait for animation to complete
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [isAnimating, currentPageIndex, goToPage]);

  const handleNextPage = useCallback(() => {
    if (canGoNext) {
      handlePageChange(currentPageIndex + 1);
    }
  }, [canGoNext, currentPageIndex, handlePageChange]);

  const handlePrevPage = useCallback(() => {
    if (canGoPrev) {
      handlePageChange(currentPageIndex - 1);
    }
  }, [canGoPrev, currentPageIndex, handlePageChange]);

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canGoNext) {
      handleNextPage();
    }
    if (isRightSwipe && canGoPrev) {
      handlePrevPage();
    }
  };

  // Handle progress bar clicks
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newPageIndex = Math.floor(percentage * totalPages);
    handlePageChange(newPageIndex);
  };

  // Sanitize HTML content (basic implementation)
  const sanitizeHTML = (html: string): string => {
    // In a real application, you'd want to use a proper HTML sanitization library
    // like DOMPurify for security
    return html;
  };

  if (!currentPage) {
    return (
      <div className="old-book-reader flex items-center justify-center min-h-[600px]">
        <p className="text-muted-foreground">No pages available</p>
      </div>
    );
  }

  const renderPage = (page: BookPage, pageNumber: number, isLeftPage = false) => (
    <motion.div
      key={page.id}
      className="book-page flex-1"
      initial={{ opacity: 0, x: isLeftPage ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {showChapterTitle && page.title && (
        <div className="book-chapter-title">
          {page.title}
        </div>
      )}
      
      <div 
        className="book-page-content newspaper-page"
        dangerouslySetInnerHTML={{ 
          __html: sanitizeHTML(page.content) 
        }}
      />
      
      {showPageNumbers && (
        <div className="book-page-number">
          {pageNumber}
        </div>
      )}
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className={`old-book-reader relative ${className}`}
      role="region"
      aria-label="Old book reader"
      aria-live="polite"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main content area */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPageIndex}
            className={isWideScreen ? "book-spread" : "flex flex-col"}
            initial={animationType === 'flip' ? { rotateY: 90 } : { opacity: 0 }}
            animate={animationType === 'flip' ? { rotateY: 0 } : { opacity: 1 }}
            exit={animationType === 'flip' ? { rotateY: -90 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {isWideScreen ? (
              <>
                {/* Two-page spread layout */}
                {prevPage && renderPage(prevPage, currentPageIndex, true)}
                
                {/* Spine */}
                <div className="book-spine" />
                
                {renderPage(currentPage, currentPageIndex + 1, false)}
              </>
            ) : (
              /* Single page layout */
              renderPage(currentPage, currentPageIndex + 1)
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        {showNavigation && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className={`book-nav-button prev ${!canGoPrev ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={handlePrevPage}
              disabled={!canGoPrev || isAnimating}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={`book-nav-button next ${!canGoNext ? 'opacity-30 cursor-not-allowed' : ''}`}
              onClick={handleNextPage}
              disabled={!canGoNext || isAnimating}
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Progress bar */}
        {showProgress && totalPages > 1 && (
          <div
            className="book-progress"
            onClick={handleProgressClick}
            role="progressbar"
            aria-valuenow={currentPageIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalPages}
            aria-label={`Page ${currentPageIndex + 1} of ${totalPages}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Focus management could be improved here
              }
            }}
          >
            <div
              className="book-progress-bar"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        )}
      </div>

      {/* Page change announcement for screen readers */}
      <div className="sr-only" aria-live="polite">
        Page {currentPageIndex + 1} of {totalPages}
        {currentPage?.title && ` - ${currentPage.title}`}
      </div>
    </div>
  );
}
