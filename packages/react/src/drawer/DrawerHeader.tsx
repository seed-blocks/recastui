import React, { ReactNode, useContext } from 'react';
import { drawer } from '@recastui/themes';
import { cl } from '../utils';
import { DrawerContext } from './Drawer';
interface DrawerHeaderProps {
	children: ReactNode;
	className?: string;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children, className }) => {
	const context = useContext(DrawerContext);
	return (
		<div id={context.headerId} className={cl(drawer.header({ className }))}>
			{children}
		</div>
	);
};

DrawerHeader.displayName = 'DrawerHeader';
