import { cva } from 'class-variance-authority';

export const card = cva(
	[''],
	{
		variants: {},
	}
);

export type CardTheme = typeof card;
