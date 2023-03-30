import React, { createContext, useContext } from 'react';

interface MenuContextType {
	isOpen: boolean;
	menuId: string;
	focusedIndex: number;
	onClose: () => void;
	onMenuToggle: () => void;
	onItemClick: (index: number) => void;
	onItemKeyDown: (event: React.KeyboardEvent, index: number) => void;
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
