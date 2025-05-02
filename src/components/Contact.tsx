
import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      title: "Email",
      value: "prajaswadekar@gmail.com",
      href: "mailto:prajaswadekar@gmail.com",
      icon: <Mail className="h-6 w-6" />,
    },
    {
      title: "GitHub",
      value: "github.com/PrajasW",
      href: "https://github.com/PrajasW",
      icon: <Github className="h-6 w-6" />,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/prajas-wadekar-41847b1b0",
      href: "https://www.linkedin.com/in/prajas-wadekar-41847b1b0/",
      icon: <Linkedin className="h-6 w-6" />,
    },
  ];

  return (
    <section id="contact" className="bg-accent/30 py-16 md:py-32">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Feel free to reach out to me for collaborations, opportunities, or just to say hello!
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:bg-primary/5 transition-colors flex flex-col items-center text-center p-8"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  {link.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{link.title}</h3>
                <p className="text-muted-foreground text-sm">{link.value}</p>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="mailto:prajaswadekar@gmail.com"
            className="btn btn-lg btn-primary"
          >
            <Mail className="mr-2 h-5 w-5" /> Send Me an Email
          </a>
          
          <p className="mt-8 text-muted-foreground">
            I'm currently looking for new opportunities and collaborations.
            <br />
            Don't hesitate to reach out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
