import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Feature } from '../config/siteConfig';

const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover-lift group">
    <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon size={48} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface FeaturesProps {
  title: string;
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ title, features }) => {
  return (
    <section id="features" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        {title.split(' ').map((word, index) => 
          index % 3 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
        )}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;