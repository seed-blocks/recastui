import { cva, VariantProps } from 'class-variance-authority';

export const text = cva('', {
	variants: {
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			base: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			'2xl': 'text-2xl',
			'3xl': 'text-3xl',
			'4xl': 'text-4xl',
			'5xl': 'text-5xl',
			'6xl': 'text-6xl',
			'7xl': 'text-7xl',
			'8xl': 'text-8xl',
			'9xl': 'text-9xl',
		},
		weight: {
			thin: 'font-thin',
			extralight: 'font-extralight',
			light: 'font-light',
			normal: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
			extrabold: 'font-extrabold',
			black: 'font-black',
		},
		italic: {
			true: 'italic',
			false: 'not-italic',
		},
		color: {
			main: 'text-main-9',
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
		decoration: {
			underline: 'underline',
			'line-through': 'line-through',
			'no-underline': 'no-underline',
		},
		transform: {
			uppercase: 'uppercase',
			lowercase: 'lowercase',
			capitalize: 'capitalize',
			'normal-case': 'normal-case',
		},
		align: {
			left: 'text-left',
			center: 'text-center',
			right: 'text-right',
			justify: 'text-justify',
		},
		lineClamp: {
			'1': 'line-clamp-1',
			'2': 'line-clamp-2',
			'3': 'line-clamp-3',
			'4': 'line-clamp-4',
			'5': 'line-clamp-5',
			'6': 'line-clamp-6',
			'7': 'line-clamp-7',
			'8': 'line-clamp-8',
			'9': 'line-clamp-9',
			'10': 'line-clamp-10',
			none: 'line-clamp-none',
		},
		truncate: {
			true: 'truncate',
		},
	},
});

export type TextTheme = VariantProps<typeof text>;
