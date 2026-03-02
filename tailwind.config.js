// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { nextui } = require('@nextui-org/react')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './shared/components/**/**/*.{js,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        primary: {
          100: '#CAD5FD',
          200: '#B8C7FC',
          300: '#95ACFB',
          400: '#7190F9',
          500: '#4E74F8',
          600: '#3F5ECC',
        },
        gray: colors.gray,
        signoz_robin: {
          100: '#CAD5FD',
          200: '#B8C7FC',
          300: '#95ACFB',
          400: '#7190F9',
          500: '#4E74F8',
          600: '#3F5ECC',
        },
        signoz_sienna: {
          100: '#E6D9CD',
          200: '#DECCBC',
          300: '#CEB29B',
          400: '#BD9979',
          500: '#AD7F58',
          600: '#8A6646',
        },
        signoz_cherry: {
          100: '#FADADB',
          200: '#F7C8CA',
          300: '#F5B6B8',
          400: '#EA6D71',
          500: '#E5484D',
          600: '#B83A3E',
        },
        signoz_aqua: {
          100: '#C1EEFD',
          200: '#9AE4FC',
          300: '#72D9FB',
          400: '#4BCFF9',
          500: '#23C4F8',
          600: '#07AFE6',
        },
        signoz_sakura: {
          100: '#FBC8D2',
          200: '#FAB5C3',
          300: '#F791A5',
          400: '#F56C87',
          500: '#F24769',
          600: '#C53955',
        },
        signoz_amber: {
          100: '#FFF0CC',
          200: '#FFEBBB',
          300: '#FFE19A',
          400: '#FFD778',
          500: '#FFCD56',
          600: '#D5AA45',
        },
        signoz_ink: {
          100: '#2A2E37',
          200: '#23262E',
          300: '#16181D',
          400: '#121317',
          500: '#0B0C0E',
          600: '#181a21',
        },
        signoz_vanilla: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E9E9E9',
          400: '#C0C1C3',
        },
        signoz_slate: {
          50: '#62687C',
          100: '#3C4152',
          200: '#2C3140',
          300: '#242834',
          400: '#1D212D',
          500: '#161922',
        },
        signoz_forest: {
          200: '#A8F3D3',
          300: '#7CEDBE',
          400: '#51E7A8',
          500: '#25E192',
          600: '#1EB475',
        },
      },
      borderColor: {
        primary: {
          100: '#CAD5FD',
          200: '#B8C7FC',
          300: '#95ACFB',
          400: '#7190F9',
          500: '#4E74F8',
          600: '#3F5ECC',
        },
        gray: colors.gray,
        signoz_robin: {
          100: '#CAD5FD',
          200: '#B8C7FC',
          300: '#95ACFB',
          400: '#7190F9',
          500: '#4E74F8',
          600: '#3F5ECC',
        },
        signoz_sienna: {
          100: '#E6D9CD',
          200: '#DECCBC',
          300: '#CEB29B',
          400: '#BD9979',
          500: '#AD7F58',
          600: '#8A6646',
        },
        signoz_cherry: {
          100: '#FADADB',
          200: '#F7C8CA',
          300: '#F5B6B8',
          400: '#EA6D71',
          500: '#E5484D',
          600: '#B83A3E',
        },
        signoz_aqua: {
          100: '#C1EEFD',
          200: '#9AE4FC',
          300: '#72D9FB',
          400: '#4BCFF9',
          500: '#23C4F8',
          600: '#07AFE6',
        },
        signoz_sakura: {
          100: '#FBC8D2',
          200: '#FAB5C3',
          300: '#F791A5',
          400: '#F56C87',
          500: '#F24769',
          600: '#C53955',
        },
        signoz_amber: {
          100: '#FFF0CC',
          200: '#FFEBBB',
          300: '#FFE19A',
          400: '#FFD778',
          500: '#FFCD56',
          600: '#D5AA45',
        },
        signoz_ink: {
          100: '#2A2E37',
          200: '#23262E',
          300: '#16181D',
          400: '#121317',
          500: '#0B0C0E',
          600: '#181a21',
        },
        signoz_vanilla: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E9E9E9',
          400: '#C0C1C3',
        },
        signoz_slate: {
          100: '#3C4152',
          200: '#2C3140',
          300: '#242834',
          400: '#1D212D',
          500: '#161922',
        },
        signoz_forest: {
          200: '#A8F3D3',
          300: '#7CEDBE',
          400: '#51E7A8',
          500: '#25E192',
          600: '#1EB475',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
            'blockquote code, h1 code, h2 code, h3 code, h4 code': {
              color: theme('colors.signoz_robin.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      mono: ['Geist Mono', 'monospace'],
      satoshi: ['Satoshi', 'sans-serif'],
      'satoshi-bold': ['Satoshi Bold', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, theme }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          color: 'inherit',
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
          fontWeight: '700',
          lineHeight: '1.25',
          margin: '0 0 0.5rem 0',
        },
        p: {
          margin: '0 0 1em',
        },
        a: {
          color: 'inherit',
          textDecoration: 'inherit',
        },
        code: {
          backgroundColor: 'rgba(103, 103, 126, 0.323)',
          border: '0.1rem solid rgba(0, 0, 0, 0.1)',
          borderRadius: '0.2rem',
          fontFamily: theme('fontFamily.mono'),
          fontSize: '0.875em',
          padding: '0.2rem 0.4rem',
          verticalAlign: 'middle',
        },
        'a code': {
          color: 'inherit',
        },
        pre: {
          backgroundColor: 'rgba(103, 103, 126, 0.323)',
          borderRadius: '0.2rem',
          fontFamily: theme('fontFamily.mono'),
          fontSize: '0.875em',
          lineHeight: '1.5',
          margin: '0 0 1rem',
          overflow: 'auto',
          padding: '1rem',
        },
        'pre code': {
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: '100%',
          lineHeight: 'inherit',
          padding: 0,
        },
        kbd: {
          backgroundColor: theme('colors.gray.100'),
          border: '1px solid',
          borderColor: theme('colors.gray.300'),
          borderRadius: '0.2rem',
          boxShadow: `inset 0 -1px 0 ${theme('colors.gray.300')}`,
          color: theme('colors.gray.800'),
          fontFamily: theme('fontFamily.mono'),
          fontSize: '80%',
          padding: '0.15rem 0.3rem',
        },
        '.dark kbd': {
          backgroundColor: theme('colors.gray.700'),
          borderColor: theme('colors.gray.600'),
          boxShadow: `inset 0 -1px 0 ${theme('colors.gray.600')}`,
          color: theme('colors.gray.200'),
        },
      })
      addComponents({
        '.section-container': {
          padding: '0 1rem',
          width: '100%',
        },
      })
    },
    nextui({
      themes: {
        light: {
          colors: {
            secondary: '#4E74F8',
            danger: '#F24769',
            warning: '#FFCD56',
          },
        },
        dark: {
          colors: {
            secondary: '#4E74F8',
            danger: '#F24769',
            warning: '#FFCD56',
          },
        },
      },
    }),
  ],
}
