import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { AboutPage } from '../pages/AboutPage';
import { BlogPage } from '../pages/BlogPage';
import { BlogPostPage } from '../pages/BlogPostPage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { SkillsPage } from '../pages/SkillsPage';
import { EducationPage } from '../pages/EducationPage';
import { AchievementsPage } from '../pages/AchievementsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Redirect root to about */}
          <Route index element={<Navigate to="/about" replace />} />
          
          {/* Main pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          
          {/* Blog routes */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
