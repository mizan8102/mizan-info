import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Palette, Eye, Type, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export interface SettingsFABProps {
  isOpen?: boolean;
  onClose?: () => void;
  animationType: 'flip' | 'fade';
  setAnimationType: (type: 'flip' | 'fade') => void;
  showPageNumbers: boolean;
  setShowPageNumbers: (show: boolean) => void;
  showChapterTitle: boolean;
  setShowChapterTitle: (show: boolean) => void;
  showNavigation: boolean;
  setShowNavigation: (show: boolean) => void;
  showProgress: boolean;
  setShowProgress: (show: boolean) => void;
  paperColor: string;
  setPaperColor: (color: string) => void;
  textureOpacity: number;
  setTextureOpacity: (opacity: number) => void;
  fontSizes: {
    base: string;
    small: string;
    large: string;
  };
  setFontSizes: (sizes: { base: string; small: string; large: string }) => void;
  cornerRadius: string;
  setCornerRadius: (radius: string) => void;
  spineWidth: string;
  setSpineWidth: (width: string) => void;
}

export function SettingsFAB({
  isOpen: isOpenProp,
  onClose,
  animationType,
  setAnimationType,
  showPageNumbers,
  setShowPageNumbers,
  showChapterTitle,
  setShowChapterTitle,
  showNavigation,
  setShowNavigation,
  showProgress,
  setShowProgress,
  paperColor,
  setPaperColor,
  textureOpacity,
  setTextureOpacity,
  fontSizes,
  setFontSizes,
  cornerRadius,
  setCornerRadius,
  spineWidth,
  setSpineWidth,
}: SettingsFABProps) {
  const [isOpen, setIsOpen] = useState<boolean>(Boolean(isOpenProp));
  const [activeSection, setActiveSection] = useState<string | null>(null);

  React.useEffect(() => {
    setIsOpen(Boolean(isOpenProp));
  }, [isOpenProp]);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const presetColors = [
    { name: 'Parchment', value: '#f7f3e9' },
    { name: 'Cream', value: '#f5f5dc' },
    { name: 'Ivory', value: '#fffff0' },
    { name: 'Antique', value: '#faebd7' },
    { name: 'Sepia', value: '#f4e4bc' },
    { name: 'Vintage', value: '#e6d3a3' },
  ];

  return (
    <>
      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
              onClose && onClose();
            }}
          >
            <motion.div
              className="fixed top-20 right-6 w-80 max-h-[70vh] overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-0 shadow-2xl">
                <div className="p-4 border-b border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Reader Settings
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                    Customize your reading experience
                  </p>
                </div>

                <div className="p-4 space-y-4 max-h-[50vh] overflow-y-auto">
                  {/* Animation Settings */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSection('animation')}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Palette className="h-4 w-4 text-amber-600" />
                        <span className="font-medium text-amber-900 dark:text-amber-100">Animation</span>
                      </div>
                      {activeSection === 'animation' ? (
                        <ChevronUp className="h-4 w-4 text-amber-600" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-amber-600" />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeSection === 'animation' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pl-6">
                            <div>
                              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                Page Transition
                              </label>
                              <select
                                value={animationType}
                                onChange={(e) => setAnimationType(e.target.value as 'flip' | 'fade')}
                                className="w-full p-2 border border-amber-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                              >
                                <option value="flip">Page Flip</option>
                                <option value="fade">Fade Transition</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Display Settings */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSection('display')}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Eye className="h-4 w-4 text-amber-600" />
                        <span className="font-medium text-amber-900 dark:text-amber-100">Display</span>
                      </div>
                      {activeSection === 'display' ? (
                        <ChevronUp className="h-4 w-4 text-amber-600" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-amber-600" />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeSection === 'display' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pl-6">
                            <div className="space-y-2">
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={showPageNumbers}
                                  onChange={(e) => setShowPageNumbers(e.target.checked)}
                                  className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                                />
                                <span className="text-sm text-amber-800 dark:text-amber-200">Show Page Numbers</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={showChapterTitle}
                                  onChange={(e) => setShowChapterTitle(e.target.checked)}
                                  className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                                />
                                <span className="text-sm text-amber-800 dark:text-amber-200">Show Chapter Titles</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={showNavigation}
                                  onChange={(e) => setShowNavigation(e.target.checked)}
                                  className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                                />
                                <span className="text-sm text-amber-800 dark:text-amber-200">Show Navigation</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                <input
                                  type="checkbox"
                                  checked={showProgress}
                                  onChange={(e) => setShowProgress(e.target.checked)}
                                  className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                                />
                                <span className="text-sm text-amber-800 dark:text-amber-200">Show Progress Bar</span>
                              </label>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Appearance Settings */}
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleSection('appearance')}
                      className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Type className="h-4 w-4 text-amber-600" />
                        <span className="font-medium text-amber-900 dark:text-amber-100">Appearance</span>
                      </div>
                      {activeSection === 'appearance' ? (
                        <ChevronUp className="h-4 w-4 text-amber-600" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-amber-600" />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeSection === 'appearance' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pl-6">
                            <div>
                              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                Paper Color
                              </label>
                              <div className="grid grid-cols-3 gap-2 mb-3">
                                {presetColors.map((color) => (
                                  <button
                                    key={color.name}
                                    onClick={() => setPaperColor(color.value)}
                                    className={`w-full h-8 rounded border-2 ${
                                      paperColor === color.value
                                        ? 'border-amber-600 ring-2 ring-amber-200'
                                        : 'border-gray-300'
                                    }`}
                                    style={{ backgroundColor: color.value }}
                                    title={color.name}
                                  />
                                ))}
                              </div>
                              <input
                                type="color"
                                value={paperColor}
                                onChange={(e) => setPaperColor(e.target.value)}
                                className="w-full h-8 rounded border border-amber-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                Texture Opacity: {Math.round(textureOpacity * 100)}%
                              </label>
                              <input
                                type="range"
                                min="0"
                                max="0.5"
                                step="0.05"
                                value={textureOpacity}
                                onChange={(e) => setTextureOpacity(parseFloat(e.target.value))}
                                className="w-full"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                Corner Radius: {cornerRadius}
                              </label>
                              <input
                                type="range"
                                min="0"
                                max="20"
                                step="2"
                                value={parseInt(cornerRadius)}
                                onChange={(e) => setCornerRadius(`${e.target.value}px`)}
                                className="w-full"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-2">
                                Spine Width: {spineWidth}
                              </label>
                              <input
                                type="range"
                                min="8"
                                max="24"
                                step="2"
                                value={parseInt(spineWidth)}
                                onChange={(e) => setSpineWidth(`${e.target.value}px`)}
                                className="w-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="p-4 border-t border-amber-200 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-900/10">
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      onClose && onClose();
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Done
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
