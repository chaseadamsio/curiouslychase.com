module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            white: {
              50: "hsl(var(--white-50))",
            },
            tuna: {
              50: "hsl(var(--tuna-50))",
              100: "hsl(var(--tuna-100))",
              200: "hsl(var(--tuna-200))",
              300: "hsl(var(--tuna-300))",
              400: "hsl(var(--tuna-400))",
              500: "hsl(var(--tuna-500))",
              600: "hsl(var(--tuna-600))",
              700: "hsl(var(--tuna-700))",
              800: "hsl(var(--tuna-800))",
              900: "hsl(var(--tuna-900))",
              950: "hsl(var(--tuna-950))",
            },
            magenta: {
              50: "hsl(var(--magenta-50))",
              100: "hsl(var(--magenta-100))",
              200: "hsl(var(--magenta-200))",
              300: "hsl(var(--magenta-300))",
              400: "hsl(var(--magenta-400))",
              500: "hsl(var(--magenta-500))",
              600: "hsl(var(--magenta-600))",
              700: "hsl(var(--magenta-700))",
              800: "hsl(var(--magenta-800))",
              900: "hsl(var(--magenta-900))",
              950: "hsl(var(--magenta-950))",
              990: "hsl(var(--magenta-990))",
            },
            blue: {
              50: "hsl(var(--blue-50))",
              100: "hsl(var(--blue-100))",
              200: "hsl(var(--blue-200))",
              300: "hsl(var(--blue-300))",
              400: "hsl(var(--blue-400))",
              500: "hsl(var(--blue-500))",
              600: "hsl(var(--blue-600))",
              700: "hsl(var(--blue-700))",
              800: "hsl(var(--blue-800))",
              900: "hsl(var(--blue-900))",
              950: "hsl(var(--blue-950))",
              990: "hsl(var(--blue-990))",
            },
            ultraviolet: {
              950: "hsl(var(--ultraviolet-950))",
              990: "hsl(var(--ultraviolet-990))",
            },
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            link: {
              foreground: "hsl(var(--link-foreground))",
            },
            callout: "hsl(var(--callout-background))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            card: {
              border: "hsl(var(--card-border))",
            },
            info: {
              foreground: "hsl(var(--info-foreground))",
            },
            danger: {
              foreground: "hsl(var(--danger-foreground))",
            },
            success: {
              foreground: "hsl(var(--success-foreground))",
            },
            warning: {
              foreground: "hsl(var(--warning-foreground))",
            },
            tip: {
              foreground: "hsl(var(--tip-foreground))",
            },
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
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          keyframes: {
            "accordion-down": {
              from: { height: 0 },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: 0 },
            },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },
        },
      },
      themes: [],
    }),
  ],
};
