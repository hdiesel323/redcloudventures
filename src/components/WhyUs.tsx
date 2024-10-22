import React from 'react';
import { Check } from 'lucide-react';

interface WhyUsProps {
  title: string;
  points: string[];
}

const WhyUs: React.FC<WhyUsProps> = ({ title, points }) => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {title.split(' ').map((word, index) => 
            index % 2 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
          )}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start">
              <Check className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={24} />
              <p className="text-lg text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;