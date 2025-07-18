import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Users } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "PHP", level: 60 },
    ]
  },
  {
    category: "Frameworks/Libraries",
    icon: Database,
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "OpenCV", level: 75 },
      { name: "Hugging Face", level: 85 },
      { name: "LangChain", level: 80 },
    ]
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "AWS SageMaker", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Tableau", level: 75 },
      { name: "Power BI", level: 70 },
      { name: "n8n", level: 75 },
    ]
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Team Management", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Mentoring", level: 80 },
    ]
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and soft skills developed through hands-on experience in AI/ML development and data science.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <Card 
              key={category.category} 
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 group-hover:shadow-glow"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};