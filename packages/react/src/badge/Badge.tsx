import * as React from 'react';
import { badge, BadgeTheme } from '@recastui/themes';
import { VariantProps } from 'class-variance-authority';
import { cl } from '../utils';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<BadgeTheme>;

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ className, variant, color, pill, uppercase, ...props }, ref) => (
		<span
			className={cl(badge({ variant, color, pill, uppercase, className }))}
			ref={ref}
			{...props}
		/>
	),
);

Badge.displayName = 'Badge';
