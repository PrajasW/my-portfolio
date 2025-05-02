
import React from "react";
import { School } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "International Institute Of Information Technology Hyderabad",
      degree: "B.Tech (Hons.) in Computer Science and M.S. in Computer Science",
      period: "2024-2028 (ongoing)",
      gpa: "CGPA: 8.13/10"
    },
    {
      institution: "Indian Institute Of Information Technology Vadodara",
      degree: "B.Tech in Computer Science",
      period: "2022-2024",
      gpa: "CGPA: 8.44/10"
    }
  ];

  return (
    <section id="education" className="py-12 md:py-24 lg:py-32">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 px-4">
          My academic background in computer science and information technology.
        </p>

        <div className="max-w-3xl mx-auto px-4">
            <div className="space-y-6 md:space-y-8">
            {educationData.map((education, index) => (
              <div 
                key={index} 
                className="card hover:shadow-lg transition-all duration-300 border-l-4 border-primary animate-fade-in"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-1 flex-shrink-0">
                    <School className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold">{education.institution}</h3>
                      <p className="text-portfolio-purple mt-1 text-sm md:text-base">{education.degree}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between mt-3 text-sm md:text-base">
                      <p className="text-muted-foreground">{education.period}</p>
                      <p className="font-medium">{education.gpa}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 bg-card rounded-lg p-4 md:p-6 lg:p-8 shadow-md max-w-3xl mx-auto border-t-4 border-portfolio-purple px-4 md:px-8">
           <h3 className="text-xl md:text-2xl font-bold mb-4">Extracurricular</h3>
           <ul className="space-y-2 md:space-y-3 list-disc pl-5">
            <li>
              <span className="font-medium">GDSC IIITV</span> - Member of Google Developer Student Clubs
            </li>
            <li>
              <span className="font-medium">Blockchain Volunteer</span> - Contributing to blockchain initiatives and education
            </li>
            <li>
              <span className="font-medium">Guitar Player</span> - I play the guitar in my free time, follow me on <a href="https://www.instagram.com/prajas.pw/" target="_blank" rel="noopener noreferrer" className="text-portfolio-purple hover:underline">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
