
import React from "react";
import { Code2, Terminal, Database, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "My-Shell",
      description: "Program which can perform basic shell like operations along with custom commands designed for customization.",
      tools: "C",
      link: "https://github.com/PrajasW/my-shell",
      icon: <Terminal className="h-10 w-10 text-primary" />,
    },
    {
      title: "zFIR",
      description: "Web application to propose a decentralized way of taking FIRs and registering complaints, bringing transparency to how crimes are reported and tracked.",
      tools: "Solidity, Hardhat, Ether.js, IPFS",
      link: "https://github.com/PrajasW/zFIR",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Mail Chat",
      description: "A mail-like web application which can be used to chat with friends, combining email and chat functionality.",
      tools: "Python, Django, Tailwind CSS",
      link: "https://github.com/PrajasW/mail_chat",
      icon: <Code2 className="h-10 w-10 text-primary" />,
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-32">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are some of my featured projects. Each demonstrates different skills and technologies I've worked with.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="bg-muted p-6 flex items-center justify-center h-48">
                {project.icon}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground flex-grow mb-4">{project.description}</p>
                <div className="text-sm text-portfolio-purple font-medium mb-4">
                  {project.tools}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/PrajasW"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-primary"
          >
            <Github className="mr-2 h-5 w-5" /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
