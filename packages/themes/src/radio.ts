import { cva } from 'class-variance-authority';

export const radio = cva(
	[
		'bg-main-1',
		'border-2',
		'focus:ring-2',
		'focus:ring-offset-0',
		'focus:ring-gray-10',
		'outline-0',
		'mr-2',
	],
	{
		variants: {
			color: {
				main: 'text-main-12',
				tomato: 'text-tomato-9 border-tomato-11',
				red: 'text-red-9 border-red-11',
				crimson: 'text-crimson-9 border-crimson-11',
				pink: 'text-pink-9 border-pink-11',
				plum: 'text-plum-9 border-plum-11',
				purple: 'text-purple-9 border-purple-11',
				violet: 'text-violet-9 border-violet-11',
				indigo: 'text-indigo-9 border-indigo-11',
				blue: 'text-blue-9 border-blue-11',
				cyan: 'text-cyan-9 border-cyan-11',
				teal: 'text-teal-9 border-teal-11',
				green: 'text-green-9 border-green-11',
				grass: 'text-grass-9 border-grass-11',
				orange: 'text-orange-9 border-orange-11',
				brown: 'text-brown-9 border-brown-11',
				sky: 'text-sky-9 border-sky-11',
				mint: 'text-mint-9 border-mint-11',
				lime: 'text-lime-9 border-lime-11',
				yellow: 'text-yellow-9 border-yellow-11',
				amber: 'text-amber-9 border-amber-11',
				gold: 'text-gold-9 border-gold-11',
				bronze: 'text-bronze-9 border-bronze-11',
				error: 'text-error-9 border-error-11',
				info: 'text-info-9 border-info-11',
				success: 'text-success-9 border-success-11',
				warning: 'text-warning-9 border-warning-11',
			},
			size: {
				sm: 'w-3 h-3',
				base: 'w-4 h-4',
				lg: 'w-5 h-5',
			},
			error: {
				true: 'text-error-9 border-error-9',
			},
			disabled: {
				true: 'cursor-not-allowed text-main-10',
			},
		},
		defaultVariants: {
			color: 'main',
		},
	},
);

export type RadioTheme = typeof radio;
