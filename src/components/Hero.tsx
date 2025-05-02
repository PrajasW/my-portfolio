
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-softPurple/30 via-transparent to-portfolio-skyBlue/20" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-portfolio-purple to-portfolio-brightBlue bg-clip-text text-transparent">
            Prajas Wadekar
          </h1>
          <p className="animate-fade-in text-xl md:text-2xl text-muted-foreground mb-8">
            Computer Science Student & Developer
          </p>
          
          <div className="flex justify-center gap-4 mb-12 animate-fade-in">
            <a
              href="https://github.com/PrajasW"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-outline hover-effect"
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/prajas-wadekar-41847b1b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-outline hover-effect"
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
            <a
              href="mailto:prajaswadekar@gmail.com"
              className="btn btn-lg btn-primary hover-effect"
            >
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </a>
          </div>
          
          <div className="animate-bounce mt-16">
            <a href="#about" className="inline-block">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
