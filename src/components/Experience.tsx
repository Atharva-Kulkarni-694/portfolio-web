import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "internship",
    title: "Data Science Intern",
    company: "NullClass",
    location: "Pune, MH",
    period: "May 2025 – Present",
    description: "Developed AI/ML applications using Python, Pandas, scikit-learn, etc. Built data preprocessing pipelines and model integration modules. Participated in sprint planning, code reviews, and production deployments.",
    skills: ["Python", "Pandas", "scikit-learn", "AI/ML", "Data Preprocessing", "Model Integration"],
    icon: Briefcase
  },
  {
    type: "startup",
    title: "Co-Founder & Developer",
    company: "Quagster",
    location: "Pune, MH",
    period: "July 2025 – Present",
    description: "Developed a full-stack responsive website with authentication and dashboards. Built backend integration using modern JS frameworks. Spearheaded backend logic and team technical leadership.",
    skills: ["Full-stack Development", "Authentication", "Backend Integration", "Team Leadership"],
    icon: Building
  },
  {
    type: "education",
    title: "B.Tech in Computer Science (Artificial Intelligence)",
    company: "GH Raisoni College of Engineering and Management",
    location: "Pune",
    period: "2022 – 2026",
    description: "CGPA: 7.5. Specialized coursework in Gen-AI, Machine Learning, Neural Networks, and Web Development. Active participation in technical projects and coding competitions.",
    skills: ["Gen-AI", "Machine Learning", "Neural Networks", "Web Development"],
    icon: GraduationCap
  }
];

const getVariantByType = (type: string) => {
  switch (type) {
    case "internship":
      return "default";
    case "startup":
      return "secondary";
    case "education":
      return "outline";
    default:
      return "default";
  }
};

const getColorByType = (type: string) => {
  switch (type) {
    case "internship":
      return "text-primary";
    case "startup":
      return "text-accent";
    case "education":
      return "text-secondary-foreground";
    default:
      return "text-primary";
  }
};

export const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in AI/ML development, startup experience, and academic achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className="relative flex items-start gap-8 mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow`}>
                  <exp.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="hover:shadow-glow transition-all duration-300 border-border/50">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant={getVariantByType(exp.type)} className="capitalize">
                            {exp.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <CardTitle className={`text-xl ${getColorByType(exp.type)}`}>
                        {exp.title}
                      </CardTitle>
                      
                      <CardDescription className="text-base font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline" 
                            className="text-xs border-primary/20 hover:border-primary/40 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};