import { cva } from 'class-variance-authority';

export const input = cva(['z-10'], {
	variants: {
		type: {
			button: '',
			color: '',
			date: '',
			'datetime-local': '',
			email: '',
			hidden: '',
			month: '',
			password: '',
			search: '',
			tel: '',
			text: '',
			time: '',
			url: '',
			week: '',
		},
		size: {
			xs: 'px-2 py-1 text-xs',
			sm: 'px-3 py-2 text-sm',
			base: 'px-4 py-2 text-base',
			lg: 'px-6 py-2.5 text-lg',
		},
		variant: {
			outline: '',
			solid: 'bg-gray-4 border-transparent focus:border-gray-10 focus:bg-gray-1 focus:ring-0',
			underline: 'border-0 border-b-2 border-gray-7 focus:ring-0 focus:border-gray-10 px-0.5',
			rounded: 'rounded-md',
		},
		error: {
			true: 'border-error-7',
		},
		inline: {
			true: 'inline-block',
		},
		fullWidth: {
			true: 'w-full block',
		},
	},
	defaultVariants: {
		variant: 'outline',
		size: 'base',
		fullWidth: true,
	},
});

export const inputGroup = 'flex isolate relative';
export const inputLeftAddon = 'px-3 bg-gray-3';
export const inputRightAddon = 'px-3 bg-gray-3';

export type InputTheme = typeof input;
