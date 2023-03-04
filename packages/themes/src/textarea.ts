import { cva } from 'class-variance-authority';

export const textarea = cva(
	[
		'bg-gray-1',
		'focus:ring-2',
		'focus:ring-offset-0',
		'focus:ring-gray-10',
		'text-base',
		'outline-0',
	],
	{
		variants: {
			variant: {
				outline: 'border border-gray-7 focus:border-gray-10',
				solid:
					'bg-gray-4 border border-transparent focus:border-gray-10 focus:bg-gray-1 focus:ring-2',
				underline: 'border-0 border-b-2 border-gray-7 focus:ring-0 focus:border-gray-10 px-0.5',
				rounded: 'rounded-md border border-gray-7 focus:border-gray-10',
			},
			resize: {
				both: 'resize',
				vertical: 'resize-y',
				horizontal: 'resize-x',
				none: 'resize-none',
			},
			inline: {
				true: 'inline-block',
			},
			fullWidth: {
				true: 'w-full block',
			},
			disabled: {
				true: 'cursor-not-allowed text-main-10',
			},
			error: {
				true: 'border-error-9 text-error-9 focus:ring-error-9',
			},
		},
		defaultVariants: {
			variant: 'outline',
			fullWidth: true,
			resize: 'both',
		},
	},
);

export type TextareaTheme = typeof textarea;
