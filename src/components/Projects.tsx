import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Job of Engineering",
      description: "Platform with Machine Learning-based Contact management system for detecting job-relevant keywords and categorizing resumes.",
      tech: ["Python", "Django", "Machine Learning", "PostgreSQL"],
      gradient: "bg-gradient-primary",
      icon: "🔍"
    },
    {
      title: "Blog Application", 
      description: "Full-stack blog application with user authentication, content management, and social features.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      gradient: "bg-gradient-secondary",
      icon: "📝"
    },
    {
      title: "Artist Portfolio",
      description: "Dynamic portfolio website showcasing artistic works with interactive galleries and animations.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      gradient: "bg-gradient-primary",
      icon: "🎨"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass rounded-2xl overflow-hidden hover:shadow-card transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className={`${project.gradient} p-6 relative overflow-hidden animate-gradient`}>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-neon transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Code2 className="mr-2 h-5 w-5 group-hover:text-neon-blue transition-colors" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;