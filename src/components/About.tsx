import React from 'react';

interface AboutProps {
  title: string;
  description: string;
}

const About: React.FC<AboutProps> = ({ title, description }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          {title.split(' ').map((word, index) => 
            index % 3 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
          )}
        </h2>
        <p className="text-xl text-gray-700">{description}</p>
      </div>
    </section>
  );
};

export default About;