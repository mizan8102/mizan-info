import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { TerminalCard, TerminalText, TerminalCommand } from '../components/ui/terminal-card';

export function CyberpunkBlogPage() {
  useEffect(() => {
    document.title = 'Blog & Articles | Mizan Rahman - Software Engineer';
  }, []);

  return (
    <div className="min-h-screen p-6 pb-20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-black font-mono text-white mb-4">
            <span className="text-green-400"># </span>
            BLOG_ARCHIVE
          </h1>
          <p className="text-gray-300 font-mono">
            // Sharing insights, tutorials, and thoughts on software development
          </p>
        </motion.div>

        {/* Command Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TerminalCommand 
            command="find /blog -name '*.md' -type f | wc -l"
            output={`${blogPosts.length} articles found`}
            className="mb-8"
          />
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`}>
                <TerminalCard 
                  title={`${post.id}.md`}
                  variant="success"
                  className="h-full cursor-pointer hover:border-green-400/50 transition-all duration-200 group"
                >
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <div className="flex justify-between items-start">
                      <span className="px-2 py-1 bg-green-400/20 border border-green-400/50 rounded text-xs font-mono text-green-400">
                        {post.category.toUpperCase()}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white font-mono leading-tight group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Metadata */}
                    <div className="space-y-3 pt-4 border-t border-green-400/20">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs font-mono text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800 border border-gray-600 rounded text-xs font-mono text-gray-400">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </TerminalCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TerminalCard title="empty_state.log" variant="warning">
              <div className="text-center py-12">
                <TerminalText prefix="//" variant="muted" className="justify-center">
                  NO BLOG POSTS AVAILABLE AT THE MOMENT
                </TerminalText>
                <TerminalText prefix=">" className="justify-center mt-2">
                  Check back soon for technical articles and insights
                </TerminalText>
              </div>
            </TerminalCard>
          </motion.div>
        )}

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <TerminalCard title="blog_stats.json" variant="success">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  {blogPosts.length}
                </div>
                <div className="text-sm text-gray-400 font-mono">ARTICLES</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  {new Set(blogPosts.map(post => post.category)).size}
                </div>
                <div className="text-sm text-gray-400 font-mono">CATEGORIES</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  {new Set(blogPosts.flatMap(post => post.tags)).size}
                </div>
                <div className="text-sm text-gray-400 font-mono">TAGS</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400 font-mono">
                  {blogPosts.reduce((total, post) => {
                    const readTime = parseInt(post.readTime.split(' ')[0]);
                    return total + (isNaN(readTime) ? 0 : readTime);
                  }, 0)}
                </div>
                <div className="text-sm text-gray-400 font-mono">MIN_READ</div>
              </div>
            </div>
          </TerminalCard>
        </motion.div>

        {/* Featured Article */}
        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TerminalCard title="featured_article.spotlight" variant="success">
              <div className="space-y-4">
                <TerminalText prefix="//" variant="muted">
                  LATEST_PUBLICATION
                </TerminalText>
                <Link 
                  to={`/blog/${blogPosts[0].id}`}
                  className="block group"
                >
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white font-mono group-hover:text-green-400 transition-colors">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm font-mono text-gray-400">
                        <span>{blogPosts[0].category}</span>
                        <span>•</span>
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                    </div>
                  </div>
                </Link>
              </div>
            </TerminalCard>
          </motion.div>
        )}
      </div>
    </div>
  );
}