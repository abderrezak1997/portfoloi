
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technologies Frontend",
      skills: ["React JS", "Next JS", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Technologies Backend", 
      skills: ["Node JS", "Django", "Python", "Base de Données"]
    },
    {
      title: "Outils & Systèmes",
      skills: ["MySQL", "PostgreSQL", "GitHub", "Visual Studio Code", "Windows/Ubuntu"]
    },
    {
      title: "Autres Compétences",
      skills: ["Microsoft Office", "Résolution de problèmes complexes", "Putty", "MobaXterm", "FileZilla", "VirtualBox VM"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">
          Compétences
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-center hover:text-blue-300 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
