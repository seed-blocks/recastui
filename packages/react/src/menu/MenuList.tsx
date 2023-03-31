import React, { useRef, useEffect, ReactElement } from 'react';
import { usePopper } from 'react-popper';
import { useMenuContext } from './MenuContext';
import { menuList } from '@recastui/themes';
import { AnimatePresence, motion } from 'framer-motion';
import { cl } from '../utils';
import { MenuItemProps } from './MenuItem';

interface MenuListProps {
	children: React.ReactNode;
	className?: string;
}

export const MenuList: React.FC<MenuListProps> = ({ children, className, ...rest }) => {
	const { isOpen, onMenuClose, menuId } = useMenuContext();
	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null);
	const { styles, attributes } = usePopper(buttonRef.current, listRef.current, {
		placement: 'bottom-start',
	});

	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (!listRef.current?.contains(event.target as Node)) {
				onMenuClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const childrenWithIndex = React.Children.map(children, (child, _index) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child as ReactElement<MenuItemProps>, {
				_index,
			});
		}
		return child;
	});

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className='relative'
					{...rest}>
					<ul
						ref={listRef}
						id={`${menuId}-list`}
						role='menu'
						tabIndex={-1}
						className={cl(menuList({ className }))}
						style={styles.popper}
						{...attributes.popper}>
						{childrenWithIndex}
					</ul>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
