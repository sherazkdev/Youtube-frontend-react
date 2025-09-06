// tailwind.config.js
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'md-2040': '2040px',
        'lg-2267': '22675px',
        'xl-2550': '2550px',
      }
    },
  },
  plugins: [],
}
