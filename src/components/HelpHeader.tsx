import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, MousePointer, Keyboard, Smartphone, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HelpHeaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpHeader({ isOpen, onClose }: HelpHeaderProps) {

  const helpSections = [
    {
      icon: <MousePointer className="h-5 w-5" />,
      title: "Mouse Navigation",
      items: [
        "Click left side of book → Previous page",
        "Click right side of book → Next page",
        "Click progress bar → Jump to any page",
        "Hover over book → Show navigation buttons"
      ]
    },
    {
      icon: <Keyboard className="h-5 w-5" />,
      title: "Keyboard Shortcuts",
      items: [
        "← (Left Arrow) → Previous page",
        "→ (Right Arrow) → Next page",
        "Space → Next page",
        "Shift + Space → Previous page"
      ]
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Touch Gestures",
      items: [
        "Swipe left → Next page",
        "Swipe right → Previous page",
        "Tap progress bar → Jump to page",
        "Pinch to zoom → Adjust text size"
      ]
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Settings & Customization",
      items: [
        "Click ⚙️ button → Open settings panel",
        "Change paper color → 6 presets + custom",
        "Adjust texture opacity → 0-50%",
        "Modify corner radius → 0-20px",
        "Set spine width → 8-24px"
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
            <motion.div
              className="fixed top-20 right-6 w-96 max-h-[80vh] overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-0 shadow-2xl">
                <div className="p-6 border-b border-amber-200 dark:border-amber-700">
                  <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 flex items-center gap-3">
                    <BookOpen className="h-6 w-6" />
                    How to Use the Old Book Reader
                  </h3>
                  <p className="text-sm text-amber-700 dark:text-amber-300 mt-2">
                    Master the art of digital book reading
                  </p>
                </div>

                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  {helpSections.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-amber-100 dark:bg-amber-800 rounded-lg text-amber-700 dark:text-amber-200">
                          {section.icon}
                        </div>
                        <h4 className="font-semibold text-amber-900 dark:text-amber-100 text-lg">
                          {section.title}
                        </h4>
                      </div>
                      <ul className="space-y-2 ml-12">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-amber-800 dark:text-amber-200 flex items-start gap-2">
                            <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}

                  {/* Additional Tips */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4 mt-6"
                  >
                    <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                      <span className="text-lg">💡</span>
                      Pro Tips
                    </h5>
                    <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                      <li>• Use two-page spread on wide screens for authentic book feel</li>
                      <li>• Customize paper color to match your reading preference</li>
                      <li>• Adjust texture opacity for better readability</li>
                      <li>• Try different animation types (flip vs fade)</li>
                      <li>• All settings are saved automatically</li>
                    </ul>
                  </motion.div>
                </div>

                <div className="p-6 border-t border-amber-200 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-900/10">
                  <Button
                    onClick={onClose}
                    className="w-full bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-700 text-white"
                  >
                    Got it! Close Help
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}
