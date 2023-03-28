import React, { useContext } from 'react';
import { ModalContext } from './Modal';
import { modal } from '@recastui/themes';
import { Button } from '../button';
import { cl } from '../utils';

interface ModalCloseButtonProps {
	onClick?: () => void;
	className?: string;
}

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ onClick, className }) => {
	const { onClose } = useContext(ModalContext);
	return (
		<Button
			variant='ghost'
			square='base'
			className={cl(modal.closeButton({ className }))}
			onClick={onClick || onClose}
			aria-label='Close modal'>
			&times;
		</Button>
	);
};
