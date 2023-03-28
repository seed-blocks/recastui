import { cva, VariantProps } from 'class-variance-authority';

export const modal = {
	content: cva('mt-16 bg-main-1 relative flex flex-col', {
		variants: {
			size: {
				xs: ['max-w-xs'],
				sm: ['max-w-sm'],
				md: ['max-w-md'],
				lg: ['max-w-lg'],
				xl: ['max-w-xl'],
				full: ['max-w-full h-screen mt-0'],
			},
			isCentered: {
				true: 'mt-0',
				false: '',
			},
		},
		defaultVariants: {
			isCentered: false,
			size: 'md',
		},
	}),
	overlay: cva(
		['modal-overlay fixed inset-0 z-[1000] flex justify-center overflow-y-auto bg-blackA-11'],
		{
			variants: {
				isCentered: {
					true: 'items-center',
					false: 'items-start',
				},
			},
			defaultVariants: {
				isCentered: false,
			},
		},
	),
	header: cva('bg-main-1 px-6 py-4 text-xl font-semibold'),
	body: cva('flex grow shrink basis-0 bg-main-1 p-6 pb-4 pt-2'),
	footer: cva('bg-main-1 px-6 py-4'),
	closeButton: cva('absolute text-2xl top-0 right-0 p-4'),
};

export type ModalTheme = VariantProps<typeof modal.content>;
