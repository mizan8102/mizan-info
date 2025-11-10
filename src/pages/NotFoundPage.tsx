import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export function NotFoundPage() {
  // Set page title for SEO
  useEffect(() => {
    document.title = '404 - Page Not Found | Mizan Rahman - Portfolio';
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link to="/about">
                <Home className="w-4 h-4 mr-2" />
                Go to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse Blog
              </Link>
            </Button>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Error 404 - The requested page could not be found.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
