import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code, Thermometer, Share2 } from "lucide-react";

const projects = [
  {
    title: "GitHub Timeline Updates Tool",
    description: "Scrapes GitHub repo data and generates timeline-style summaries. Uses GitHub API for commit history and project evolution tracking.",
    icon: Github,
    githubUrl: "https://github.com/Atharva-Kulkarni-694/github-pulse-emails.git",
    technologies: ["Python", "GitHub API", "Data Scraping", "Timeline Analysis"],
    category: "API Integration"
  },
  {
    title: "Social Media Marketing Automation Tool",
    description: "Built content scheduler for automated social posting. Features include engagement prediction and analytics dashboard.",
    icon: Share2,
    githubUrl: "https://github.com/Atharva-Kulkarni-694/Social-Media-Automation.git",
    technologies: ["Python", "Automation", "Analytics", "Social Media APIs"],
    category: "Automation"
  },
  {
    title: "Industrial Temperature & pH Monitoring System",
    description: "Sensor-based monitoring for temperature and pH conditions. Includes calibration, real-time logging, and anomaly alerts.",
    icon: Thermometer,
    githubUrl: "https://github.com/Atharva-Kulkarni-694/Temperature-And-pH-Indicator.git",
    technologies: ["IoT", "Sensors", "Real-time Monitoring", "Alerts"],
    category: "IoT"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating expertise in AI/ML, automation, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="glow" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="group/btn"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};