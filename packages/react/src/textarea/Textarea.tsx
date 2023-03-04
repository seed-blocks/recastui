import * as React from 'react';
import { textarea, TextareaTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
	VariantProps<TextareaTheme>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, error, disabled, resize, fullWidth, variant, inline, ...props }, ref) => {
		return (
			<textarea
				className={cl(
					textarea({
						resize,
						variant,
						fullWidth,
						inline,
						error,
						disabled,
						className,
					}),
				)}
				disabled={disabled}
				ref={ref}
				{...props}
			/>
		);
	},
);

Textarea.displayName = 'Textarea';
