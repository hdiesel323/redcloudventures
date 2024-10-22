import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Stay Informed on the Latest <span className="gradient-text">Investment Opportunities</span>
        </h2>
        <p className="text-center text-xl mb-8 text-gray-700">
          Subscribe to our newsletter for exclusive updates on the latest market trends and real estate opportunities with Red Cloud Ventures.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-full bg-white text-gray-800 focus:outline-none border border-gray-300"
            />
            <button type="submit" className="btn-primary rounded-r-full flex items-center">
              <Send className="mr-2" size={20} /> Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;