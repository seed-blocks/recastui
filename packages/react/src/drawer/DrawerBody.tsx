import React, { ReactNode, useContext } from 'react';
import { drawer } from '@recastui/themes';
import { cl } from '../utils';
import { DrawerContext } from './Drawer';

export type DrawerBodyProps = {
	children: ReactNode;
	className?: string;
};

export const DrawerBody: React.FC<DrawerBodyProps> = ({ children, className }) => {
	const context = useContext(DrawerContext);
	return (
		<div id={context.bodyId} className={cl(drawer.body({ className }))}>
			{children}
		</div>
	);
};

DrawerBody.displayName = 'DrawerBody';
