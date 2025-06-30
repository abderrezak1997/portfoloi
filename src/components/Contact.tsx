
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 animate-fade-in">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 animate-fade-in">
            <p className="text-xl text-gray-300 mb-8">
              Prêt à collaborer sur votre prochain projet ? N'hésitez pas à me contacter !
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-400">Email:</span>
                <a
                  href="mailto:abderrezaksc@gmail.com"
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
                >
                  abderrezaksc@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-400">Téléphone:</span>
                <a
                  href="tel:0780412378"
                  className="text-blue-300 hover:text-blue-200 transition-colors duration-300"
                >
                  07 80 41 23 78
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-400">Localisation:</span>
                <span className="text-gray-300">Alger, Algérie</span>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-gray-400 animate-fade-in">
          <p>&copy; 2024 Abderrezak Sahnoune Chaouche. Tous droits réservés.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
