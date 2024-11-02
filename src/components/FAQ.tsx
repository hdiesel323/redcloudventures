import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { FAQ as FAQType } from '../config/siteConfig';

const FAQItem: React.FC<FAQType> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  );
};

interface FAQSectionProps {
  title: string;
  faqs: FAQType[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, faqs }) => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        {title.split(' ').map((word, index) =>
          index % 3 === 0 ? <span key={index} className="gradient-text">{word} </span> : word + ' '
        )}
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;