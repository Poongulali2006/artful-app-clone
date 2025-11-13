import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Poongulali G. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/poongulalig/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
            >
              <Linkedin size={18} className="text-accent" />
            </a>
            <a
              href="https://github.com/poongulali"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
            >
              <Github size={18} className="text-accent" />
            </a>
            <a
              href="mailto:poongulali2006@gmail.com"
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-all"
            >
              <Mail size={18} className="text-accent" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
