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
        'lg-2267': '2267px',
        'xl-2550': '2550px',
        "xxl-2720":"2720px"
      }
    },
  },
  plugins: [],
}
