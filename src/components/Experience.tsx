import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Cloud Security Intern",
      company: "Zscaler Technologies",
      period: "May 2023 - July 2023",
      location: "AICTE-Eduskills Program",
      description: "Led optimization of cloud security settings and policies, reducing operational costs while maintaining robust protection.",
      achievements: [
        "Optimized cloud security settings and policies at Zscaler, reducing operational costs while maintaining robust company protection",
        "Streamlined security processes by automating policy enforcement and accelerating incident response",
        "Managed a diverse team to deliver a complex cloud security solution on time and within budget",
        "Ensured seamless integration with existing company systems",
      ],
      technologies: ["Cloud Security", "Policy Enforcement", "Incident Response", "Team Management"],
    },
    {
      type: "education",
      title: "Bachelor of Technology - Information Technology",
      company: "K.S.Rangasamy College Of Technology",
      period: "2023 - 2027",
      location: "Tiruchengode",
      description: "Pursuing B.Tech with CGPA of 8.38, focusing on cybersecurity and software development.",
      achievements: [
        "Winner Position in DevSpark – DevForge 24-hour Hackathon conducted by IEEE CS SYP",
        "Awarded Best NSS Volunteer on the 31st Annual Day for outstanding social service and leadership",
        "Coordinator of Zita Student Association (Jan-Jul 2025)",
        "Relevant Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Software Engineering",
      ],
      technologies: ["Data Structures", "Operating Systems", "DBMS", "Software Engineering"],
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
            Positions of <span className="text-gradient">Responsibility</span>
          </h3>
          <Card className="glass-effect p-6 hover:border-accent/50 transition-all">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <div className="text-accent text-2xl">🎯</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Coordinator</h4>
                    <p className="text-accent">Zita Student Association</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Jan 2025 - Jul 2025</p>
                </div>
                <ul className="list-none space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Organized and ran several Hackathons, guest lectures, and department sessions for the Zita Student Association</span>
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">▸</span>
                    <span>Managed event logistics and guided peers to create a supportive and inspiring learning atmosphere</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
