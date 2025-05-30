/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',
                black: '#000000',
                glass: {
                    light: 'rgba(255, 255, 255, 0.05)',
                    medium: 'rgba(255, 255, 255, 0.1)',
                    dark: 'rgba(255, 255, 255, 0.15)',
                },
            },
            fontFamily: {
                mono: ['Source Code Pro', 'monospace'],
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'glass-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        fontFamily: {
            sans: ['Cormorant Garamond', 'serif'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    darkMode: 'class',
}; 