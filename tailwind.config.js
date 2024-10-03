/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#FF6B6B',    // Coral vibrante
        secondary: '#FFE66D',  // Amarelo brilhante
        accent: '#4ECDC4',     // Verde água
        neutral: '#1A535C',    // Azul petróleo escuro
        background: '#F7FFF7', // Verde claro suave
        danger: '#E63946',     // Vermelho intenso
        success: '#2A9D8F',    // Verde sucesso
        warning: '#F4A261',    // Laranja aviso
      },
    },
  },
  plugins: [],
};
