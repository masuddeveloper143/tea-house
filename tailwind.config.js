/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html"],
    theme: {
        extend: {},
    },
    plugins: [],
}
// tailwind.config.js
module.exports = {
    content: ["./*.html"],
    plugins: [require("daisyui")],
}
