import { cva } from 'class-variance-authority';

export const kbd = cva(
	[''],
	{
		variants: {},
	}
);

export type KbdTheme = typeof kbd;
