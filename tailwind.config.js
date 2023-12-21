/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {},
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#EB850D",
                    secondary: "#E3E3E3",
                    accent: "#FAAE28",
                    "base-100": "#1E2E4D",
                    // "base-100": "#3f3f3f",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
