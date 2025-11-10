import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { aboutData, professionalSummary } from '../data/aboutData';

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
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={aboutData.profileImage}
                  alt={aboutData.name}
                  className="w-32 h-32 rounded-full border-4 border-primary/20 shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {aboutData.name}
                </h1>
                <p className="text-xl text-primary font-semibold mb-4">
                  {aboutData.title}
                </p>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  {aboutData.summary}
                </p>
                <div className="mt-4">
                  <blockquote className="italic text-primary font-medium">
                    "{aboutData.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{aboutData.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{aboutData.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4 text-muted-foreground" />
              <a 
                href={`https://linkedin.com/in/${aboutData.linkedin}`}
                className="text-sm text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/{aboutData.linkedin}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-muted-foreground" />
              <a 
                href={`https://github.com/${aboutData.github}`}
                className="text-sm text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/{aboutData.github}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="prose prose-sm max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: professionalSummary }}
          />
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Backend Development</h4>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'PHP', 'Node.js', 'RESTful APIs', 'GraphQL'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Database & Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
