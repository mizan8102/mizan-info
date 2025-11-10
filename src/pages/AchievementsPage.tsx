import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Trophy, Award, Star, Target } from 'lucide-react';

export function AchievementsPage() {
  // Set page title for SEO
  useEffect(() => {
    document.title = 'Achievements | Mizan Rahman - Portfolio';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional achievements, awards, recognitions, and milestones of Mizan Rahman.');
    }
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Achievements & Recognition</h1>
        <p className="text-muted-foreground">
          Professional milestones, awards, and recognitions throughout my career journey.
        </p>
      </div>

      {/* Coming Soon Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl">Professional Achievements</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 space-y-4">
            <Trophy className="h-16 w-16 mx-auto text-muted-foreground" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Coming Soon</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Detailed information about my professional achievements, awards, recognitions, 
                and career milestones will be showcased here soon.
              </p>
            </div>
            <Badge variant="outline" className="mt-4">
              Under Development
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder sections */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Awards</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-8 text-muted-foreground">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <p className="text-sm">Professional awards and honors</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Recognition</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-8 text-muted-foreground">
                <Star className="h-12 w-12 mx-auto mb-2" />
                <p className="text-sm">Industry recognition and testimonials</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Milestones</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-8 text-muted-foreground">
                <Target className="h-12 w-12 mx-auto mb-2" />
                <p className="text-sm">Career milestones and goals</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
