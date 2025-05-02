
import React from "react";
import { Code, Database, Laptop, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C", "C++", "Python", "SQL", "JavaScript", "Solidity"]
    },
    {
      title: "Web Development",
      icon: <Laptop className="h-6 w-6" />,
      skills: ["React", "Tailwind CSS", "MUI", "Django", "HTML/CSS"]
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["Git", "Linux", "Blockchain", "IPFS", "Hardhat", "Ether.js"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["SQL", "Database Design", "Data Modeling"]
    }
  ];

  return (
    <section id="skills" className="bg-accent/30 py-16 md:py-32">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Here are the technologies, languages, and tools I've worked with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-md mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-background rounded-full text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-lg leading-relaxed mb-4">
            I'm the kind of person who wants computers to do the boring stuff—so I don't have to. I like building things that work for me, not the other way around. 
            </p>
            <p className="text-lg leading-relaxed">
            My goal is to create systems that automate, simplify, and just get things done—so I can focus on bigger ideas and let the machines handle the rest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
