import * as React from 'react';
import { select, SelectTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & VariantProps<SelectTheme>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	(
		{
			className,
			error,
			disabled,
			size,
			fullWidth,
			variant,
			inline,
			placeholder,
			children,
			...props
		},
		ref,
	) => {
		return (
			<select
				className={cl(
					select({
						size,
						variant,
						fullWidth,
						inline,
						error,
						disabled,
						// @ts-ignore
						className,
					}),
				)}
				disabled={disabled}
				ref={ref}
				{...props}>
				{placeholder && <option value=''>{placeholder}</option>}
				{children}
			</select>
		);
	},
);

Select.displayName = 'Select';
