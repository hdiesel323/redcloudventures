export interface ThemeConfig {
  colors: {
    primary: ColorShades;
    secondary: ColorShades;
    background: ColorShades;
    text: ColorShades;
  };
  fonts: {
    body: string;
    heading: string;
  };
  borderRadius: {
    sm: string;
    DEFAULT: string;
    md: string;
    lg: string;
    full: string;
  };
  boxShadow: {
    sm: string;
    DEFAULT: string;
    md: string;
    lg: string;
    xl: string;
  };
}

interface ColorShades {
  light: string;
  DEFAULT: string;
  dark: string;
}