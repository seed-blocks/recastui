import React, { createContext, useContext } from 'react';

interface MenuContextType {
	isOpen: boolean;
	menuId: string;
	focusedIndex: number;
	onMenuClose: () => void;
	onMenuOpen: () => void;
	onItemKeyDown: (event: React.KeyboardEvent, index: number, onClick?: () => void) => void;
	registerItem: (itemRef: React.RefObject<HTMLElement>) => void;
	unregisterItem: (itemRef: React.RefObject<HTMLElement>) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const useMenuContext = () => {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error('useMenuContext must be used within a MenuProvider');
	}

	return context;
};

export { MenuContext, useMenuContext };
