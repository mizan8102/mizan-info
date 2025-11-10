import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Calendar, MapPin, Building } from 'lucide-react';
import { projects, workExperience, Project } from '../data/portfolioData';

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Set page title for SEO
  useEffect(() => {
    document.title = 'Portfolio & Projects | Mizan Rahman - Portfolio';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore my portfolio of SaaS platforms, ERP systems, FinTech applications, and other software development projects.');
    }
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, []);

  const categories = ['all', 'SaaS', 'ERP', 'FinTech', 'E-commerce', 'Other'];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'In Progress': return 'secondary';
      case 'Planned': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl">Portfolio & Projects</CardTitle>
          <p className="text-muted-foreground">
            A showcase of my professional work, including SaaS platforms, ERP systems, and FinTech applications.
          </p>
        </CardHeader>
      </Card>

      {/* Project Categories Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filter by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
              >
                {category === 'all' ? 'All Projects' : category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge variant={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-sm font-semibold">Key Features</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex gap-2 items-start">
                        <span className="mt-1 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Work Experience */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <div className="space-y-4">
          {workExperience.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-lg">{job.position}</CardTitle>
                    <div className="flex gap-4 items-center mt-1 text-sm text-muted-foreground">
                      <div className="flex gap-1 items-center">
                        <Building className="w-4 h-4" />
                        {job.company}
                      </div>
                      <div className="flex gap-1 items-center">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {job.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Key Responsibilities</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex gap-2 items-start">
                        <span className="mt-1 text-primary">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
