import React, { ReactNode } from 'react';
import { DrawerContext } from './DrawerContext';
import { UseDrawerOptions, useDrawer } from './useDrawer';

export type DrawerProps = UseDrawerOptions & {
	children: ReactNode;
};

export const Drawer = ({ children, ...options }: DrawerProps) => {
	const modal = useDrawer(options);

	return <DrawerContext.Provider value={modal}>{children}</DrawerContext.Provider>;
};

Drawer.displayName = 'Drawer';
