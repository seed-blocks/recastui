import React, { useState, useRef, useMemo, useEffect } from 'react';
import { uuid, executeIfFunction } from '../utils';
import { MenuContext } from './MenuContext';

interface MenuProps {
	children: React.ReactNode;
	className?: string;
}

export const Menu: React.FC<MenuProps> = ({ children, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuId = uuid('menu');
	const [focusedIndex, setFocusedIndex] = useState(-1);
	const itemsRef = useRef<React.RefObject<HTMLElement>[]>([]);

	const onMenuOpen = () => {
		setFocusedIndex(0);
		setIsOpen(true);
	};

	const onMenuClose = () => {
		setIsOpen(false);
		setFocusedIndex(-1);
	};

	const onItemKeyDown = (event: React.KeyboardEvent, index: number, onClick?: () => void) => {
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
			onMenuClose();
		} else if (event.key === 'Enter' || event.key === ' ') {
			onClick?.();
			onMenuClose();
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
			onMenuClose,
			onMenuOpen,
			onItemKeyDown,
			registerItem,
			unregisterItem,
		}),
		[isOpen, menuId, focusedIndex],
	);

	return (
		<MenuContext.Provider value={contextValue}>
			<div data-menu className={className}>
				{executeIfFunction(children, { isOpen, onMenuClose })}
			</div>
		</MenuContext.Provider>
	);
};
