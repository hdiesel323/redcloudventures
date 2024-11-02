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
          <h1 className="text-4xl font-bold text-blue-600 mb-2">{siteName}</h1>
          <p className="text-xl text-gray-600">Commercial Real Estate Acquisitions</p>
        </div>
        <div className="mb-8 text-lg">
          <p>Phone: +1 (877) 449-6600</p>
        </div>
        <div className="mb-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400"><Linkedin size={24} /></a>
          <a href="#" className="text-gray-400"><Twitter size={24} /></a>
          <a href="#" className="text-gray-400"><Facebook size={24} /></a>
        </div>
        <div className="text-gray-600">
          © 2024 {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;