import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  siteName: string;
}

const Footer: React.FC<FooterProps> = ({ siteName }) => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <a className="text-2xl font-bold gradient-text" href="#">{siteName}</a>
          <p>Commercial Real Estate Investment Firm</p>
        </div>
        <div className="space-x-6 mb-6">
          <a className="hover:text-blue-600 transition-colors duration-300" href="#">Home</a>
          <a className="hover:text-blue-600 transition-colors duration-300" href="#about">About</a>
          <a className="hover:text-blue-600 transition-colors duration-300" href="#portfolio">Portfolio</a>
          <a className="hover:text-blue-600 transition-colors duration-300" href="#process">Process</a>
          <a className="hover:text-blue-600 transition-colors duration-300" href="#contact">Contact</a>
        </div>
        <div className="mb-6">
          <p>Phone: +1(877) 449-6600 | Email: info@redcloudventures.com</p>
        </div>
        <div className="mb-6 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-600"><Linkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-600"><Twitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook size={24} /></a>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;