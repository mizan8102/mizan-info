import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { useBookPagination, BookPage } from '../hooks/useBookPagination';
import { cn } from '../lib/utils';
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
      <Card className="old-book-reader flex items-center justify-center min-h-[600px] border-2">
        <CardContent className="flex flex-col justify-center items-center p-8">
          <BookOpen className="mb-4 w-16 h-16 text-muted-foreground" />
          <p className="text-lg text-muted-foreground">No pages available</p>
        </CardContent>
      </Card>
    );
  }

  const renderPage = (page: BookPage, pageNumber: number, isLeftPage = false) => (
    <motion.div
      key={page.id}
      className="flex-1"
      initial={{ opacity: 0, x: isLeftPage ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
        <Card className={cn(
          "overflow-hidden relative h-full book-page",
          "min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[800px]",
          "border shadow-md transition-all duration-300 bg-card",
          "hover:shadow-lg"
        )}>
          {showChapterTitle && page.title && (
            <div className="absolute top-3 right-3 left-3 z-10">
              <Badge variant="secondary" className="text-xs font-medium shadow-sm">
                {page.title}
              </Badge>
            </div>
          )}
          
          <CardContent className={cn(
            "book-page-content h-full",
            "p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8",
            showChapterTitle && page.title ? "pt-10 sm:pt-11 md:pt-12" : "pt-3 sm:pt-4 md:pt-5",
            showPageNumbers ? "pb-10 sm:pb-11 md:pb-12" : "pb-3 sm:pb-4 md:pb-5"
          )}>
            <div 
              className={cn(
                "max-w-none prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl",
                "prose-headings:font-serif prose-headings:text-foreground",
                "prose-p:text-foreground prose-p:leading-relaxed prose-p:text-justify",
                "prose-strong:text-foreground prose-em:text-muted-foreground",
                "prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground",
                "prose-ul:text-foreground prose-ol:text-foreground",
                "prose-li:text-foreground prose-li:leading-relaxed",
                "prose-h1:text-xl sm:prose-h1:text-2xl md:prose-h1:text-3xl lg:prose-h1:text-4xl",
                "prose-h2:text-lg sm:prose-h2:text-xl md:prose-h2:text-2xl lg:prose-h2:text-3xl",
                "prose-h3:text-base sm:prose-h3:text-lg md:prose-h3:text-xl lg:prose-h3:text-2xl",
                "prose-p:text-sm sm:prose-p:text-base md:prose-p:text-base lg:prose-p:text-lg",
                "prose-li:text-sm sm:prose-li:text-base md:prose-li:text-base lg:prose-li:text-lg"
              )}
              style={{
                fontFamily: 'var(--book-font-body)',
                lineHeight: '1.7',
                textRendering: 'optimizeLegibility'
              }}
              dangerouslySetInnerHTML={{ 
                __html: sanitizeHTML(page.content) 
              }}
            />
          </CardContent>
          
          {showPageNumbers && (
            <div className="absolute right-3 bottom-3">
              <Badge variant="outline" className="text-xs shadow-sm">
                {pageNumber}
              </Badge>
            </div>
          )}
        </Card>
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full old-book-reader",
        "bg-gradient-to-br from-background to-muted/20",
        "overflow-hidden rounded-lg",
        className
      )}
      role="region"
      aria-label="Old book reader"
      aria-live="polite"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Compact Header with page info */}
      <div className="flex justify-between items-center px-3 py-2 border-b sm:px-4 sm:py-3 bg-muted/30">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          <span className="text-xs font-medium sm:text-sm text-foreground">
            Portfolio Reader
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="px-2 py-1 text-xs">
            {currentPageIndex + 1} / {totalPages}
          </Badge>
          {showProgress && (
            <div className="hidden items-center space-x-2 sm:flex">
              <div className="overflow-hidden w-16 sm:w-20 md:w-24 h-1.5 sm:h-2 rounded-full bg-muted">
                <div
                  className="h-full rounded-full transition-all duration-300 bg-primary"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content area - optimized for more content */}
      <div className="relative p-2 sm:p-3 md:p-4 lg:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPageIndex}
            className={cn(
              "w-full",
              isWideScreen ? "flex gap-2 items-start sm:gap-3 md:gap-4 lg:gap-6" : "flex flex-col"
            )}
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
                <Separator orientation="vertical" className="h-full min-h-[600px] sm:min-h-[700px] md:min-h-[750px] lg:min-h-[800px] w-0.5 sm:w-1 bg-primary/20" />
                
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
              variant="outline"
              size="icon"
              className={cn(
                "absolute top-1/2 left-1 sm:left-2 md:left-3 -translate-y-1/2 z-20",
                "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10",
                "bg-background/90 backdrop-blur-sm border",
                "hover:bg-background hover:scale-105 transition-all duration-200",
                "shadow-md hover:shadow-lg",
                !canGoPrev && "opacity-30 cursor-not-allowed"
              )}
              onClick={handlePrevPage}
              disabled={!canGoPrev || isAnimating}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "absolute top-1/2 right-1 sm:right-2 md:right-3 -translate-y-1/2 z-20",
                "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10",
                "bg-background/90 backdrop-blur-sm border",
                "hover:bg-background hover:scale-105 transition-all duration-200",
                "shadow-md hover:shadow-lg",
                !canGoNext && "opacity-30 cursor-not-allowed"
              )}
              onClick={handleNextPage}
              disabled={!canGoNext || isAnimating}
              aria-label="Next page"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </>
        )}
      </div>

      {/* Mobile progress bar */}
      {showProgress && totalPages > 1 && (
        <div className="px-3 py-2 sm:hidden">
          <div
            className="overflow-hidden w-full h-1.5 rounded-full cursor-pointer bg-muted"
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
                handleProgressClick(e as any);
              }
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-300 bg-primary"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Page change announcement for screen readers */}
      <div className="sr-only" aria-live="polite">
        Page {currentPageIndex + 1} of {totalPages}
        {currentPage?.title && ` - ${currentPage.title}`}
      </div>
    </div>
  );
}
