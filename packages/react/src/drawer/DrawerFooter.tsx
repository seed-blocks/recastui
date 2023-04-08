import React, { ReactNode } from 'react';
import { drawer } from '@recastui/themes';
import { cl } from '../utils';

export type DrawerFooterProps = {
	children: ReactNode;
	className?: string;
};

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ children, className }) => {
	return <div className={cl(drawer.footer({ className }))}>{children}</div>;
};

DrawerFooter.displayName = 'DrawerFooter';
