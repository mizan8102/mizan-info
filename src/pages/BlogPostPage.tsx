import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.id === slug);

  // Set page title for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Mizan Rahman - Portfolio`;
      
      // Set meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.excerpt;
        document.head.appendChild(meta);
      }
    }
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, [post]);

  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button asChild variant="outline" className="mb-4">
        <Link to="/blog">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </Button>

      {/* Blog Post Content */}
      <article>
        <Card>
          <CardHeader>
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                {post.category}
              </Badge>
              <CardTitle className="text-2xl md:text-3xl lg:text-4xl">
                {post.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-sm max-w-none dark:prose-invert prose-pre:bg-muted prose-pre:border prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </article>

      {/* Related Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Related Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Link to={`/blog/${relatedPost.id}`} className="space-y-2 block">
                      <Badge variant="outline" className="text-xs">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold text-sm line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(relatedPost.date).toLocaleDateString()}
                        <Clock className="w-3 h-3 ml-2" />
                        {relatedPost.readTime}
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
