/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dana-black": "dana-black",
        "dana-bold": "dana-bold",
        "dana-demibold": "dana-demibold",
        "dana-extrablack": "dana-extrablack",
        "dana-extrabold": "dana-extrabold",
        "dana-fat": "dana-fat",
        "dana-hairline": "dana-hairline",
        "dana-light": "dana-light",
        "dana-Medium": "dana-Medium",
        "dana-regular": "dana-regular",
        "dana-thin": "dana-thin",
        "dana-ultralight": "dana-ultralight",
      },
    },
  },
  plugins: [],
}