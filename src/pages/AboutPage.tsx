import React, { useEffect } from 'react';
import { CleanHeroSection } from '../components/CleanHeroSection';
import { aboutData } from '../data/aboutData';

export function AboutPage() {
  // Set page title for SEO
  useEffect(() => {
    document.title = 'About Me | Mizan Rahman - Portfolio';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', aboutData.summary);
    }
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, []);

  return (
    <div className="space-y-0">
      {/* Clean Hero Section */}
      <CleanHeroSection />
    </div>
  );
}
