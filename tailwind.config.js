/** @type {import('tailwindcss').Config} */
console.log("Using DaisyUI plugin"); 
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
    daisyui: {
    themes: ["white"],
  },
  theme: {
    extend: {
         colors: {
        primary: "#1F2937",
        secondary: "#ad2a26",
        danger: "#DC2626",
        success: "#16A34A",
        editButton:"#2F6CD0"

      },
    },
  },
 plugins: [require("daisyui")],
}

