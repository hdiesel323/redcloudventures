import { ThemeConfig } from '../types/ThemeConfig';

export function generateTailwindConfig(theme: ThemeConfig): string {
  return `
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(theme.colors, null, 2)},
      fontFamily: ${JSON.stringify(theme.fonts, null, 2)},
      borderRadius: ${JSON.stringify(theme.borderRadius, null, 2)},
      boxShadow: ${JSON.stringify(theme.boxShadow, null, 2)},
    },
  },
  plugins: [],
}
  `.trim();
}