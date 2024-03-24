/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          50: "#FCEEEE",
          100: "#F8DEDD",
          200: "#F1B8B6",
          300: "#EB9794",
          400: "#E47572",
          500: "#DD524C",
          600: "#C92C26",
          700: "#96211C",
          800: "#631513",
          900: "#330B0A",
        },
        dashboard: {
          sidebar: "#3c3c43",
          background: "#f1f2f5",
        },
        sub: {
          50: "#E9E9EC",
          100: "#D7D7DB",
          200: "#AEAEB7",
          300: "#868693",
          400: "#60606C",
          500: "#3C3C43",
          600: "#303036",
          700: "#242428",
          800: "#18181B",
          900: "#0C0C0D",
        },
        positive: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        positiveSub: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
  },

  // safelist: [
  //   {
  //     pattern: /^shadow-/,
  //     variants: ['hover', 'focus'],
  //   },
  //   {
  //     pattern: /^text-/,
  //   },
  //   {
  //     pattern: /^bg-/,
  //     variants: ['hover', 'focus'],
  //   },
  //   {
  //     pattern: /^rounded-/,
  //   },
  //   {
  //     pattern: /^py-/,
  //   },
  //   {
  //     pattern: /^px-/,
  //   },
  //   {
  //     pattern: /^border-/,
  //   },
  // ],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
