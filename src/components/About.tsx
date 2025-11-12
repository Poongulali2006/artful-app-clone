import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "5+", label: "Projects Completed" },
    { number: "2+", label: "Awards Won" },
    { number: "10+", label: "Certifications" },
  ];

  const expertise = [
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6",
    "Skill 7",
    "Skill 8",
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-gradient-purple">
              Professional Title & Role
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Write your professional summary here. Describe your experience, expertise, and what
              drives you in your field. Share your educational background and current pursuits.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Add more details about your work, internships, or projects. Highlight what makes you
              unique and your professional goals.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="glass-effect p-6 text-center hover:border-accent/50 transition-all group"
              >
                <div className="text-4xl font-bold text-gradient group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Expertise */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Core <span className="text-gradient">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <Card
                key={index}
                className="glass-effect p-4 text-center hover:border-accent/50 hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-accent font-semibold">{skill}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
