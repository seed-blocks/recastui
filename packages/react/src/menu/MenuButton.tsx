import React from 'react';
import { Button, ButtonProps } from '../button';
import { useMenuContext } from './MenuContext';

export type MenuButtonProps = ButtonProps;

export const MenuButton: React.FC<MenuButtonProps> = ({ onClick, ...rest }) => {
	const { isOpen, menuId, onMenuOpen, onMenuClose } = useMenuContext();

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		!isOpen && onMenuOpen();
		onClick?.(e);
	};

	return (
		<Button
			aria-haspopup='true'
			aria-controls={`${menuId}-list`}
			aria-expanded={isOpen}
			onClick={handleClick}
			{...rest}
		/>
	);
};
