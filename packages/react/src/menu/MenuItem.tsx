import React, { useRef, useEffect } from 'react';
import { useMenuContext } from './MenuContext';
import { menuItem } from '@recastui/themes';
import { cl } from '../utils';
interface MenuItemProps {
	children: React.ReactNode;
	index: number;
	className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, index, className }) => {
	const { menuId, focusedIndex, onItemClick, onItemKeyDown, registerItem, unregisterItem } =
		useMenuContext();
	const ref = useRef<HTMLLIElement>(null);

	useEffect(() => {
		registerItem(ref);
		return () => unregisterItem(ref);
	}, []);

	useEffect(() => {
		if (focusedIndex === index) {
			ref.current?.focus();
		}
	}, [focusedIndex, index]);

	const handleClick = () => {
		onItemClick(index);
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		onItemKeyDown(event, index);
	};

	return (
		<li
			ref={ref}
			id={`${menuId}-item-${index}`}
			role='menuitem'
			tabIndex={focusedIndex === index ? 0 : -1}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			className={cl(menuItem({ className }))}>
			{children}
		</li>
	);
};
