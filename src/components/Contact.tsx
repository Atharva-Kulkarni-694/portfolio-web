import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Send, X } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kulkarniatharva879@gmail.com",
    href: "mailto:kulkarniatharva879@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9022929310",
    href: "tel:+919022929310"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Atharva-Kulkarni-694",
    color: "hover:text-primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/atharva-kulkarni-049750271/",
    color: "hover:text-accent"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:kulkarniatharva879@gmail.com",
    color: "hover:text-primary"
  },
  {
    icon: X,
    label: "x (Twitter)",
    href: "https://x.com/AtharvaK1326",
    color: "hover:text-primary"
  }
];

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations. Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="animate-fade-in border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to me through any of the following channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Connect */}
            <Card className="animate-fade-in border-border/50" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="text-2xl">Quick Connect</CardTitle>
                <CardDescription>
                  Connect with me on social platforms or send a direct message.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className={`${social.color} transition-all hover:scale-110`}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    asChild
                  >
                    <a href="mailto:kulkarniatharva879@gmail.com">
                      <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full group"
                    asChild
                  >
                    <a href="https://linkedin.com/in/atharva-kulkarni-049750271/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};