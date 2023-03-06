import * as React from 'react';
import { switchTheme, SwitchTheme } from '@recastui/themes';
import { Label, LabelProps } from '../label';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> &
	VariantProps<SwitchTheme> & {
		label: string | React.ReactNode;
		labelProps?: LabelProps;
	};

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
	(
		{ id, className, label, labelProps, error, disabled, size, color, type, rounded, ...props },
		ref,
	) => {
		const variantClassNames = cl(switchTheme({ size, disabled, color, error, rounded, ...{ className: className as string }, }));
		if (!id) {
			id = `switch-${React.useId()}`;
		}
		return (
			<Label htmlFor={id} isDisabled={disabled} {...labelProps}>
				<input
					role='switch'
					id={id}
					className='visually-hidden peer'
					type='checkbox'
					disabled={disabled}
					ref={ref}
					{...props}
				/>
				<span role='presentation' aria-hidden='true' className={variantClassNames}></span>
				{label}
			</Label>
		);
	},
);

Switch.displayName = 'Switch';
