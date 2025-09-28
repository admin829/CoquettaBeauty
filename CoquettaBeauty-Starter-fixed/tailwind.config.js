/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Follain-like calm neutrals (adjust later in /styles/globals.css via CSS vars if desired)
        cream: "#FAF8F6",
        charcoal: "#2C2C2C",
        sage: "#A8B5A2",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
};
