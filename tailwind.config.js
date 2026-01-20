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
                gaming: ['Orbitron', 'sans-serif'],
            },
            colors: {
                accent: '#23ffca',
                'accent-dim': 'rgba(35, 255, 202, 0.1)',
                bg: '#000000',
                'bg-secondary': '#0b0b0b',
                text: '#ffffff',
                'text-dim': '#a0a0a0',
                'neon-purple': '#c084fc',
                'neon-blue': '#3b82f6',
            },
            boxShadow: {
                'neon': '0 0 20px rgba(35, 255, 202, 0.4)',
                'neon-purple': '0 0 20px rgba(192, 132, 252, 0.4)',
            },
            skew: {
                '10': '10deg',
                '-10': '-10deg',
            }
        },
    },
    plugins: [],
}
