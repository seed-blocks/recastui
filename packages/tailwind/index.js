// Inspired by code from Ross Bratton's windy-radix-palette - https://github.com/brattonross/windy-radix-palette

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const defaultColors = require('./colors');
const typographyColors = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'];

const recastuiPlugin = plugin.withOptions(
	({ colors = defaultColors, rootSelector = ':root' } = {}) => {
		let themeColors = {};
		let darkThemeColors = {};

		for (const color in colors) {
			for (const [key, value] of Object.entries(colors[color])) {
				if (color.includes('Dark')) {
					const colorName = color.replace('Dark', '');
					darkThemeColors[`--${colorName}${key}`] = value;
				} else {
					themeColors[`--${color}${key}`] = value;
				}
			}
		}

		return ({ addBase, addUtilities, config, theme }) => {
			const [darkMode, className = '.dark'] = [].concat(config('darkMode', 'media'));

			if (darkMode === 'class') {
				addBase({
					[rootSelector]: themeColors,
					[className]: darkThemeColors,
				});
			} else {
				addBase({
					[rootSelector]: themeColors,
					'@media (prefers-color-scheme: dark)': {
						[rootSelector]: darkThemeColors,
					},
				});
			}

			addBase({
				html: {
					'-webkit-font-smoothing': 'antialiased',
					fontFeatureSettings: 'ss01',
				},
				body: {
					['background-color']: theme('colors.gray.1'),
					color: theme('colors.gray.12'),
				},
				'h1,h2,h3,h4,h5,h6,th': {
					fontFamily: theme('fontFamily.display'),
					fontWeight: theme('fontWeight.semibold'),
				},
				// Form elements updates
				// input type dates update calendar icon
				'::-webkit-calendar-picker-indicator': {
					background:
						'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsklEQVR4nO2WTQrFIAyEPUSZkGt6q/7cyiP49q8EFLoQtNVQpQZmZ5JPM2CM6T0AbEH2Ro6NedUARPQX3SkmZ2PeeADMvBDRAeAXi9RKagHYpXbJjY9WjRMg+VdEuDkAdzFgrVyA8Cozb+oJ6gjAKYygHICUNA4AOvDANgHMHMGD/z+1P6ibEJcGqfwJgC+MwL5qwlyMBYC3VzIAu+JSumYBmHkJT+YbNvfSvGgtn/G5OAGy8ZfEJC9HagAAAABJRU5ErkJggg==) center/80% no-repeat',
				},
				// input type dates update calendar icon dark theme
				'.dark ::-webkit-calendar-picker-indicator': {
					background:
						'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAq0lEQVR4nO2WQQ6AIAwEeYQv5VcWf8WVvaB3DQYjMUYhgkCgyR7bHWiTlrHSAwBZ8YAcfuTFAFitvItZ8z2vPgCt9QBgArA45l9laglT24d+imh81fsv4ny5dAbwq6StOSfpedSZQEEAMkELggDWFKoKgFjrQ0gdgNXSAjj7/+5++AOAnhZPB0ALLeBZh/AtqgNYcp9kItUqVkqNvmc5GdqI5rMx9zrLezQXGzuAIHQObeHUAAAAAElFTkSuQmCC) center/80% no-repeat',
				},
				// Link type external
				'a[data-external="true"]:after': {
					display: 'inline-block',
					width: '24px',
					height: '24px',
					verticalAlign: 'middle',
					content: '',
					background:
						'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAElEQVR4nO2WQQrCMBBF/znq2pVep7jwIL2SLnqyIrTdKowIWUm06WSSmcA8yDZ5r0lDAMdxHMscAYwAVgDEHN9IzZMk/8hYUD1gFJBXDVhbD6DcCXbSA3i2GtBvyJsOuETkYzEmA/qI7AvAtYWAf/KwHrAlbzogRd5sQKq8yYA98uYC9sqbCuDIiyARoCYvEaAqnxugLp8TICVPGj+x5Jen2gHSx4ZqBpQ481Qr4PzjPf955+dANXdgKHDbUO1/YBC+KknjFjpxFrL+FuJCHgDfgSzIjxAaP0JLZBKtMXMC7gbEKYwbJ+AAYDIgPwHowKQL9RrHaQlrs+Udx3FQnDfW3kAr8oY1AwAAAABJRU5ErkJggg==) center/80% no-repeat',
				},
				// Link type external dark theme
				'.dark a[data-external="true"]:after': {
					background:
						'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABC0lEQVR4nO2WOw7CMAxAcw6YmeA6iIGDcCUYejKERFlBeqjQgU+B1nFjI/nt2O8lUUVKQRAEbgFmQAWcENIxU2VOX/mDdKGHgCpX3jrg9O8BeQOG71sC5+etGfuzByjKN0iGPjGKebrtWXXIv8W4DKD75C/A2n3AN/mksX/MgF/yrgP6yLsN6CvvMmCIvLuAofKuAiTyKmgEmMlrBJjK5waYy+cEaMmT+4QlAzRPntIB2s+GkgFjvHlKBQCLD//nV1J5ixvYaJ28ScBDhNqnktIB7W/mElk3AZoQAS/EDZQ+QOIG7G+gxg9HScAOP2wlAVNgb23O3WEyOKCNmDT1Rs+pbnfL5IMgCFIJrgzRaGUki4tZAAAAAElFTkSuQmCC) center/80% no-repeat',
				},
			});

			addUtilities({
				'.visually-hidden': {
					border: 0,
					clip: 'rect(0px, 0px, 0px, 0px)',
					height: '1px',
					width: '1px',
					margin: '-1px',
					padding: '0px',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					position: 'absolute',
				},
			});
		};
	},
	({ colors = defaultColors } = {}) => {
		const themeColors = {};

		for (const [colorName, colorObj] of Object.entries(colors)) {
			if (colorName.includes('Dark')) {
				continue;
			}

			const themeColor = {};
			for (const key of Object.keys(colorObj)) {
				themeColor[key] = `var(--${colorName}${key})`;
			}

			themeColors[colorName] = themeColor;
		}

		return {
			theme: {
				fontSize: {
					xs: ['0.75rem', { lineHeight: '1rem' }],
					sm: ['0.875rem', { lineHeight: '1.5rem' }],
					base: ['1rem', { lineHeight: '1.5rem' }],
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
					inherit: 'inherit',
					current: 'currentColor',
					transparent: 'transparent',
					black: '#000000',
					white: '#ffffff',
					...themeColors,
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
						DEFAULT: theme('colors.gray.10'),
						...theme('colors'),
					}),
					ringOpacity: ({ theme }) => ({
						DEFAULT: '0',
						...theme('opacity'),
					}),
					ringWidth: {
						DEFAULT: '2px',
					},
					ringOffsetWidth: {
						DEFAULT: '2px',
					},
					spacing: {
						4.5: '1.125rem',
					},
					boxShadow: {
						sm: '0 1px 2px 0 var(--slate6)',
						DEFAULT: '0 1px 3px 0 var(--slate6), 0 1px 2px -1px var(--slate6)',
						md: '0 4px 6px -1px var(--slate6), 0 2px 4px -2px var(--slate6)',
						lg: '0 10px 15px -3px var(--slate6), 0 4px 6px -4px var(--slate6)',
						xl: '0 20px 25px -5px var(--slate6), 0 8px 10px -6px var(--slate6)',
						'2xl': '0 25px 50px -12px var(--slate8)',
						inner: 'inset 0 2px 4px 0 var(--slate8)',
						none: 'none',
					},
					lineClamp: {
						7: '7',
						8: '8',
						9: '9',
						10: '10',
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
			variants: {
				lineClamp: ['responsive', 'hover', 'focus'],
			},
		};
	},
);

module.exports = recastuiPlugin;
