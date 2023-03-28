import { cva, VariantProps } from 'class-variance-authority';

export const modal = {
	content: cva('bg-main-1 block relative', {
		variants: {
			size: {
				xs: ['max-w-xs'],
				sm: ['max-w-sm'],
				md: ['max-w-md'],
				lg: ['max-w-lg'],
				xl: ['max-w-xl'],
				full: ['max-w-full'],
			},
		},
		defaultVariants: {
			size: 'md',
		},
	}),
	overlay: cva(
		['modal-overlay', 'fixed inset-0 z-[1000] flex justify-center overflow-y-auto bg-blackA-11'],
		{
			variants: {
				isCentered: {
					true: 'items-center',
					false: 'items-start top-14',
				},
			},
			defaultVariants: {
				isCentered: true,
			},
		},
	),
	body: cva('bg-main-1 p-6'),
	header: cva('bg-main-1 p-6 text-xl font-semibold'),
	footer: cva('bg-main-1 p-6'),
	closeButton: cva('absolute text-2xl top-0 right-0 p-4'),
};

export type ModalTheme = VariantProps<typeof modal.content>;
