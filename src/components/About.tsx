
import React from "react";
import { Code, School, Briefcase, Github } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-accent/30 py-16 md:py-32">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center rounded-full mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Developer</h3>
            <p className="text-muted-foreground">
              I'm a passionate developer with experience in various programming languages and technologies. I enjoy building projects that solve real-world problems.
            </p>
          </div>
          
          <div className="card flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center rounded-full mb-4">
              <School size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Student</h3>
            <p className="text-muted-foreground">
              Currently pursuing B.Tech (Hons.) and M.S. in Computer Science at IIIT Hyderabad, focused on expanding my knowledge and skills.
            </p>
          </div>
          
          <div className="card flex flex-col items-center text-center">
            <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center rounded-full mb-4">
              <Github size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Open Source</h3>
            <p className="text-muted-foreground">
              I contribute to open source projects and develop my own projects on GitHub, focusing on blockchain, web development, and system programming.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-card rounded-lg p-6 md:p-8 shadow-md">
          <p className="text-lg leading-relaxed">
            I'm Prajas Wadekar, a Computer Science student passionate about programming, 3-D vision, and building innovative solutions. With experience in languages like C, C++, Python, and JavaScript, I enjoy working on projects that challenge me and expand my skillset.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Currently, I'm pursuing my B.Tech (Hons.) and M.S. in Computer Science at International Institute Of Information Technology Hyderabad. I previously studied at Indian Institute Of Information Technology Vadodara.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            When I'm not coding, I enjoy playing the guitar and exploring new technologies.
          </p>
        </div>
        
        <div className="mt-12 flex justify-center">
          <a href="#projects" className="btn btn-lg btn-primary">
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
