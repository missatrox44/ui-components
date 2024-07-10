import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: '#E8E8FD',
        lighterlilac: '#f8f8ff',
        darkMaroon: '#611F17',
        orangeish: '#EE4D38',
        superLightBlue: '#F5F9FE',
        lightBlue: '#E8F1FD',
        deepNavyBlue: '#133E61',
        pastelFuschia: '#EDBBFF',
        pastelBlue: '#ADF1F5',
        pastelOrange: '#FEDDB6'
      }
    },
  },
  plugins: [],
};
export default config;
