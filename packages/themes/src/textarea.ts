import { cva } from 'class-variance-authority';

export const textarea = cva(
	[''],
	{
		variants: {},
	}
);

export type TextareaTheme = typeof textarea;
