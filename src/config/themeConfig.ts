import { ThemeConfig } from '../types/ThemeConfig';

const themeConfig: ThemeConfig = {
  colors: {
    primary: {
      light: '#4FD1C5',
      DEFAULT: '#38B2AC',
      dark: '#319795',
    },
    secondary: {
      light: '#63B3ED',
      DEFAULT: '#4299E1',
      dark: '#3182CE',
    },
    background: {
      light: '#2D3748',
      DEFAULT: '#1A202C',
      dark: '#171923',
    },
    text: {
      light: '#E2E8F0',
      DEFAULT: '#A0AEC0',
      dark: '#718096',
    },
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
  borderRadius: {
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
};

export default themeConfig;