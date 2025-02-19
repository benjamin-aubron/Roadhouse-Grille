import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			primary: 'var(--primary)',
  			primaryHover: 'var(--primary-hover)',
  			secondary: 'var(--secondary)',
  			secondaryHover: 'var(--secondary-hover)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
