
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Neopress custom colors
				neopress: {
					paper: '#F5F2E8',
					paperDark: '#E8E0CF',
					ink: '#222222',
					accent: '#8B5CF6',
					red: '#B91C1C',
					sepia: '#DAC3A3',
					gray: {
						100: '#F1F0FB',
						200: '#E5E5E5',
						300: '#D4D4D4',
						400: '#A3A3A3',
						500: '#737373', 
						600: '#525252',
						700: '#403E43',
						800: '#292524',
						900: '#1C1917'
					}
				}
			},
			fontFamily: {
				serif: ['Playfair Display', 'EB Garamond', 'Merriweather', 'Georgia', 'serif'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['IBM Plex Mono', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'typewriter': {
					from: { width: '0' },
					to: { width: '100%' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'paper-lift': {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'100%': { transform: 'translateY(-5px) rotate(0.5deg)' }
				},
				'fold-corner': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-5deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typewriter': 'typewriter 3s steps(30) forwards',
				'blink': 'blink 1s step-end infinite',
				'paper-lift': 'paper-lift 0.3s ease forwards',
				'fold-corner': 'fold-corner 0.3s ease forwards'
			},
			backgroundImage: {
				'paper-texture': "url('/paper-texture.png')",
				'stamp': "url('/stamp.png')",
				'halftone': "url('/halftone.png')"
			},
			dropShadow: {
				'paper': '0 4px 4px rgba(0, 0, 0, 0.05)',
				'ink': '0 2px 1px rgba(0, 0, 0, 0.2)'
			},
			textShadow: {
				'headline': '1px 1px 1px rgba(0, 0, 0, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
