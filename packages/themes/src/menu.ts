import { cva, VariantProps } from 'class-variance-authority';

export const menu = {
	button: cva('justify-between', {
		variants: {
			isNested: {
				true: 'MenuItem focus-visible:outline-none hover:bg-main-7 focus-visible:bg-main-7 focus-visible:ring-0 focus-visible:border-0 w-full',
				false: 'RootMenu',
			},
		},
	}),
	list: cva('outline-none bg-main-3'),
	item: cva(
		'MenuItem flex items-center justify-start hover:bg-main-7 focus-visible:outline-none focus-visible:bg-main-7 focus-visible:ring-0 focus-visible:border-0',
	),
};
export type MenuListTheme = VariantProps<typeof menu.list>;
export type MenuItemTheme = VariantProps<typeof menu.item>;
