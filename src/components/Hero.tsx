import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Atharva Kulkarni
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                SOFTWARE & AI/ML DEVELOPER
              </p>
              <p className="text-lg text-accent">
                DATA SCIENCE LEARNER
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Results-oriented Computer Science undergrad specializing in Artificial Intelligence with hands-on expertise in machine learning, full-stack development, and applied data science. Passionate about building intelligent tools and solving real-world problems with scalable technology.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>9022929310</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>kulkarniatharva879@gmail.com</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                View Projects
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow-pulse" />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src="/uploads/4a8d6fa2-ffcd-450c-9aa3-92ef745b18ab.png" 
                  alt="Atharva Kulkarni" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};