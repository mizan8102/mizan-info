import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('book-reader-theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('book-reader-theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    // Ensure Tailwind dark: classes work
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Update CSS custom properties with new color scheme
    if (theme === 'dark') {
      root.style.setProperty('--primary', '183 25% 32%'); // #264653 in HSL
      root.style.setProperty('--primary-foreground', '0 0% 98%');
      root.style.setProperty('--background', '0 0% 7%');
      root.style.setProperty('--foreground', '0 0% 98%');
      root.style.setProperty('--muted', '0 0% 15%');
      root.style.setProperty('--muted-foreground', '0 0% 63%');
      root.style.setProperty('--border', '0 0% 20%');
      root.style.setProperty('--accent', '0 0% 15%');
      root.style.setProperty('--accent-foreground', '0 0% 98%');
      root.style.setProperty('--secondary', '0 0% 15%');
      root.style.setProperty('--secondary-foreground', '0 0% 98%');
    } else {
      root.style.setProperty('--primary', '183 25% 32%'); // #264653 in HSL
      root.style.setProperty('--primary-foreground', '0 0% 98%');
      root.style.setProperty('--background', '0 0% 100%');
      root.style.setProperty('--foreground', '0 0% 9%');
      root.style.setProperty('--muted', '0 0% 96%');
      root.style.setProperty('--muted-foreground', '0 0% 35%');
      root.style.setProperty('--border', '0 0% 85%');
      root.style.setProperty('--accent', '0 0% 94%');
      root.style.setProperty('--accent-foreground', '0 0% 15%');
      root.style.setProperty('--secondary', '0 0% 94%');
      root.style.setProperty('--secondary-foreground', '0 0% 15%');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
