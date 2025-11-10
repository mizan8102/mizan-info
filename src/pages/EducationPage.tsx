import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export function EducationPage() {
  // Set page title for SEO
  useEffect(() => {
    document.title = 'Education | Mizan Rahman - Portfolio';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Educational background, degrees, certifications, and academic achievements of Mizan Rahman.');
    }
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Education & Learning</h1>
        <p className="text-muted-foreground">
          My educational journey, academic achievements, and continuous learning path.
        </p>
      </div>

      {/* Coming Soon Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl">Educational Background</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="py-12 space-y-4 text-center">
            <GraduationCap className="mx-auto w-16 h-16 text-muted-foreground" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Coming Soon</h3>
              <p className="mx-auto max-w-md text-muted-foreground">
                Detailed information about my educational background, degrees, certifications, 
                and academic projects will be available here soon.
              </p>
            </div>
            <Badge variant="outline" className="mt-4">
              Under Development
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder sections */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Degrees & Certifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="py-8 text-center text-muted-foreground">
                <Award className="mx-auto mb-2 w-12 h-12" />
                <p className="text-sm">Academic degrees and professional certifications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Academic Timeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="py-8 text-center text-muted-foreground">
                <Calendar className="mx-auto mb-2 w-12 h-12" />
                <p className="text-sm">Educational milestones and timeline</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
