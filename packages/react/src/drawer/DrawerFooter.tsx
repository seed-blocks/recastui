import React, { ReactNode } from 'react';
import { drawer } from '@recastui/themes';
import { cl } from '../utils';

interface DrawerFooterProps {
	children: ReactNode;
	className?: string;
}

export const DrawerFooter: React.FC<DrawerFooterProps> = ({ children, className }) => {
	return <footer className={cl(drawer.footer({ className }))}>{children}</footer>;
};

DrawerFooter.displayName = 'DrawerFooter';
