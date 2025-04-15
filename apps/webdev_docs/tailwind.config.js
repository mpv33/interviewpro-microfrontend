/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // If using `src` directory
  ],
  theme: {
    extend: {
      colors: {
        // Define color scheme for light mode
        light: {
          
          // Add more colors as needed
        },
        // Define color scheme for dark mode
        dark: {
        
          // Add more colors as needed
        },
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
