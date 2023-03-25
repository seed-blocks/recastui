import { cva, VariantProps } from 'class-variance-authority';

export const kbd = cva('bg-main-2 border border-b-2 border-main-7', {
	variants: {
		size: {
			sm: ['text-xs', 'py-1', 'px-2'],
			md: ['text-sm', 'py-2', 'px-3'],
			lg: ['text-md', 'py-3', 'px-4'],
		},
	},
	defaultVariants: {
		size: 'sm',
	},
});

export type KbdTheme = VariantProps<typeof kbd>;
