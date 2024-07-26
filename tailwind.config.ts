import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'), // Dark gray for body text
            'h2, h3, h4, h5, h6': {
              color: theme('colors.purple.600'),
            },
            h1: {
              color: theme('colors.black'), // Black for main title
            },
            p: {
              color: theme('colors.gray.900'), // Ensure paragraphs are dark gray
            },
            strong: {
              color: theme('colors.gray.900'), // Ensure strong text is dark gray
            },
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}

export default config