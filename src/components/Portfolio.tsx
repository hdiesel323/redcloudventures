import React from 'react';
import { Building } from 'lucide-react';

interface PortfolioItem {
  title: string;
  description: string;
}

interface PortfolioProps {
  title: string;
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ title, items }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          {title.split(' ').map((word, index) => 
            index % 2 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
          )}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Building className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;