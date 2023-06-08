/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            md: { max: '1200px' },
            // => @media (max-width: 1023px) { ... }
            tablet: { max: '830px' },
            // => @media (max-width: 767px) { ... }
            phone: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            colors: {
                primary: '#4052FE',
                neutral: '#F4F4F4',
                accent: '#1A1A1A',
            },
        },
    },
    plugins: [],
}
