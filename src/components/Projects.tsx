import React from 'react';
import { ExternalLink, Heart, Users, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    
    {
      title: "Civil Society Platform",
      description: "Plateforme numérique complète pour l'Observatoire National de la Société Civile permettant la gestion et le suivi des organisations de la société civile en Algérie.",
      technologies: ["React JS", "Node JS", "PostgreSQL", "Django"],
      url: "https://civilsociety.marsad.dz/login",
      icon: <Users className="w-8 h-8" />,
      image: "/img/civil.png",
      features: [
        "Gestion des organisations civiles",
        "Système d'authentification sécurisé",
        "Interface d'administration complète",
        "Rapports et statistiques"
      ]
    },
    {
      title: "Blood Donation System",
      description: "Système de gestion des donneurs de sang intégré à la plateforme Civil Society, facilitant l'organisation des campagnes de don de sang.",
      technologies: ["React JS", "Node JS", "PostgreSQL", "Django"],
      url: "https://civilsociety.marsad.dz/donors",
      icon: <Heart className="w-8 h-8" />,
      image: "/img/blood.png",
      features: [
        "Enregistrement des donneurs",
        "Gestion des campagnes de don",
        "Suivi des donations",
        "Notifications automatiques"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-300 hover:text-blue-200 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </a>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Fonctionnalités principales :</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies utilisées :</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
