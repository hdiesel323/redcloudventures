import React, { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      window.Calendly.initBadgeWidget({
        url: url,
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: undefined
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return null;
};

export default CalendlyWidget;