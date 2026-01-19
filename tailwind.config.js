/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            colors: {
                accent: '#23ffca',
                bg: '#000000',
                'bg-secondary': '#0b0b0b',
                text: '#ffffff',
                'text-dim': '#a0a0a0',
            },
        },
    },
    plugins: [],
}
