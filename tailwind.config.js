/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'img1': 'url("https://i.ibb.co/YZnBy8p/interior-modern-comfortable-hotel-room-min.jpg")',
        'img2': 'url("https://i.ibb.co/Lz4XqNH/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv-1-min.jpgle-hotel-room-min.jpg")',
      }
    },
  },
  plugins: [require("daisyui")],
}

