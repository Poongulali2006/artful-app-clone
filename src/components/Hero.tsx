import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

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
              Your Name
              <span className="block mt-2 text-gradient">Professional Title</span>
            </h1>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-accent" />
              <p className="text-lg text-muted-foreground pl-8">
                Description of your expertise and what you do. Add your unique value proposition
                and what makes you stand out in your field.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow me</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                >
                  <Linkedin size={18} className="text-accent" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
                >
                  <Twitter size={18} className="text-accent" />
                </a>
                <a
                  href="#"
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
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Profile"
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
