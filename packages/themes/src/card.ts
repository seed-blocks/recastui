import { cva } from 'class-variance-authority';
import { trueColors, TrueColors } from './colors';

const hoverStateClasses = {
	main: 'hover:bg-main-4',
	tomato: 'hover:bg-tomato-4',
	red: 'hover:bg-red-4',
	crimson: 'hover:bg-crimson-4',
	pink: 'hover:bg-pink-4',
	plum: 'hover:bg-plum-4',
	purple: 'hover:bg-purple-4',
	violet: 'hover:bg-violet-4',
	indigo: 'hover:bg-indigo-4',
	blue: 'hover:bg-blue-4',
	cyan: 'hover:bg-cyan-4',
	teal: 'hover:bg-teal-4',
	green: 'hover:bg-green-4',
	grass: 'hover:bg-grass-4',
	orange: 'hover:bg-orange-4',
	brown: 'hover:bg-brown-4',
	sky: 'hover:bg-sky-4',
	mint: 'hover:bg-mint-4',
	lime: 'hover:bg-lime-4',
	yellow: 'hover:bg-yellow-4',
	amber: 'hover:bg-amber-4',
	gold: 'hover:bg-gold-4',
	bronze: 'hover:bg-bronze-4',
};

const getColorVariants = () =>
	trueColors.map((color: TrueColors) => ({
		hoverState: true,
		bg: color,
		class: hoverStateClasses[color],
	}));

const compoundVariants = [...getColorVariants()];

export const card = cva([], {
	variants: {
		bg: {
			main: 'bg-main-3 border-main-7',
			tomato: 'bg-tomato-3 border-tomato-7',
			red: 'bg-red-3 border-red-7',
			crimson: 'bg-crimson-3 border-crimson-7',
			pink: 'bg-pink-3 border-pink-7',
			plum: 'bg-plum-3 border-plum-7',
			purple: 'bg-purple-3 border-purple-7',
			violet: 'bg-violet-3 border-violet-7',
			indigo: 'bg-indigo-3 border-indigo-7',
			blue: 'bg-blue-3 border-blue-7',
			cyan: 'bg-cyan-3 border-cyan-7',
			teal: 'bg-teal-3 border-teal-7',
			green: 'bg-green-3 border-green-7',
			grass: 'bg-grass-3 border-grass-7',
			orange: 'bg-orange-3 border-orange-7',
			brown: 'bg-brown-3 border-brown-7',
			sky: 'bg-sky-3 border-sky-7',
			mint: 'bg-mint-3 border-mint-7',
			lime: 'bg-lime-3 border-lime-7',
			yellow: 'bg-yellow-3 border-yellow-7',
			amber: 'bg-amber-3 border-amber-7',
			gold: 'bg-gold-3 border-gold-7',
			bronze: 'bg-bronze-3 border-bronze-7',
		},
		hoverState: {
			true: '',
		},
		variant: {
			elevated: 'shadow-lg',
			outline: 'border',
			filled: '',
		},
		size: {
			xs: ['max-w-xs', 'h-auto'],
			sm: ['max-w-sm', 'h-auto'],
			md: ['max-w-md', 'h-auto'],
			lg: ['max-w-lg', 'h-auto'],
			xl: ['max-w-xl', 'h-auto'],
			'2xl': ['max-w-2xl', 'h-auto'],
			'1/4': ['max-w-1/4', 'h-auto'],
			half: ['max-w-1/2', 'h-auto'],
			'3/4': ['max-w-3/4', 'h-auto'],
			full: ['max-w-full', 'h-full'],
		},
		padding: {
			none: '',
			xs: '[&_[data-card]]:p-1',
			sm: '[&_[data-card]]:p-3',
			md: '[&_[data-card]]:p-5',
			lg: '[&_[data-card]]:p-7',
			xl: '[&_[data-card]]:p-9',
		},
		rounded: {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full',
		},
	},
	compoundVariants,
	defaultVariants: {
		bg: 'main',
		variant: 'filled',
		size: 'full',
		padding: 'md',
		rounded: 'none',
		hoverState: false,
	},
});
