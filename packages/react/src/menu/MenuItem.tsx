import React, { useRef, useEffect } from 'react';
import { useMenuContext } from './MenuContext';
import { menuItem } from '@recastui/themes';
import { cl } from '../utils';

export type MenuItemProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	_index: number;
};

export const MenuItem: React.FC<MenuItemProps> = ({ children, _index, onClick, className }) => {
	const { menuId, focusedIndex, onMenuClose, onItemKeyDown, registerItem, unregisterItem } =
		useMenuContext();
	const ref = useRef<HTMLLIElement>(null);

	useEffect(() => {
		registerItem(ref);
		return () => unregisterItem(ref);
	}, []);

	useEffect(() => {
		if (focusedIndex === _index) {
			ref.current?.focus();
		}
	}, [focusedIndex, _index]);

	const handleClick = () => {
		onMenuClose();
		onClick?.();
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		onItemKeyDown(event, _index, onClick);
	};

	return (
		<li
			ref={ref}
			id={`${menuId}-item-${_index}`}
			role='menuitem'
			tabIndex={focusedIndex === _index ? 0 : -1}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			className={cl(menuItem({ className }))}>
			{children}
		</li>
	);
};
