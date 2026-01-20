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
                accent: '#2DD4BF', // Teal-400: More refined than #23ffca
                'accent-dim': 'rgba(45, 212, 191, 0.1)',
                'accent-dark': '#14B8A6', // Teal-500
                bg: '#050505', // Deep Obsidian
                'bg-secondary': '#0A0A0A', // Soft Black
                text: '#FAFAFA', // Off-white for less harshness
                'text-dim': '#A1A1AA', // Zinc-400
                'neon-blue': '#3B82F6', // Keeping as is but will use sparingly
                'metallic': '#94A3B8', // Slate-400 for premium accents
            },
            boxShadow: {
                'neon': '0 0 20px rgba(45, 212, 191, 0.2)', // Reduced intensity
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            },
            skew: {
                '10': '10deg',
                '-10': '-10deg',
            }
        },
    },
    plugins: [],
}
