
import React from 'react';

const Education = () => {
  const educations = [
    {
      degree: "Master En Génie Logicielle Et Systèmes De Distribuer",
      institution: "Université Djilali Bounaama Khemis Miliana",
      year: "2021",
      type: "Master"
    },
    {
      degree: "Licence en Système Informatique",
      institution: "Université Djilali Bounaama Khemis Miliana", 
      year: "2019",
      type: "Licence"
    },
    {
      degree: "BACCALAUREATS Sciences Expérimentales",
      institution: "",
      year: "2016",
      type: "Baccalauréat"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">
          Formations
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{edu.year}</span>
                </div>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mb-4 inline-block">
                  {edu.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{edu.degree}</h3>
                {edu.institution && (
                  <p className="text-blue-300 font-medium">{edu.institution}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
