const defaultTheme = require('tailwindcss/defaultTheme');
const radix = require('@radix-ui/colors');

const typographyColors = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];

function setupRadixColors() {
  const themeColors = {};

  for (const [colorName, colorObj] of Object.entries(radix)) {
    if (colorName.includes('Dark')) {
      continue;
    }

    const themeColor = {};
    for (const key of Object.keys(colorObj)) {
      const scale = key.replace(colorName, '');
      themeColor[scale] = `var(--${colorName}${scale})`;
    }

    themeColors[colorName] = themeColor;
  }

  return themeColors;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    colors: {
      ...setupRadixColors(),
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: 'var(--black)',
      white: 'var(--white)',
      body: 'var(--mono12)',
      'body-muted': 'var(--mono11)',
      mono: {
        1: 'var(--mono1)',
        2: 'var(--mono2)',
        3: 'var(--mono3)',
        4: 'var(--mono4)',
        5: 'var(--mono5)',
        6: 'var(--mono6)',
        7: 'var(--mono7)',
        8: 'var(--mono8)',
        9: 'var(--mono9)',
        10: 'var(--mono10)',
        11: 'var(--mono11)',
        12: 'var(--mono12)',
      },
      error: {
        1: 'var(--error1)',
        2: 'var(--error2)',
        3: 'var(--error3)',
        4: 'var(--error4)',
        5: 'var(--error5)',
        6: 'var(--error6)',
        7: 'var(--error7)',
        8: 'var(--error8)',
        9: 'var(--error9)',
        10: 'var(--error10)',
        11: 'var(--error11)',
        12: 'var(--error12)',
      },
      info: {
        1: 'var(--info1)',
        2: 'var(--info2)',
        3: 'var(--info3)',
        4: 'var(--info4)',
        5: 'var(--info5)',
        6: 'var(--info6)',
        7: 'var(--info7)',
        8: 'var(--info8)',
        9: 'var(--info9)',
        10: 'var(--info10)',
        11: 'var(--info11)',
        12: 'var(--info12)',
      },
      success: {
        1: 'var(--success1)',
        2: 'var(--success2)',
        3: 'var(--success3)',
        4: 'var(--success4)',
        5: 'var(--success5)',
        6: 'var(--success6)',
        7: 'var(--success7)',
        8: 'var(--success8)',
        9: 'var(--success9)',
        10: 'var(--success10)',
        11: 'var(--success11)',
        12: 'var(--success12)',
      },
      warning: {
        1: 'var(--warning1)',
        2: 'var(--warning2)',
        3: 'var(--warning3)',
        4: 'var(--warning4)',
        5: 'var(--warning5)',
        6: 'var(--warning6)',
        7: 'var(--warning7)',
        8: 'var(--warning8)',
        9: 'var(--warning9)',
        10: 'var(--warning10)',
        11: 'var(--warning11)',
        12: 'var(--warning12)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      ringColor: ({ theme }) => ({
        DEFAULT: theme('colors.blue.7'),
        ...theme('colors'),
      }),
      ringOpacity: ({ theme }) => ({
        DEFAULT: '0',
        ...theme('opacity'),
      }),
      spacing: {
        4.5: '1.125rem',
      },
      typography: ({ theme }) => {
        const themes = {};
        for (const color of typographyColors) {
          themes[color] = {
            css: {
              '--tw-prose-body': theme(`colors.${color}[12]`),
              '--tw-prose-headings': theme(`colors.${color}[12]`),
              '--tw-prose-lead': theme(`colors.${color}[11]`),
              '--tw-prose-links': theme(`colors.${color}[12]`),
              '--tw-prose-bold': theme(`colors.${color}[12]`),
              '--tw-prose-counters': theme(`colors.${color}[11]`),
              '--tw-prose-bullets': theme(`colors.${color}[7]`),
              '--tw-prose-hr': theme(`colors.${color}[6]`),
              '--tw-prose-quotes': theme(`colors.${color}[12]`),
              '--tw-prose-quote-borders': theme(`colors.${color}[6]`),
              '--tw-prose-captions': theme(`colors.${color}[11]`),
              '--tw-prose-code': theme(`colors.${color}[12]`),
              '--tw-prose-pre-code': theme(`colors.${color}[12]`),
              '--tw-prose-pre-bg': theme(`colors.${color}[3]`),
              '--tw-prose-th-borders': theme(`colors.${color}[7]`),
              '--tw-prose-td-borders': theme(`colors.${color}[6]`),
              '--tw-prose-invert-body': theme(`colors.${color}[12]`),
              '--tw-prose-invert-headings': theme(`colors.${color}[12]`),
              '--tw-prose-invert-lead': theme(`colors.${color}[11]`),
              '--tw-prose-invert-links': theme(`colors.${color}[12]`),
              '--tw-prose-invert-bold': theme(`colors.${color}[12]`),
              '--tw-prose-invert-counters': theme(`colors.${color}[11]`),
              '--tw-prose-invert-bullets': theme(`colors.${color}[7]`),
              '--tw-prose-invert-hr': theme(`colors.${color}[6]`),
              '--tw-prose-invert-quotes': theme(`colors.${color}[12]`),
              '--tw-prose-invert-quote-borders': theme(`colors.${color}[6]`),
              '--tw-prose-invert-captions': theme(`colors.${color}[11]`),
              '--tw-prose-invert-code': theme(`colors.${color}[12]`),
              '--tw-prose-invert-pre-code': theme(`colors.${color}[12]`),
              '--tw-prose-invert-pre-bg': theme(`colors.${color}[3]`),
              '--tw-prose-invert-th-borders': theme(`colors.${color}[7]`),
              '--tw-prose-invert-td-borders': theme(`colors.${color}[6]`),
            },
          };
        }
        return themes;
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
