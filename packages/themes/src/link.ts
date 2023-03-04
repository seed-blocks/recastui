import { cva } from 'class-variance-authority';

export const link = cva(
	[''],
	{
		variants: {},
	}
);

export type LinkTheme = typeof link;
