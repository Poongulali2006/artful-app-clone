import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Job Title",
      company: "Company Name",
      period: "Jan 2024 - Present",
      location: "Location",
      description: "Brief description of your role and responsibilities.",
      achievements: [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2",
        "Achievement or responsibility 3",
      ],
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
    },
    {
      type: "education",
      title: "Degree Program",
      company: "Institution Name",
      period: "Year - Year",
      location: "Location",
      description: "Your degree and area of focus.",
      achievements: [
        "Academic achievement 1",
        "Project or competition 2",
        "Relevant coursework 3",
      ],
      technologies: ["Subject 1", "Subject 2", "Subject 3"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven track record with extensive experience across multiple domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-effect p-6 hover:border-accent/50 transition-all animate-fade-in"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="text-accent" size={20} />
                    ) : (
                      <GraduationCap className="text-accent" size={20} />
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                    <ul className="list-none space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-accent/30 text-accent hover:bg-accent/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Professional <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((cert) => (
              <Card
                key={cert}
                className="glass-effect p-6 text-center hover:border-accent/50 hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-bold text-foreground mb-2">Certification Name</h4>
                <p className="text-sm text-muted-foreground mb-1">Issuing Organization</p>
                <p className="text-xs text-accent">Year</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
