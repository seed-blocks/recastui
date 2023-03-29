import { cva, VariantProps } from 'class-variance-authority';

export const drawer = {
	content: cva('bg-main-1 relative fixed flex flex-col', {
		variants: {
			size: {
				xs: '',
				sm: '',
				md: '',
				lg: '',
				xl: '',
				full: 'w-screen h-screen',
			},
			placement: {
				top: ['top-0', 'left-0', 'right-0'],
				right: ['top-0', 'right-0', 'bottom-0'],
				bottom: ['left-0', 'right-0', 'bottom-0'],
				left: ['top-0', 'left-0', 'bottom-0'],
			},
		},
		compoundVariants: [
			{
				placement: ['top', 'bottom'],
				size: 'xs',
				class: 'max-h-xs w-screen',
			},
			{
				placement: ['top', 'bottom'],
				size: 'sm',
				class: 'max-h-sm w-screen',
			},
			{
				placement: ['top', 'bottom'],
				size: 'md',
				class: 'max-h-md w-screen',
			},
			{
				placement: ['top', 'bottom'],
				size: 'lg',
				class: 'max-h-lg w-screen',
			},
			{
				placement: ['top', 'bottom'],
				size: 'xl',
				class: 'max-h-xl w-screen',
			},
			{
				placement: ['left', 'right'],
				size: 'xs',
				class: 'max-w-xs h-screen',
			},
			{
				placement: ['left', 'right'],
				size: 'sm',
				class: 'max-w-sm w-screen',
			},
			{
				placement: ['left', 'right'],
				size: 'md',
				class: 'max-w-md w-screen',
			},
			{
				placement: ['left', 'right'],
				size: 'lg',
				class: 'max-w-lg w-screen',
			},
			{
				placement: ['left', 'right'],
				size: 'xl',
				class: 'max-w-xl w-screen',
			},
		],
		defaultVariants: {
			size: 'xs',
			placement: 'left',
		},
	}),
	overlay: cva(['modal-overlay fixed inset-0 z-[999] overflow-y-auto bg-blackA-11']),
	header: cva('bg-main-1 px-6 py-4 text-xl font-semibold'),
	body: cva('flex grow shrink basis-0 bg-main-1 p-6 pb-4 pt-2'),
	footer: cva('bg-main-1 px-6 py-4'),
	closeButton: cva('absolute text-2xl top-0 right-0 p-4'),
};

export type DrawerTheme = VariantProps<typeof drawer.content>;
