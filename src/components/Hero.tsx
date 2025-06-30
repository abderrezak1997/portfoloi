
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <img
                src="/img/prof.jpg"
                alt="Abderrezak Sahnoune"
                className="w-48 h-48 rounded-full mx-auto lg:mx-0 shadow-2xl border-4 border-blue-300/30 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              Abderrezak
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Sahnoune Chaouche
              </span>
            </h1>
            <p className="text-xl text-blue-200 mb-6 animate-fade-in">
              Ingénieur en génie logiciel et système distribué
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed animate-fade-in">
              Développeur Full-stack passionné avec une solide expérience en développement 
              et implémentation de solutions informatiques efficaces.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in">
              <a
                href="mailto:abderrezaksc@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Me Contacter
              </a>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="font-medium">Téléphone:</span>
                  <span>07 80 41 23 78</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span className="font-medium">Email:</span>
                  <span className="text-blue-300">abderrezaksc@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
