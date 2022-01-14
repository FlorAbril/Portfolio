module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('/profile.jpg')",
        'stacked-waves': "url('/stacked-waves.svg')",
        'blob-scene': "url('/blob-scene.svg')",
        'layered-waves': "url('/layered-waves.svg')",
        'circles': "url('/circles.svg')",
      },
      height: {
        '128': '32rem',
      },
      colors: {
        'dark-blue': '#0056d6',
        'light-blue': '#00b2ff',
      },
    },
  },
  plugins: [],
};
