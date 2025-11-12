import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "8.38", label: "CGPA" },
    { number: "2023-27", label: "B.Tech IT" },
    { number: "2+", label: "Awards Won" },
    { number: "3+", label: "Major Projects" },
  ];

  const expertise = [
    "Penetration Testing",
    "Ethical Hacking",
    "Cloud Security",
    "Python",
    "JavaScript",
    "React Native",
    "Metasploit",
    "Wireshark",
    "Kali Linux",
    "Burp Suite",
    "TensorFlow",
    "Full-stack Development",
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
              IT Student & Security-Minded Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a motivated and detail-oriented Information Technology student passionate about cyber security, 
              artificial intelligence, and cloud technologies. I love building intelligent, secure systems that 
              create safer digital spaces for everyone. With hands-on experience in penetration testing, ethical 
              hacking, and Full-stack development, I enjoy translating complex problems into pragmatic, actionable solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing B.Tech in Information Technology at K.S.Rangasamy College Of Technology, Tiruchengode 
              (CGPA: 8.38). Acknowledged for leadership, innovative thinking, and collaboration, I combine technical 
              competence, creativity, and devotion to lifelong learning as I continue to grow and contribute positively 
              to the future of technology.
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
