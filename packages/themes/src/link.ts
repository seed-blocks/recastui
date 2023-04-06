import { cva } from 'class-variance-authority';

export const link = cva(
	[
		'underline',
		'hover:no-underline',
		'focus:ring-2',
		'focus:ring-offset-0',
		'focus:ring-gray-10',
		'outline-0',
	],
	{
		variants: {
			isExternal: {
				// Styles located in `@recastui/tailwind` under the comment "Link type external".
				true: '',
			},
			color: {
				main: 'text-main-12',
				tomato: 'text-tomato-9',
				red: 'text-red-9',
				crimson: 'text-crimson-9',
				pink: 'text-pink-9',
				plum: 'text-plum-9',
				purple: 'text-purple-9',
				violet: 'text-violet-9',
				indigo: 'text-indigo-9',
				blue: 'text-blue-9',
				cyan: 'text-cyan-9',
				teal: 'text-teal-9',
				green: 'text-green-9',
				grass: 'text-grass-9',
				orange: 'text-orange-9',
				brown: 'text-brown-9',
				sky: 'text-sky-9',
				mint: 'text-mint-9',
				lime: 'text-lime-9',
				yellow: 'text-yellow-9',
				amber: 'text-amber-9',
				gold: 'text-gold-9',
				bronze: 'text-bronze-9',
				error: 'text-error-9',
				info: 'text-info-9',
				success: 'text-success-9',
				warning: 'text-warning-9',
			},
		},
		defaultVariants: {
			color: 'main',
		},
	},
);

export type LinkTheme = typeof link;
