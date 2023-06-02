import { cva } from 'class-variance-authority';

export const popup = cva(
	[''],
	{
		variants: {},
	}
);

export type PopupTheme = typeof popup;
