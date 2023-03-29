import React, { useContext } from 'react';
import { DrawerContext } from './Drawer';
import { drawer } from '@recastui/themes';
import { Button } from '../button';
import { cl } from '../utils';

interface DrawerCloseButtonProps {
	onClick?: () => void;
	className?: string;
}

export const DrawerCloseButton: React.FC<DrawerCloseButtonProps> = ({ onClick, className }) => {
	const { onClose } = useContext(DrawerContext);
	return (
		<Button
			variant='ghost'
			square='base'
			className={cl(drawer.closeButton({ className }))}
			onClick={onClick || onClose}
			aria-label='Close drawer'>
			&times;
		</Button>
	);
};
