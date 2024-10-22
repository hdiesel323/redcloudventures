import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="text-center py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-6 leading-tight text-gray-900">
          {title.split(' ').map((word, index) => 
            index % 3 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
          )}
        </h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-700">{subtitle}</p>
        <div className="flex justify-center items-center">
          <a className="btn-primary text-lg flex items-center" href="#contact">
            Contact Us <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;