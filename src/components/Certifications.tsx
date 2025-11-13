import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import certWindows from "@/assets/cert-windows-command.png";
import certOracleFoundations from "@/assets/cert-oracle-ai-foundations.png";
import certOracleProfessional from "@/assets/cert-oracle-ai-professional.png";
import certSQL from "@/assets/cert-sql-postgresql.png";

const Certifications = () => {
  const certifications = [
    {
      image: certWindows,
      title: "Windows Command Mastery for Ethical Hackers",
      issuer: "Udemy",
      date: "2024",
      category: "Cybersecurity",
    },
    {
      image: certOracleFoundations,
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "October 2025",
      category: "Cloud & AI",
    },
    {
      image: certOracleProfessional,
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle University",
      date: "October 2025",
      category: "Cloud & AI",
    },
    {
      image: certSQL,
      title: "SQL and PostgreSQL for Beginners: Become a SQL Expert",
      issuer: "Udemy",
      date: "July 2025",
      category: "Database",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="glass-effect overflow-hidden hover:border-accent/50 transition-all animate-fade-in group"
            >
              <div className="relative overflow-hidden aspect-video bg-background/50">
                <img
                  src={cert.image}
                  alt={`${cert.title} - ${cert.issuer} Certification`}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="mb-2">
                    {cert.category}
                  </Badge>
                  <Award className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-accent mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
