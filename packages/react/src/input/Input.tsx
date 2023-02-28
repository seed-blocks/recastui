import * as React from 'react';
import { input, InputTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type InputProps = React.InputHTMLAttributes<Omit<HTMLInputElement, 'type'>> &
	VariantProps<InputTheme> & {
		type?:
			| 'button'
			| 'color'
			| 'date'
			| 'datetime-local'
			| 'email'
			| 'hidden'
			| 'month'
			| 'password'
			| 'search'
			| 'tel'
			| 'text'
			| 'time'
			| 'url'
			| 'week';
	};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{ disabled, error, size, type = 'text', fullWidth, className, variant, inline, ...props },
		ref,
	) => {
		return (
			<input
				type={type}
				ref={ref}
				className={cl(input({ size, variant, fullWidth, inline, error, disabled, className }))}
				{...props}
			/>
		);
	},
);

Input.displayName = 'Input';
