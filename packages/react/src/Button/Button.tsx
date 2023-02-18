import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { button, ButtonTheme } from '@recastui/themes';
import { cl } from '../utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<ButtonTheme>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, color, fullWidth, disabled, pill, rounded, square, ...props },
		ref,
	) => {
		return (
			<button
				className={cl(
					button({ variant, size, color, fullWidth, disabled, pill, rounded, square, className }),
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = 'Button';
