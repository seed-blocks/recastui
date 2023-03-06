import * as React from 'react';
import { Label, LabelProps } from '../label';
import { checkbox, CheckboxTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> &
	VariantProps<CheckboxTheme> & {
		label: string | React.ReactNode;
		labelProps?: LabelProps;
	};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	({ id, className, error, label, labelProps, disabled, size, color, type, ...props }, ref) => {
		if (!id) {
			id = `checkbox-${React.useId()}`;
		}
		return (
			<Label htmlFor={id} isDisabled={disabled} {...labelProps}>
				<input
					id={id}
					className={cl(
						checkbox({ size, disabled, color, error, ...{ className: className as string } }),
					)}
					type='checkbox'
					disabled={disabled}
					ref={ref}
					{...props}
				/>
				{label}
			</Label>
		);
	},
);

Checkbox.displayName = 'Checkbox';
