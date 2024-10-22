import React from 'react';
import { Search, FileCheck, Handshake, TrendingUp } from 'lucide-react';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessProps {
  title: string;
  steps: ProcessStep[];
}

const Process: React.FC<ProcessProps> = ({ title, steps }) => {
  const icons = [Search, FileCheck, Handshake, TrendingUp];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {title.split(' ').map((word, index) => 
            index % 2 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
          )}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center">
                <Icon className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;