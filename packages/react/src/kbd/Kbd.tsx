import * as React from 'react';
import { kbd, KbdTheme } from '@recastui/themes';
import { cl } from '../utils';

export interface KbdProps extends React.HTMLAttributes<HTMLSpanElement>, KbdTheme {
	className?: string;
}

export const Kbd = React.forwardRef<HTMLSpanElement, KbdProps>(
	({ className, size, ...props }, ref) => {
		const kbdClassName = cl(kbd({ size, className }));
		return <span ref={ref} className={kbdClassName} {...props} />;
	},
);

Kbd.displayName = 'Kbd';
