import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export function CleanBlogPage() {
  useEffect(() => {
    document.title = 'Blog & Articles | Mizan Rahman - Software Engineer';
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            <span className="text-green-400">#</span> Blog & Articles
          </h1>
          <p className="text-gray-400 text-lg">
            Insights on software development, architecture, and technology
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={`/blog/${post.id}`}
                className="block p-6 bg-black/50 border border-green-400/20 rounded-lg hover:border-green-400/50 transition-all duration-300 h-full"
              >
                {/* Category */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2 py-1 bg-green-400/10 text-green-400 text-xs font-mono rounded">
                    {post.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-green-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-green-400/5 text-gray-500 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-0.5 bg-green-400/5 text-gray-500 text-xs rounded">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 font-mono">No articles available yet.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}