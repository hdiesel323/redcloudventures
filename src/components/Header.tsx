import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  siteName: string;
}

const Header: React.FC<HeaderProps> = ({ siteName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">{siteName}</div>
        <nav className="hidden md:flex space-x-6">
          <a className="hover:text-white transition-colors duration-300" href="#">Home</a>
          <a className="hover:text-white transition-colors duration-300" href="#features">Our Approach</a>
          <a className="hover:text-white transition-colors duration-300" href="#portfolio">Portfolio</a>
          <a className="hover:text-white transition-colors duration-300" href="#faq">FAQ</a>
          <a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <a className="hidden md:inline-block btn-primary" href="#" onClick={() => (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/redcloudventures/consultation'})}>Schedule Consultation</a>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 flex flex-col space-y-4 md:hidden">
          <a className="hover:text-white transition-colors duration-300" href="#">Home</a>
          <a className="hover:text-white transition-colors duration-300" href="#features">Our Approach</a>
          <a className="hover:text-white transition-colors duration-300" href="#portfolio">Portfolio</a>
          <a className="hover:text-white transition-colors duration-300" href="#faq">FAQ</a>
          <a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
          <a className="btn-primary text-center" href="#" onClick={() => (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/redcloudventures/consultation'})}>Schedule Consultation</a>
        </nav>
      )}
    </header>
  );
};

export default Header;