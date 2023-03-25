import * as React from 'react';
import { kbd, KbdTheme } from '@recastui/themes';
import { cl } from '../utils';

export interface KbdProps extends React.HTMLAttributes<'kbd'>, KbdTheme {
	className?: string;
}

export const Kbd = React.forwardRef<'kbd', KbdProps>(({ className, size, ...props }, ref) => {
	const kbdClassName = cl(kbd({ size, className }));
	return <kbd ref={ref} className={kbdClassName} {...props} />;
});

Kbd.displayName = 'Kbd';
