import React from 'react';
import { menu } from '@recastui/themes';
import { cl } from '../utils';
import { Button, ButtonProps } from '../button';

export type MenuItemProps = ButtonProps;

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
	({ children, className, ...props }, ref) => {
		return (
			<Button
				variant='unstyled'
				className={cl(menu.item({ className }))}
				{...props}
				ref={ref}
				role='menuitem'>
				{children}
			</Button>
		);
	},
);
