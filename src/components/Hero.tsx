import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with neon effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            Sarvesh{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient">
              Solanki
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated professional committed to achieving excellence in every endeavor. 
            Continually seeking opportunities to improve skills and contribute positively to their team and organization.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="#" 
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-6 w-6 group-hover:text-neon-blue transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-neon-blue transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-6 w-6 group-hover:text-neon-blue transition-colors" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;