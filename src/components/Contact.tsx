import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarveshsolanki@email.com",
      href: "mailto:sarveshsolanki@email.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 9902778556",
      href: "tel:+919902778556"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-neon-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#", 
      color: "hover:text-neon-purple"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-secondary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate and create something amazing together? Let's start the conversation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                and ways to contribute to meaningful work. Whether you have a project in mind 
                or just want to connect, I'd love to hear from you.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center p-4 glass rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-gradient-primary rounded-lg mr-4 group-hover:shadow-neon transition-all duration-300">
                    <contact.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium text-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 glass rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-110 group ${social.color}`}
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <social.icon className="h-6 w-6 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 hover:shadow-card transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors min-h-[120px]"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;