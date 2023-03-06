import * as React from 'react';
import { radio, RadioTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { Label, LabelProps } from '../label';
import { cl } from '../utils';

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> &
	VariantProps<RadioTheme> & {
		label: string | React.ReactNode;
		labelProps?: LabelProps;
	};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	({ id, className, error, label, labelProps, disabled, size, color, type, ...props }, ref) => {
		const variantClassNames = cl(
			radio({ size, disabled, color, error, ...{ className: className as string } }),
		);
		if (!id) {
			id = `radio-${React.useId()}`;
		}
		return (
			<Label htmlFor={id} isDisabled={disabled} {...labelProps}>
				<input
					id={id}
					className={variantClassNames}
					type='radio'
					disabled={disabled}
					ref={ref}
					{...props}
				/>
				{label}
			</Label>
		);
	},
);

Radio.displayName = 'Radio';
