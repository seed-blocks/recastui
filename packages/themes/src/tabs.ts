import { cva } from 'class-variance-authority';

export const tabList = cva(['border-main-7 flex'], {
	variants: {
		variant: {
			underline: '',
			outline: 'border-0',
			pills: 'border-0',
		},
		orientation: {
			horizontal: 'flex flex-row flex-wrap border-b-2',
			vertical: 'flex flex-col flex-wrap justify-start border-r-2',
		},
	},
	compoundVariants: [
		{
			variant: 'pills',
			orientation: 'vertical',
			class: 'border-0',
		},
		{
			variant: 'pills',
			orientation: 'horizontal',
			class: 'border-0',
		},
		{
			variant: 'outline',
			orientation: 'horizontal',
			class: 'border-main-12',
		},
		{
			variant: 'outline',
			orientation: 'vertical',
			class: 'border-main-12',
		},
	],
});

export const tab = cva(
	[
		'py-2 px-4 text-main-11 focus:border-gray-10 focus:ring-2 focus:ring-gray-10 focus:ring-offset-0 outline-0',
	],
	{
		variants: {
			variant: {
				underline: 'border-main-7',
				outline: 'bg-main-1',
				pills: 'border-0',
			},
			orientation: {
				horizontal: '-mb-0.5 border-b-2',
				vertical: '-mr-0.5 border-r-2',
			},
			isActive: {
				true: 'font-semibold text-main-12',
			},
			rounded: {
				none: 'rounded-none',
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg',
				full: 'rounded-full',
			},
		},
		compoundVariants: [
			{
				variant: 'underline',
				isActive: true,
				class: 'border-main-9',
			},
			{
				variant: 'outline',
				isActive: true,
				orientation: 'horizontal',
				class: 'border-2 border-b-0 border-main-12',
			},
			{
				variant: 'outline',
				isActive: true,
				orientation: 'vertical',
				class: 'border-2 border-r-0 border-main-12',
			},
			{
				variant: 'pills',
				isActive: false,
				class: 'border-0 bg-main-1 text-main-12',
			},
			{
				variant: 'pills',
				isActive: true,
				class: 'border-0 bg-main-9 text-main-1',
			},
			{
				variant: 'outline',
				orientation: 'horizontal',
				isActive: false,
				class: 'border-b-2 border-main-12',
			},
			{
				variant: 'outline',
				orientation: 'vertical',
				isActive: false,
				class: 'border-r-2 border-main-12',
			},
		],
	},
);
