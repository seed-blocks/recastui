import { cva, VariantProps } from 'class-variance-authority';

export const heading = cva('font-display font-bold', {
	variants: {
		order: {
			'1': 'text-5xl',
			'2': 'text-4xl',
			'3': 'text-3xl',
			'4': 'text-2xl',
			'5': 'text-xl',
			'6': 'text-lg',
		},
	},
	defaultVariants: {
		order: '2',
	},
});

export type HeadingTheme = VariantProps<typeof heading>;
