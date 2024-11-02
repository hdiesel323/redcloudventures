import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  siteName: string;
}

const Header: React.FC<HeaderProps> = ({ siteName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCalendly = () => {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/rcv-1/redcloudventures?hide_event_type_details=1&hide_gdpr_banner=1'
    });
  };

  return (
    <header className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">{siteName}</div>
        <nav className="hidden md:flex items-center space-x-6">
          <a className="text-gray-600 hover:text-blue-600" href="#home">Home</a>
          <a className="text-gray-600 hover:text-blue-600" href="#about">About</a>
          <a className="text-gray-600 hover:text-blue-600" href="#contact">Contact</a>
          <button
            onClick={openCalendly}
            className="btn-primary flex items-center"
          >
            Contact Us
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 flex flex-col space-y-4 md:hidden">
          <a className="text-gray-600 hover:text-blue-600" href="#home">Home</a>
          <a className="text-gray-600 hover:text-blue-600" href="#about">About</a>
          <a className="text-gray-600 hover:text-blue-600" href="#contact">Contact</a>
          <button
            onClick={openCalendly}
            className="btn-primary text-center"
          >
            Contact Us
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;