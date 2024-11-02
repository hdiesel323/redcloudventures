import React, { FC } from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial as TestimonialType } from '../config/siteConfig';

const TestimonialCard: FC<TestimonialType> = ({ content, name, role }) => (
  <div className="card p-8 text-left relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <Quote className="text-teal-400 mb-4" size={48} />
    <p className="text-xl italic mb-6 relative z-10">{content}</p>
    <div>
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-teal-400">{role}</p>
    </div>
  </div>
);

interface TestimonialSectionProps {
  testimonials: TestimonialType[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-teal-500/5 to-gray-900/0"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">What our <span className="gradient-text">clients say</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;