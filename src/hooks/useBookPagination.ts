import { useState, useCallback, useEffect } from 'react';

export interface BookPage {
  id: string;
  title?: string;
  content: string;
  image?: string;
}

export interface UseBookPaginationProps {
  pages: BookPage[];
  startPage?: number;
  onPageChange?: (pageIndex: number) => void;
}

export interface UseBookPaginationReturn {
  currentPageIndex: number;
  currentPage: BookPage | null;
  nextPage: BookPage | null;
  prevPage: BookPage | null;
  totalPages: number;
  goToPage: (pageIndex: number) => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  progress: number; // 0-1
}

export function useBookPagination({
  pages,
  startPage = 0,
  onPageChange,
}: UseBookPaginationProps): UseBookPaginationReturn {
  const [currentPageIndex, setCurrentPageIndex] = useState(startPage);

  const totalPages = pages.length;
  const currentPage = pages[currentPageIndex] || null;
  const nextPage = currentPageIndex < totalPages - 1 ? pages[currentPageIndex + 1] : null;
  const prevPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : null;
  const canGoNext = currentPageIndex < totalPages - 1;
  const canGoPrev = currentPageIndex > 0;
  const progress = totalPages > 0 ? (currentPageIndex + 1) / totalPages : 0;

  const goToPage = useCallback((pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPageIndex(pageIndex);
      onPageChange?.(pageIndex);
    }
  }, [totalPages, onPageChange]);

  const goToNextPage = useCallback(() => {
    if (canGoNext) {
      const nextIndex = currentPageIndex + 1;
      setCurrentPageIndex(nextIndex);
      onPageChange?.(nextIndex);
    }
  }, [canGoNext, currentPageIndex, onPageChange]);

  const goToPrevPage = useCallback(() => {
    if (canGoPrev) {
      const prevIndex = currentPageIndex - 1;
      setCurrentPageIndex(prevIndex);
      onPageChange?.(prevIndex);
    }
  }, [canGoPrev, currentPageIndex, onPageChange]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPrevPage();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNextPage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage]);

  // Reset to start page if pages change
  useEffect(() => {
    if (startPage !== currentPageIndex) {
      setCurrentPageIndex(startPage);
    }
  }, [startPage, currentPageIndex]);

  return {
    currentPageIndex,
    currentPage,
    nextPage,
    prevPage,
    totalPages,
    goToPage,
    goToNextPage,
    goToPrevPage,
    canGoNext,
    canGoPrev,
    progress,
  };
}
