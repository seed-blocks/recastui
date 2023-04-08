import React, { forwardRef, ReactNode, Ref } from 'react';
import { drawer } from '@recastui/themes';
import { Button, ButtonProps } from '../button';
import { cl } from '../utils';
import { useDrawerContext } from './DrawerContext';

export type DrawerCloseButtonProps = ButtonProps & {
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
};

export const DrawerCloseButton = forwardRef(
	({ className, children, ...props }: DrawerCloseButtonProps, ref: Ref<HTMLButtonElement>) => {
		const { setOpen } = useDrawerContext();
		return (
			<Button
				variant='ghost'
				square='base'
				{...props}
				ref={ref}
				className={cl(drawer.closeButton({ className }))}
				onClick={() => setOpen(false)}
				aria-label='Close drawer'>
				{children ? children : <>&times;</>}
			</Button>
		);
	},
);

DrawerCloseButton.displayName = 'DrawerCloseButton';
