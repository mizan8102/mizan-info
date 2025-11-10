import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Code, Database, Cloud, Wrench, Globe, Star, Award, BookOpen } from 'lucide-react';

export function SkillsPage() {
  // Set page title for SEO
  useEffect(() => {
    document.title = 'Technical Skills | Mizan Rahman - Portfolio';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive overview of my technical skills including Laravel, Vue.js, React, Node.js, AWS, Docker, and more technologies.');
    }
    
    return () => {
      document.title = 'Mizan Rahman - Portfolio';
    };
  }, []);

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Code,
      description: 'Server-side technologies and frameworks',
      skills: [
        { name: 'Laravel', proficiency: 'Expert', years: '4+ years' },
        { name: 'PHP', proficiency: 'Expert', years: '4+ years' },
        { name: 'Node.js', proficiency: 'Advanced', years: '2+ years' },
        { name: 'RESTful APIs', proficiency: 'Expert', years: '4+ years' },
        { name: 'GraphQL', proficiency: 'Intermediate', years: '1+ years' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      description: 'Modern web interfaces and user experiences',
      skills: [
        { name: 'Vue.js', proficiency: 'Expert', years: '3+ years' },
        { name: 'React', proficiency: 'Advanced', years: '2+ years' },
        { name: 'JavaScript', proficiency: 'Expert', years: '4+ years' },
        { name: 'TypeScript', proficiency: 'Advanced', years: '2+ years' },
        { name: 'Tailwind CSS', proficiency: 'Advanced', years: '2+ years' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      description: 'Data management and storage solutions',
      skills: [
        { name: 'MySQL', proficiency: 'Expert', years: '4+ years' },
        { name: 'PostgreSQL', proficiency: 'Advanced', years: '3+ years' },
        { name: 'MongoDB', proficiency: 'Intermediate', years: '2+ years' },
        { name: 'Redis', proficiency: 'Advanced', years: '2+ years' },
        { name: 'Elasticsearch', proficiency: 'Intermediate', years: '1+ years' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Infrastructure and deployment automation',
      skills: [
        { name: 'AWS', proficiency: 'Advanced', years: '2+ years' },
        { name: 'Docker', proficiency: 'Advanced', years: '3+ years' },
        { name: 'CI/CD', proficiency: 'Intermediate', years: '2+ years' },
        { name: 'Linux', proficiency: 'Advanced', years: '3+ years' },
        { name: 'Git', proficiency: 'Expert', years: '4+ years' }
      ]
    }
  ];

  const getProficiencyVariant = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'default';
      case 'Advanced': return 'secondary';
      case 'Intermediate': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Technical Skills</h1>
        <p className="text-muted-foreground">
          A comprehensive overview of my technical expertise and experience across various technologies.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.title}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getProficiencyVariant(skill.proficiency)}>
                            {skill.proficiency}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {skill.years}
                          </span>
                        </div>
                      </div>
                      {index < category.skills.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Skills & Tools */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Wrench className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Tools & Platforms</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">VS Code</Badge>
              <Badge variant="secondary">PhpStorm</Badge>
              <Badge variant="secondary">Postman</Badge>
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">Slack</Badge>
              <Badge variant="secondary">Jira</Badge>
              <Badge variant="secondary">Trello</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">AWS Developer</span>
              <Badge variant="outline">In Progress</Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Laravel Certified</span>
              <Badge variant="default">Certified</Badge>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm">Vue.js Expert</span>
              <Badge variant="default">Certified</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Learning</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <span className="text-sm font-medium">Kubernetes</span>
              <p className="text-xs text-muted-foreground">Container orchestration</p>
            </div>
            <Separator />
            <div className="space-y-1">
              <span className="text-sm font-medium">Machine Learning</span>
              <p className="text-xs text-muted-foreground">AI fundamentals</p>
            </div>
            <Separator />
            <div className="space-y-1">
              <span className="text-sm font-medium">System Design</span>
              <p className="text-xs text-muted-foreground">Scalable architectures</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experience Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-primary" />
            <span>Experience Highlights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 text-center">
              <div className="text-2xl font-bold text-primary">4+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <p className="text-sm text-muted-foreground">Major Projects</p>
            </div>
            <div className="space-y-2 text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
