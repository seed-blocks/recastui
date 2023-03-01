import { cva } from 'class-variance-authority';

export const radio = cva(
	[''],
	{
		variants: {},
	}
);

export type RadioTheme = typeof radio;
