import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Technology Experience",
      company: "Various Projects",
      period: "2022 - Present",
      location: "Remote",
      description: "Gained hands-on experience in website development using Django and Python. Collaborated with a supportive team at Dequeint to learn from professionals and contribute to real-world projects.",
      highlights: [
        "Website development with Django framework",
        "Python programming and best practices", 
        "Team collaboration and professional development",
        "Real-world project contributions"
      ]
    },
    {
      role: "Software Development Intern",
      company: "MSF Healthcare",
      period: "2023",
      location: "India",
      description: "Developed and maintained web applications, focusing on healthcare solutions and patient management systems.",
      highlights: [
        "Healthcare application development",
        "Patient management system design",
        "Database optimization and management",
        "Quality assurance and testing"
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science",
      school: "BMU Mumbai University",
      period: "2021 - 2025",
      description: "School of Computing"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-neon-blue">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.role}
                  className="glass rounded-2xl p-6 hover:shadow-card transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-neon-purple font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                      <div className="flex items-center justify-start sm:justify-end mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center justify-start sm:justify-end">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-neon-purple">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className="glass rounded-2xl p-6 hover:shadow-card transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
                >
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-neon-blue font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
              
              {/* Achievements */}
              <div className="glass rounded-2xl p-6 hover:shadow-card transition-all duration-500 hover:scale-105">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Achievements & Certifications
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 mr-3"></div>
                    <span className="text-sm text-muted-foreground">Hackathon Team Leader</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 mr-3"></div>
                    <span className="text-sm text-muted-foreground">Law Fest Winner</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-secondary rounded-full mt-2 mr-3"></div>
                    <span className="text-sm text-muted-foreground">Python & Django Framework Certification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;