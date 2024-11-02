import React from 'react';
import { Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const openCalendly = () => {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/rcv-1/redcloudventures?hide_event_type_details=1&hide_gdpr_banner=1'
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Ready to <span className="text-blue-600">Invest</span> with Confidence?
        </h2>
        <p className="text-center text-xl mb-12 max-w-4xl mx-auto">
          At Red Cloud Ventures, we're here to help you unlock the full potential of your commercial real estate investments. Schedule a consultation or reach out to learn more about our current opportunities.
        </p>
        <div className="flex justify-center">
          <button
            onClick={openCalendly}
            className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition-colors"
          >
            <Calendar className="mr-2" size={20} />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;