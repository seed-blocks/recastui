import React, { useRef, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { useMenuContext } from './MenuContext';

interface MenuListProps {
	children: React.ReactNode;
	className?: string;
}

export const MenuList: React.FC<MenuListProps> = ({ children, className }) => {
	const { isOpen, onClose, menuId } = useMenuContext();
	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null);
	const { styles, attributes } = usePopper(buttonRef.current, listRef.current, {
		placement: 'bottom-start',
	});

	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (
				listRef.current &&
				!listRef.current.contains(event.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node)
			) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	if (!isOpen) {
		return null;
	}

	return (
		<ul
			ref={listRef}
			id={`${menuId}-list`}
			role='menu'
			tabIndex={-1}
			className={className}
			style={styles.popper}
			{...attributes.popper}>
			{children}
		</ul>
	);
};
