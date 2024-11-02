import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const openCalendly = () => {
    // @ts-ignore
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/rcv-1/redcloudventures?hide_event_type_details=1&hide_gdpr_banner=1'
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Ready to <span className="text-blue-600">Invest</span> with Confidence?
        </h2>
        <p className="text-center text-xl mb-12 max-w-4xl mx-auto">
          At Red Cloud Ventures, we're here to help you unlock the full potential of your commercial real estate investments. Reach out today to learn more about our current opportunities and how we can help you achieve your financial goals.
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

export default Contact;