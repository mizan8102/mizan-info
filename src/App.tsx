import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import PortfolioApp from './PortfolioApp';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
