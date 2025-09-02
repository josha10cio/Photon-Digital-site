import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom dark blue-purple palette for Photon
        photon: {
          50: "#F0F4FF", // Off-white for very light accents/text
          100: "#D0D8E8", // Lighter off-white
          200: "#AAB3C7", // Light grey-blue
          300: "#818CA3", // Medium grey-blue
          400: "#5A657D", // Darker grey-blue
          500: "#3B82F6", // Primary blue accent
          600: "#1E3A8A", // Indigo accent
          700: "#7C3AED", // Purple accent
          800: "#0A0F1E", // Deep navy background (used for borders, inputs)
          900: "#0A0F1E", // Deep navy background (used for cards, sections)
          950: "#0A0F1E", // Deep navy background (main background)
        },
      },
      borderRadius: {
        lg: "24px", // Changed to 24px for frosted glass effect
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))",
          },
          "50%": {
            filter: "drop-shadow(0 0 16px rgba(59, 130, 246, 0.6))",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "scale(1.02)",
            opacity: "0.4",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.6s ease-out forwards", // Updated duration
        "pulse-glow": "pulse-glow 0.8s infinite alternate",
        "pulse-slow": "pulse-slow 8s infinite ease-in-out", // Slow pulse for background images
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      dropShadow: {
        "glow-blue": "0 0 8px rgba(59, 130, 246, 0.3)", // Blue glow
        "glow-purple": "0 0 8px rgba(124, 58, 237, 0.3)", // Purple glow
        "glow-indigo": "0 0 8px rgba(30, 58, 138, 0.3)", // Indigo glow
        "glow-intensified": "0 0 12px rgba(59, 130, 246, 0.5)", // Intensified blue glow for hover
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
