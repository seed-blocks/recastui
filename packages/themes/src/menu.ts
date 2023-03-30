import { cva, VariantProps } from 'class-variance-authority';

export const menuList = cva('bg-main-3 shadow-md min-w-[200px]');

export type MenuListTheme = VariantProps<typeof menuList>;

export const menuItem = cva(
	'flex items-center px-4 py-2 cursor-pointer hover:bg-main-5 focus:outline-none focus:ring-2 focus:ring-main-10',
);

export type MenuItemTheme = VariantProps<typeof menuItem>;
