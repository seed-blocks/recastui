/*!
 * Original code by Theme-ui
 * MIT Licensed, Copyright (c) Brent Jackson.
 *
 * Credits to the Theme-ui team:
 * https://github.com/system-ui/theme-ui/blob/develop/packages/css/src/index.ts
 */
import type {
	RecastUICSSObject,
	RecastUIStyleObject,
	ThemeDerivedStyles,
	CSSObject
} from './types';
import { pseudoSelectors } from './pseudo-selectors';
import { CSSAttribute } from '../types';
import { Theme } from '../theme';

export * from './types';

/**
 * Allows for nested scales with shorthand values
 * @example
 * {
 *   colors: {
 *     primary: { __default: '#00f', light: '#33f' }
 *   }
 * }
 * css({ color: 'primary' }); // { color: '#00f' }
 * css({ color: 'primary.light' }) // { color: '#33f' }
 */
export const RECAST_UI_DEFAULT_KEY = '__default';

const hasDefault = (x: unknown): x is { [RECAST_UI_DEFAULT_KEY]: string | number } => {
	return typeof x === 'object' && x !== null && RECAST_UI_DEFAULT_KEY in x;
};

/**
 * Extracts value under path from a deeply nested object.
 * Used for Themes, variants and Theme UI style objects.
 * Given a path to object with `__default` key, returns the value under that key.
 *
 * @param obj a theme, variant or style object
 * @param path path separated with dots (`.`)
 * @param fallback default value returned if get(obj, path) is not found
 * @param p
 * @param undef
 */
export function get(
	obj: object,
	path: string | number | undefined,
	fallback?: unknown,
	p?: number,
	undef?: unknown
): any {
	const pathArray = path && typeof path === 'string' ? path.split('.') : [path];
	for (p = 0; p < pathArray.length; p++) {
		obj = obj ? (obj as any)[pathArray[p]!] : undef;
	}

	if (obj === undef) return fallback;

	return hasDefault(obj) ? obj[RECAST_UI_DEFAULT_KEY] : obj;
}

export const getObjectWithVariants = (obj: any, theme: Theme): CSSObject => {
	if (obj && obj['variant']) {
		let result: CSSObject = {};
		for (const key in obj) {
			const x = obj[key];
			if (key === 'variant') {
				const val = typeof x === 'function' ? x(theme) : x;
				const variant = getObjectWithVariants(get(theme, val as string), theme);
				result = { ...result, ...variant };
			} else {
				result[key] = x as CSSObject;
			}
		}
		return result;
	}
	return obj as CSSObject;
};

export const defaultBreakpoints = ['576px', '768px', '992px', '1200px'];

export const baseColors = {
	white: '#ffffff',
	black: '#121212',
	gray: [
		'#ffffff', // 0 index
		'#f8f9fa',
		'#e9ecef',
		'#dee2e6',
		'#ced4da',
		'#adb5bd',
		'#6c757d',
		'#495057',
		'#343a40',
		'#212529'
	],
	blue: '#007bff',
	indigo: '#6610f2',
	purple: '#6f42c1',
	pink: '#e83e8c',
	red: '#dc3545',
	orange: '#fd7e14',
	yellow: '#ffc107',
	green: '#28a745',
	teal: '#20c997',
	cyan: '#17a2b8'
};

export const colors: Theme['colors'] = {
	...baseColors,
	grayDark: baseColors.gray[8],
	text: baseColors.gray[9],
	background: baseColors.white,
	primary: baseColors.blue,
	secondary: baseColors.gray[6],
	muted: baseColors.gray[3],
	success: baseColors.green,
	info: baseColors.cyan,
	warning: baseColors.yellow,
	danger: baseColors.red,
	light: baseColors.gray[1],
	dark: baseColors.gray[8],
	textMuted: baseColors.gray[6]
};

export const space: Theme['space'] = {
	'0.5': '0.125rem',
	'1': '0.25rem',
	'1.5': '0.375rem',
	'2': '0.5rem',
	'2.5': '0.625rem',
	'3': '0.75rem',
	'3.5': '0.875rem',
	'4': '1rem',
	'5': '1.25rem',
	'6': '1.5rem',
	'7': '1.75rem',
	'8': '2rem',
	'9': '2.25rem',
	'10': '2.5rem',
	'12': '3rem',
	'14': '3.5rem',
	'16': '4rem',
	'20': '5rem',
	'24': '6rem',
	'28': '7rem',
	'32': '8rem',
	'36': '9rem',
	'40': '10rem',
	'44': '11rem',
	'48': '12rem',
	'52': '13rem',
	'56': '14rem',
	'60': '15rem',
	'64': '16rem',
	'72': '18rem',
	'80': '20rem',
	'96': '24rem'
};

const defaultTheme: Theme = {
	space,
	fonts: {
		sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
		serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
		mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '3.75rem',
		'7xl': '4.5rem',
		'8xl': '6rem',
		'9xl': '8rem'
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900
	},
	lineHeights: {
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: 2,
		'3': '0.75rem',
		'4': '1rem',
		'5': '1.25rem',
		'6': '1.5rem',
		'7': '1.75rem',
		'8': '2rem',
		'9': '2.25rem',
		'10': '2.5rem'
	},
	letterSpacings: {
		tighter: '-0.05em',
		tight: '-0.025em',
		normal: '0',
		wide: '0.025em',
		wider: '0.05em',
		widest: '0.1em'
	},
	sizes: {
		...space,
		max: 'max-content',
		min: 'min-content',
		full: '100%',
		screenW: '100vw',
		screenH: '100vh',
		xs: '20rem',
		sm: '24rem',
		md: '28rem',
		lg: '32rem',
		xl: '36rem',
		'2xl': '42rem',
		'3xl': '48rem',
		'4xl': '56rem',
		'5xl': '64rem',
		'6xl': '72rem',
		'7xl': '80rem',
		'8xl': '90rem'
	},
	radii: {
		none: '0',
		xs: '0.125rem',
		sm: '0.25rem',
		md: '0.375rem',
		lg: '0.5rem',
		xl: '0.75rem',
		'2xl': '1rem',
		'3xl': '1.5rem',
		full: '9999px'
	},
	shadows: {
		none: '0 0 #0000',
		xs: '0px 1px 2px rgb(16 24 40 / 5%)',
		sm: '0px 1px 3px rgb(16 24 40 / 10%), 0px 1px 2px rgb(16 24 40 / 6%)',
		md: '0px 4px 8px -2px rgb(16 24 40 / 10%), 0px 2px 4px -2px rgb(16 24 40 / 6%)',
		lg: '0px 12px 16px -4px rgb(16 24 40 / 8%), 0px 4px 6px -2px rgb(16 24 40 / 3%)',
		xl: '0px 20px 24px -4px rgb(16 24 40 / 8%), 0px 8px 8px -4px rgb(16 24 40 / 3%)',
		'2xl': '0px 24px 48px -12px rgb(16 24 40 / 18%)',
		'3xl': '0px 32px 64px -12px rgb(16 24 40 / 14%)',
		inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)'
	},
	zIndices: {
		hide: -1,
		base: 0,
		docked: 10,
		sticky: 1000,
		banner: 1100,
		overlay: 1200,
		modal: 1300,
		dropdown: 1400,
		popover: 1500,
		tooltip: 1600,
		skipLink: 1700,
		toast: 1800
	}
};

const aliases = {
	bg: 'backgroundColor',
	bgColor: 'backgroundColor',
	m: 'margin',
	mt: 'marginTop',
	mr: 'marginRight',
	mb: 'marginBottom',
	ml: 'marginLeft',
	mx: 'marginX',
	my: 'marginY',
	me: 'marginEnd',
	p: 'padding',
	pt: 'paddingTop',
	pr: 'paddingRight',
	pb: 'paddingBottom',
	pl: 'paddingLeft',
	px: 'paddingX',
	py: 'paddingY',
	pe: 'paddingEnd',
	d: 'display',
	w: 'width',
	minW: 'minWidth',
	maxW: 'maxWidth',
	h: 'height',
	minH: 'minHeight',
	maxH: 'maxHeight',
	boxSize: 'boxSizing',
	pos: 'position'
} as const;

type Aliases = typeof aliases;

export const multiples = {
	marginX: ['marginLeft', 'marginRight'],
	marginY: ['marginTop', 'marginBottom'],
	paddingX: ['paddingLeft', 'paddingRight'],
	paddingY: ['paddingTop', 'paddingBottom'],
	scrollMarginX: ['scrollMarginLeft', 'scrollMarginRight'],
	scrollMarginY: ['scrollMarginTop', 'scrollMarginBottom'],
	scrollPaddingX: ['scrollPaddingLeft', 'scrollPaddingRight'],
	scrollPaddingY: ['scrollPaddingTop', 'scrollPaddingBottom'],
	size: ['width', 'height']
};

export const scales = {
	color: 'colors',
	background: 'colors',
	backgroundColor: 'colors',
	borderColor: 'colors',
	caretColor: 'colors',
	columnRuleColor: 'colors',
	outlineColor: 'colors',
	textDecorationColor: 'colors',
	opacity: 'opacities',
	transition: 'transitions',
	margin: 'space',
	marginTop: 'space',
	marginRight: 'space',
	marginBottom: 'space',
	marginLeft: 'space',
	marginX: 'space',
	marginY: 'space',
	marginBlock: 'space',
	marginBlockEnd: 'space',
	marginBlockStart: 'space',
	marginInline: 'space',
	marginInlineEnd: 'space',
	marginInlineStart: 'space',
	padding: 'space',
	paddingTop: 'space',
	paddingRight: 'space',
	paddingBottom: 'space',
	paddingLeft: 'space',
	paddingX: 'space',
	paddingY: 'space',
	paddingBlock: 'space',
	paddingBlockEnd: 'space',
	paddingBlockStart: 'space',
	paddingInline: 'space',
	paddingInlineEnd: 'space',
	paddingInlineStart: 'space',
	scrollMargin: 'space',
	scrollMarginTop: 'space',
	scrollMarginRight: 'space',
	scrollMarginBottom: 'space',
	scrollMarginLeft: 'space',
	scrollMarginX: 'space',
	scrollMarginY: 'space',
	scrollPadding: 'space',
	scrollPaddingTop: 'space',
	scrollPaddingRight: 'space',
	scrollPaddingBottom: 'space',
	scrollPaddingLeft: 'space',
	scrollPaddingX: 'space',
	scrollPaddingY: 'space',
	inset: 'space',
	insetBlock: 'space',
	insetBlockEnd: 'space',
	insetBlockStart: 'space',
	insetInline: 'space',
	insetInlineEnd: 'space',
	insetInlineStart: 'space',
	top: 'space',
	right: 'space',
	bottom: 'space',
	left: 'space',
	gridGap: 'space',
	gridColumnGap: 'space',
	gridRowGap: 'space',
	gap: 'space',
	columnGap: 'space',
	rowGap: 'space',
	fontFamily: 'fonts',
	fontSize: 'fontSizes',
	fontWeight: 'fontWeights',
	lineHeight: 'lineHeights',
	letterSpacing: 'letterSpacings',
	border: 'borders',
	borderTop: 'borders',
	borderRight: 'borders',
	borderBottom: 'borders',
	borderLeft: 'borders',
	borderWidth: 'borderWidths',
	borderStyle: 'borderStyles',
	borderRadius: 'radii',
	borderTopRightRadius: 'radii',
	borderTopLeftRadius: 'radii',
	borderBottomRightRadius: 'radii',
	borderBottomLeftRadius: 'radii',
	borderTopWidth: 'borderWidths',
	borderTopColor: 'colors',
	borderTopStyle: 'borderStyles',
	borderBottomWidth: 'borderWidths',
	borderBottomColor: 'colors',
	borderBottomStyle: 'borderStyles',
	borderLeftWidth: 'borderWidths',
	borderLeftColor: 'colors',
	borderLeftStyle: 'borderStyles',
	borderRightWidth: 'borderWidths',
	borderRightColor: 'colors',
	borderRightStyle: 'borderStyles',
	borderBlock: 'borders',
	borderBlockColor: 'colors',
	borderBlockEnd: 'borders',
	borderBlockEndColor: 'colors',
	borderBlockEndStyle: 'borderStyles',
	borderBlockEndWidth: 'borderWidths',
	borderBlockStart: 'borders',
	borderBlockStartColor: 'colors',
	borderBlockStartStyle: 'borderStyles',
	borderBlockStartWidth: 'borderWidths',
	borderBlockStyle: 'borderStyles',
	borderBlockWidth: 'borderWidths',
	borderEndEndRadius: 'radii',
	borderEndStartRadius: 'radii',
	borderInline: 'borders',
	borderInlineColor: 'colors',
	borderInlineEnd: 'borders',
	borderInlineEndColor: 'colors',
	borderInlineEndStyle: 'borderStyles',
	borderInlineEndWidth: 'borderWidths',
	borderInlineStart: 'borders',
	borderInlineStartColor: 'colors',
	borderInlineStartStyle: 'borderStyles',
	borderInlineStartWidth: 'borderWidths',
	borderInlineStyle: 'borderStyles',
	borderInlineWidth: 'borderWidths',
	borderStartEndRadius: 'radii',
	borderStartStartRadius: 'radii',
	columnRuleWidth: 'borderWidths',
	boxShadow: 'shadows',
	textShadow: 'shadows',
	zIndex: 'zIndices',
	width: 'sizes',
	minWidth: 'sizes',
	maxWidth: 'sizes',
	height: 'sizes',
	minHeight: 'sizes',
	maxHeight: 'sizes',
	flexBasis: 'sizes',
	size: 'sizes',
	blockSize: 'sizes',
	inlineSize: 'sizes',
	maxBlockSize: 'sizes',
	maxInlineSize: 'sizes',
	minBlockSize: 'sizes',
	minInlineSize: 'sizes',
	columnWidth: 'sizes',
	// svg
	fill: 'colors',
	stroke: 'colors'
} as const;
type Scales = typeof scales;

const positiveOrNegative = (scale: object, value: string | number) => {
	if (typeof value !== 'number' || value >= 0) {
		if (typeof value === 'string' && value.startsWith('-')) {
			const valueWithoutMinus = value.substring(1);
			const n = get(scale, valueWithoutMinus, valueWithoutMinus);
			if (typeof n === 'number') {
				return n * -1;
			}
			return `-${n}`;
		}
		return get(scale, value, value);
	}
	const absolute = Math.abs(value);
	const n = get(scale, absolute, absolute);
	if (typeof n === 'string') return '-' + n;
	return Number(n) * -1;
};

const transforms = [
	'margin',
	'marginTop',
	'marginRight',
	'marginBottom',
	'marginLeft',
	'marginX',
	'marginY',
	'marginBlock',
	'marginBlockEnd',
	'marginBlockStart',
	'marginInline',
	'marginInlineEnd',
	'marginInlineStart',
	'top',
	'bottom',
	'left',
	'right'
].reduce(
	(acc, curr) => ({
		...acc,
		[curr]: positiveOrNegative
	}),
	{}
);

const responsive =
	(styles: Exclude<RecastUIStyleObject, ThemeDerivedStyles>) => (theme?: Theme) => {
		const next: Exclude<RecastUIStyleObject, ThemeDerivedStyles> = {};
		const breakpoints = (theme && (theme.breakpoints as string[])) || defaultBreakpoints;
		const mediaQueries = [
			null,
			...breakpoints.map(n => (n.includes('@media') ? n : `@media screen and (min-width: ${n})`))
		];

		for (const k in styles) {
			const key = k as keyof typeof styles;
			let value = styles[key];
			if (typeof value === 'function') {
				value = value(theme || {});
			}

			if (value === false || value == null) {
				continue;
			}
			if (!Array.isArray(value)) {
				next[key] = value;
				continue;
			}
			for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
				const media = mediaQueries[i];
				if (!media) {
					next[key] = value[i];
					continue;
				}
				next[media] = next[media] || {};
				if (value[i] == null) continue;
				(next[media] as Record<string, any>)[key] = value[i];
			}
		}
		return next;
	};

type CssPropsArgument = { theme: Theme } | Theme;

export const systemCss =
	(args: RecastUIStyleObject = {}) =>
	(props: CssPropsArgument = {}): CSSAttribute => {
		const theme: Theme = {
			...defaultTheme,
			...('theme' in props ? props.theme : props)
		};
		// insert variant props before responsive styles, so they can be merged
		// we need to maintain order of the style props, so if a variant is place in the middle
		// of other props, it will extend its props at that same location order.

		const obj: CSSObject = getObjectWithVariants(
			typeof args === 'function' ? args(theme) : args,
			theme
		);

		const styles = responsive(obj as RecastUICSSObject)(theme);
		const result: CSSObject = {};
		for (const key in styles) {
			const x = styles[key as keyof typeof styles];
			const val = typeof x === 'function' ? x(theme) : x;

			if (val && typeof val === 'object') {
				if (hasDefault(val)) {
					result[key] = val[RECAST_UI_DEFAULT_KEY];
					continue;
				}

				if (Object.keys(pseudoSelectors).includes(key)) {
					result[pseudoSelectors[key as keyof typeof pseudoSelectors]] = systemCss(
						val as RecastUICSSObject
					)(theme);
					continue;
				}

				// On type level, val can also be an array here,
				// but we transform all arrays in `responsive` function.
				result[key] = systemCss(val as RecastUICSSObject)(theme);
				continue;
			}

			const prop = key in aliases ? aliases[key as keyof Aliases] : key;
			const scaleName = prop in scales ? scales[prop as keyof Scales] : undefined;
			const scale = scaleName ? theme?.[scaleName] : get(theme, prop, {});
			const transform = get(transforms, prop, get);
			const value = transform(scale, val, val);

			if (prop in multiples) {
				const dirs = multiples[prop as keyof typeof multiples];

				for (let i = 0; i < dirs.length; i++) {
					result[dirs[i]] = value;
				}
			} else {
				result[prop] = value;
			}
		}

		return result as CSSAttribute;
	};
