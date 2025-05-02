
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-portfolio-purple">
              Prajas<span className="text-background"> Wadekar</span>
            </h2>
            <p className="mt-2 text-background/80">Computer Science Student & Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/PrajasW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-portfolio-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/prajas-wadekar-41847b1b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-portfolio-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:prajaswadekar@gmail.com"
              className="text-background/80 hover:text-portfolio-purple transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-background/60">
            © {currentYear} Prajas Wadekar. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4 text-sm">
              <a href="#about" className="text-background/60 hover:text-portfolio-purple transition-colors">About</a>
              <a href="#projects" className="text-background/60 hover:text-portfolio-purple transition-colors">Projects</a>
              <a href="#skills" className="text-background/60 hover:text-portfolio-purple transition-colors">Skills</a>
              <a href="#education" className="text-background/60 hover:text-portfolio-purple transition-colors">Education</a>
              <a href="#contact" className="text-background/60 hover:text-portfolio-purple transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
