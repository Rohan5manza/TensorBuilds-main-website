module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your folder structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      screens: {
        sm: "480px",  // Small devices
        md: "768px",  // Tablets
        lg: "1024px", // Desktops
        xl: "1280px", // Large desktops
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};