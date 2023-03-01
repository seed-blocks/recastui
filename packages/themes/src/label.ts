import { cva } from 'class-variance-authority';

export const label = cva(['text-base', 'font-medium', 'flex', 'items-center'], {
	variants: {
		fullWidth: { true: 'w-full' },
		inline: { true: 'inline-flex' },
		isDisabled: { true: 'text-gray-10 cursor-not-allowed' },
	},
	defaultVariants: {
		inline: true,
	},
});

export type LabelTheme = typeof label;
