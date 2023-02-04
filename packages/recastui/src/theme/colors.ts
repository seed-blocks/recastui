export const gray = {
	gray1: '#fbfcfd',
	gray2: '#f8f9fa',
	gray3: '#f1f3f5',
	gray4: '#eceef0',
	gray5: '#e6e8eb',
	gray6: '#dfe3e6',
	gray7: '#d7dbdf',
	gray8: '#c1c8cd',
	gray9: '#889096',
	gray10: '#7e868c',
	gray11: '#687076',
	gray12: '#11181c'
};

export const grayDark = {
	gray1: '#151718',
	gray2: '#1a1d1e',
	gray3: '#202425',
	gray4: '#26292b',
	gray5: '#2b2f31',
	gray6: '#313538',
	gray7: '#3a3f42',
	gray8: '#4c5155',
	gray9: '#697177',
	gray10: '#787f85',
	gray11: '#9ba1a6',
	gray12: '#ecedee'
};

export const blackAlpha = {
	blackA1: 'hsla(0, 0%, 0%, 0.012)',
	blackA2: 'hsla(0, 0%, 0%, 0.027)',
	blackA3: 'hsla(0, 0%, 0%, 0.047)',
	blackA4: 'hsla(0, 0%, 0%, 0.071)',
	blackA5: 'hsla(0, 0%, 0%, 0.090)',
	blackA6: 'hsla(0, 0%, 0%, 0.114)',
	blackA7: 'hsla(0, 0%, 0%, 0.141)',
	blackA8: 'hsla(0, 0%, 0%, 0.220)',
	blackA9: 'hsla(0, 0%, 0%, 0.439)',
	blackA10: 'hsla(0, 0%, 0%, 0.478)',
	blackA11: 'hsla(0, 0%, 0%, 0.565)',
	blackA12: 'hsla(0, 0%, 0%, 0.910)'
};

export const whiteAlpha = {
	whiteA1: 'hsla(0, 0%, 100%, 0)',
	whiteA2: 'hsla(0, 0%, 100%, 0.013)',
	whiteA3: 'hsla(0, 0%, 100%, 0.034)',
	whiteA4: 'hsla(0, 0%, 100%, 0.056)',
	whiteA5: 'hsla(0, 0%, 100%, 0.086)',
	whiteA6: 'hsla(0, 0%, 100%, 0.124)',
	whiteA7: 'hsla(0, 0%, 100%, 0.176)',
	whiteA8: 'hsla(0, 0%, 100%, 0.249)',
	whiteA9: 'hsla(0, 0%, 100%, 0.386)',
	whiteA10: 'hsla(0, 0%, 100%, 0.446)',
	whiteA11: 'hsla(0, 0%, 100%, 0.592)',
	whiteA12: 'hsla(0, 0%, 100%, 0.923)'
};

export const accentColors = {
	white: '#ffffff',
	black: '#000000',
	tomato: '#e54d2e',
	red: '#e5484d',
	magenta: '#e93d82',
	pink: '#d6409f',
	plum: '#ab4aba',
	purple: '#8e4ec6',
	violet: '#6e56cf',
	indigo: '#3e63dd',
	blue: '#0091ff',
	cyan: '#05a2c2',
	teal: '#12a594',
	green: '#30a46c',
	grass: '#46a758',
	orange: '#f76808',
	brown: '#ad7f58',
	sky: '#68ddfd',
	mint: '#70e1c8',
	lime: '#99d52a',
	yellow: '#f5d90a',
	amber: '#ffb224',
};

const commonColors = {
	...gray,
	...blackAlpha,
	...whiteAlpha,
	...accentColors,
}

export const colors = {
	...commonColors,
	text: gray.gray12,
	background: gray.gray1,
	primary: gray.gray12,
	secondary: gray.gray1,
	muted: gray.gray6,
	success: accentColors.green,
	info: accentColors.cyan,
	warning: accentColors.yellow,
	danger: accentColors.red,
	textMuted: gray.gray8,
	modes: {
		dark: {
			...commonColors,
			text: grayDark.gray12,
			background: grayDark.gray1,
			primary: grayDark.gray12,
			secondary: grayDark.gray1,
			muted: grayDark.gray6,
			success: accentColors.green,
			info: accentColors.cyan,
			warning: accentColors.yellow,
			danger: accentColors.red,
			textMuted: gray.gray8,
		}
	}
}
