import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export function BlogPage() {
  // Set page title for SEO
  useEffect(() => {
    document.title = 'Blog & Articles | Mizan Rahman - Portfolio';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read my latest articles and tutorials on software development, web technologies, and programming best practices.');
    }
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Blog & Articles</CardTitle>
          <p className="text-muted-foreground">
            Sharing insights, tutorials, and thoughts on software development, technology trends, and best practices.
          </p>
        </CardHeader>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 h-full">
            <CardHeader>
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit text-xs">
                  {post.category}
                </Badge>
                <CardTitle className="text-lg line-clamp-2">
                  {post.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {blogPosts.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available at the moment.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
