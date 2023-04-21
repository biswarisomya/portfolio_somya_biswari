/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: { max: "640px" },
      // => @media (min-width: 640px) { ... }

      laptop: { max: "1024px" },
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        back: "url('/header-background.jpeg')",
        profile: "url('/profile.jpg')",
        testimonial: "url('/testimonials-bg.jpg')",
      },
    },
  },
  plugins: [],
};
