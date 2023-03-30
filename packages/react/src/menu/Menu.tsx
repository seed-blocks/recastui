import React, { useState, useRef, useMemo, useEffect } from 'react';
import { uuid } from '../utils';
import { MenuContext } from './MenuContext';

interface MenuProps {
	children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const menuId = uuid('menu');
	const itemsRef = useRef<React.RefObject<HTMLElement>[]>([]);

	const onClose = () => {
		setIsOpen(false);
	};

	const onMenuToggle = () => {
		setIsOpen(!isOpen);
	};

	const onItemClick = (index: number) => {
		setIsOpen(false);
		setFocusedIndex(-1);
	};

	const onItemKeyDown = (event: React.KeyboardEvent, index: number) => {
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			setFocusedIndex((index + 1) % itemsRef.current.length);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			setFocusedIndex((index - 1 + itemsRef.current.length) % itemsRef.current.length);
		} else if (event.key === 'Home') {
			event.preventDefault();
			setFocusedIndex(0);
		} else if (event.key === 'End') {
			event.preventDefault();
			setFocusedIndex(itemsRef.current.length - 1);
		} else if (event.key === 'Escape') {
			setIsOpen(false);
			setFocusedIndex(-1);
		}
	};

	const registerItem = (itemRef: React.RefObject<HTMLElement>) => {
		itemsRef.current.push(itemRef);
	};

	const unregisterItem = (itemRef: React.RefObject<HTMLElement>) => {
		itemsRef.current = itemsRef.current.filter(ref => ref !== itemRef);
	};

	const contextValue = useMemo(
		() => ({
			isOpen,
			menuId,
			focusedIndex,
			onClose,
			onMenuToggle,
			onItemClick,
			onItemKeyDown,
			registerItem,
			unregisterItem,
		}),
		[isOpen, menuId, focusedIndex],
	);

	return (
		<MenuContext.Provider value={contextValue}>
			<div data-menu>{children}</div>
		</MenuContext.Provider>
	);
};
