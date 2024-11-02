import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const openCalendly = () => {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/rcv-1/redcloudventures?hide_event_type_details=1&hide_gdpr_banner=1'
    });
  };

  return (
    <section className="text-center py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-6 leading-tight text-gray-900">
          Transforming <span className="text-blue-600">Commercial Real</span> Estate
        </h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-700">
          At Red Cloud Ventures, we specialize in acquiring and optimizing commercial real estate assets across the nation. Our expertise lies in identifying high-potential properties that offer exceptional long-term value for investors. We take a data-driven, strategic approach to every acquisition, ensuring that your investment generates sustainable returns.
        </p>
        <div className="flex justify-center">
          <button
            onClick={openCalendly}
            className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
          >
            Contact Us <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;