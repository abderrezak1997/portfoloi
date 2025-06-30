import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Ingénieur en informatique IT",
      company: "Observatoire National de la Société Civile",
      location: "Alger",
      period: "20 octobre 2023 — Présent",
      type: "Développeur Full-stack",
      tasks: [
        "Création plateforme Civil Society",
        "Hébergement de code in VMs et télémoteur",
        "Gérer Data centre",
        "Contribution au développement d'applications web utilisant des technologies frontend et backend modernes",
        "Installation et maintenance informatique",
        "Résoudre les problèmes informatique"
      ]
    },
    {
      title: "Professeur d'informatique",
      company: "CEM Bouslimani Saad",
      location: "El Affroun - Blida",
      period: "2022",
      type: "Ingénieur informatique",
      tasks: [
        "Développer les capacités des étudiants à maîtriser l'outils informatique",
        "Maintenance des ordinateurs",
        "Enseignement des programmes Microsoft office (Excel / Word /PPT)",
        "Enseignement programme Scratch"
      ]
    },
    {
      title: "Contrôleur en Statistique National",
      company: "",
      location: "",
      period: "2022",
      type: "Ingénieur informatique",
      tasks: [
        "Résoudre les problèmes d'application",
        "Enseignement application Statistiques",
        "Suivi du travail des agents statistiques en application"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">
          Expériences Professionnelles
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-blue-400/30"></div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    {exp.company && (
                      <p className="text-blue-300 font-medium">{exp.company}</p>
                    )}
                    {exp.location && (
                      <p className="text-gray-400">{exp.location}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {exp.type}
                    </span>
                    <p className="text-gray-400 mt-2">{exp.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
