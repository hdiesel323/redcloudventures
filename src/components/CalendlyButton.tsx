import { useEffect, useState } from 'react';

const CalendlyButton = () => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        // Check if script is already loaded
        if (window.Calendly) {
            setIsScriptLoaded(true);
            return;
        }

        // Load the script if not already loaded
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => setIsScriptLoaded(true);
        document.body.appendChild(script);

        return () => {
            // Cleanup if component unmounts
            document.body.removeChild(script);
        };
    }, []);

    const openCalendly = () => {
        if (!isScriptLoaded || !window.Calendly) return;
        window.Calendly.initPopupWidget({
            url: 'https://calendly.com/rcv-1/redcloudventures?hide_event_type_details=1&hide_gdpr_banner=1'
        });
    };

    return (
        <button
            onClick={openCalendly}
            className="btn-primary flex items-center"
        >
            Contact Us
        </button>
    );
};

export default CalendlyButton; 