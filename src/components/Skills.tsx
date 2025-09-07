const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "Python", "Java", "HTML", "CSS", "SQL", "C++"]
    },
    {
      category: "Frameworks & Libraries", 
      items: ["Django", "React.js", "Node.js", "Bootstrap", "Express.js"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "VS Code", "MongoDB", "PostgreSQL", "AWS"]
    },
    {
      category: "Soft Skills",
      items: ["Team Leadership", "Problem Solving", "Project Management", "Communication"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development and software engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="glass rounded-2xl p-6 hover:shadow-card transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="flex items-center justify-between p-2 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div 
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            dot <= 4 
                              ? 'bg-gradient-primary shadow-neon' 
                              : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;