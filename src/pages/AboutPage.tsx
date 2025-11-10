import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
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
          <div className="p-8 bg-gradient-to-r from-primary/10 to-primary/5">
            <div className="flex flex-col gap-8 items-center md:flex-row">
              <div className="flex-shrink-0">
                <img
                  src={aboutData.profileImage}
                  alt={aboutData.name}
                  className="w-32 h-32 rounded-full border-4 shadow-lg border-primary/20"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="mb-2 text-3xl font-bold md:text-4xl text-foreground">
                  {aboutData.name}
                </h1>
                <p className="mb-4 text-xl font-semibold text-primary">
                  {aboutData.title}
                </p>
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  {aboutData.summary}
                </p>
                <div className="mt-4">
                  <blockquote className="italic font-medium text-primary">
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
          <CardTitle className="flex gap-2 items-center">
            <Mail className="w-5 h-5 text-primary" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{aboutData.email}</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{aboutData.phone}</span>
            </div>
            <div className="flex gap-3 items-center">
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
            <div className="flex gap-3 items-center">
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
            className="max-w-none prose prose-sm dark:prose-invert"
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
              <h4 className="mb-2 font-semibold">Backend Development</h4>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'PHP', 'Node.js', 'RESTful APIs', 'GraphQL'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Frontend Development</h4>
              <div className="flex flex-wrap gap-2">
                {['Vue.js', 'React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">Database & Cloud</h4>
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
