import * as React from 'react';
import { label, LabelTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
	VariantProps<LabelTheme> & {
		isDisabled?: boolean;
	};

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
	({ className, fullWidth, inline, isDisabled, ...props }, ref) => {
		return <label className={cl(label({ fullWidth, inline, isDisabled, className }))} {...props} />;
	},
);

Label.displayName = 'Label';
