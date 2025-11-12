import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Name 1",
      category: "Category",
      description: "Brief description of the project and its main features or purpose.",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3",
        "Key feature 4",
      ],
      technologies: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "Project Name 2",
      category: "Category",
      description: "Another project showcasing your skills and expertise.",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3",
        "Key feature 4",
      ],
      technologies: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      title: "Project Name 3",
      category: "Category",
      description: "Description of another impressive project in your portfolio.",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3",
        "Key feature 4",
      ],
      technologies: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge solutions developed to address real-world challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-effect overflow-hidden hover:border-accent/50 transition-all group animate-fade-in"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-secondary/90 text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground">Key Features:</p>
                  <ul className="list-none space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-0.5">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs border-accent/30 text-accent"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-secondary to-purple-600 hover:opacity-90"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
