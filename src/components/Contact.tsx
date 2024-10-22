import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Ready to <span className="gradient-text">Invest</span> with Confidence?
        </h2>
        <p className="text-center text-xl mb-8 text-gray-700">
          At Red Cloud Ventures, we're here to help you unlock the full potential of your commercial real estate investments. Reach out today to learn more about our current opportunities and how we can help you achieve your financial goals.
        </p>
        <div className="flex justify-center">
          <a href="#" onClick={() => (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/redcloudventures/consultation'})} className="btn-primary flex items-center">
            <Mail className="mr-2" size={20} /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;