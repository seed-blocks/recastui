import React, { forwardRef, ReactNode, Ref } from 'react';
import { modal } from '@recastui/themes';
import { Button, ButtonProps } from '../button';
import { cl } from '../utils';
import { useModalContext } from './ModalContext';

export type ModalCloseButtonProps = ButtonProps & {
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
};

export const ModalCloseButton = forwardRef(
	({ className, children, ...props }: ModalCloseButtonProps, ref: Ref<HTMLButtonElement>) => {
		const { setOpen } = useModalContext();
		return (
			<Button
				variant='ghost'
				square='base'
				{...props}
				ref={ref}
				className={cl(modal.closeButton({ className }))}
				onClick={() => setOpen(false)}
				aria-label='Close modal'>
				{children ? children : <>&times;</>}
			</Button>
		);
	},
);

ModalCloseButton.displayName = 'ModalCloseButton';
