import { cva } from 'class-variance-authority';

export enum AccordionVariantTypes {
	boxed = 'boxed',
	filled = 'filled',
	spaced = 'spaced',
}

const classNames = 'bg-main-3 hover:bg-main-4';

export const accordion = cva('', {
	variants: {
		variant: {
			boxed: 'border border-main-7',
			filled: '',
			spaced: 'flex flex-col space-y-4',
		},
	},
});

export const accordionButton = cva(
	[
		'flex',
		'justify-between',
		'items-center',
		'p-3',
		'border-main-7',
		'border-b',
		'bg-main-1',
		'hover:bg-main-2',
	],
	{
		variants: {
			variant: {
				boxed: '',
				filled: '',
				spaced: 'border-0 bg-main-3 hover:bg-main-4',
			},
			open: {
				true: '',
			},
		},
		compoundVariants: [
			{
				variant: AccordionVariantTypes.boxed,
				open: true,
				class: 'bg-main-3 hover:bg-main-4',
			},
			{
				variant: AccordionVariantTypes.filled,
				open: true,
				class: 'bg-main-3 hover:bg-main-4',
			},
			{
				variant: AccordionVariantTypes.spaced,
				open: true,
				class: 'bg-main-1 hover:bg-main-2 border border-b-0',
			},
		],
	},
);

export const accordionPanel = cva(['border-main-7', 'bg-main-2', 'border-b', 'p-3'], {
	variants: {
		variant: {
			boxed: '',
			filled: '',
			spaced: '',
		},
		open: {
			true: '',
		},
	},
	compoundVariants: [
		{
			variant: AccordionVariantTypes.boxed,
			open: true,
			class: 'bg-main-3',
		},
		{
			variant: AccordionVariantTypes.filled,
			open: true,
			class: 'bg-main-3',
		},
		{
			variant: AccordionVariantTypes.spaced,
			open: true,
			class: 'border border-t-0 bg-main-2',
		},
	],
});

export type AccordionTheme = typeof accordion;
