import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Users } from "lucide-react";
import achievement1 from "@/assets/achievement-1.jpg";
import achievement2 from "@/assets/achievement-2.jpg";
import achievement3 from "@/assets/achievement-3.jpg";
import achievement4 from "@/assets/achievement-4.jpg";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "DevSpark Winner - DevForge Hackathon",
      organization: "IEEE CS SYP",
      description: "Secured winner position in the prestigious 24-hour DevForge Hackathon, competing against talented teams and delivering an innovative technical solution.",
      year: "2024",
      type: "Hackathon",
    },
    {
      icon: Award,
      title: "Best NSS Volunteer Award",
      organization: "K.S.Rangasamy College of Technology",
      description: "Recognized and awarded on the 31st Annual Day for outstanding social service, leadership, and dedication to community development initiatives.",
      year: "2025",
      type: "Leadership",
    },
    {
      icon: Users,
      title: "Zita Student Association Coordinator",
      organization: "College Department",
      description: "Successfully organized multiple Hackathons, guest lectures, and department sessions, fostering a collaborative learning environment for peers.",
      year: "2025",
      type: "Leadership",
    },
  ];

  const gallery = [
    {
      image: achievement1,
      caption: "DevSpark Hackathon Team Achievement",
    },
    {
      image: achievement2,
      caption: "Certificate Presentation with Faculty",
    },
    {
      image: achievement3,
      caption: "Recognition Ceremony",
    },
    {
      image: achievement4,
      caption: "Team Collaboration Session",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Awards, honors, and recognitions earned through dedication and excellence
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="glass-effect p-6 hover:border-accent/50 transition-all animate-fade-in group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {achievement.type}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-accent mb-2">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.description}
                    </p>
                    <p className="text-xs text-muted-foreground font-semibold">
                      {achievement.year}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Photo Gallery */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Event <span className="text-gradient">Gallery</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((item, index) => (
              <Card
                key={index}
                className="glass-effect overflow-hidden hover:border-accent/50 transition-all group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <p className="text-foreground font-semibold p-4 text-sm">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
