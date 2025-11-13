import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-accent">
              <span className="text-2xl">👋</span>
              <span className="text-lg">Hi, I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Poongulali G
              <span className="block mt-2 text-gradient">Cybersecurity & AI Enthusiast</span>
            </h1>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-accent" />
              <p className="text-lg text-muted-foreground pl-8">
                Motivated Information Technology student passionate about cybersecurity, artificial intelligence, 
                and cloud technologies. Building intelligent, secure systems that create safer digital spaces. 
                Combining technical competence with creativity and lifelong learning.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow me</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/poongulali-g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                >
                  <Linkedin size={18} className="text-accent" />
                </a>
                <a
                  href="mailto:poongulali2006@gmail.com"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                >
                  <Mail size={18} className="text-accent" />
                </a>
                <a
                  href="https://github.com/poongulali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                >
                  <Github size={18} className="text-accent" />
                </a>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary to-purple-600 hover:opacity-90 transition-opacity glow-purple mt-6"
            >
              View Projects
            </Button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl animate-glow" />
              <div className="relative w-80 h-80 rounded-full border-4 border-accent/30 overflow-hidden animate-float">
                <img
                  src={profileImage}
                  alt="Poongulali G - Cybersecurity & AI Enthusiast"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center gap-8 mt-20 flex-wrap opacity-50">
          <div className="text-4xl">⚛️</div>
          <div className="text-4xl">🐍</div>
          <div className="text-4xl">🔒</div>
          <div className="text-4xl">💻</div>
          <div className="text-4xl">🛡️</div>
          <div className="text-4xl">⚡</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
