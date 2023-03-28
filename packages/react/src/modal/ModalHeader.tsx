import React, { ReactNode } from 'react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';
interface ModalHeaderProps {
	children: ReactNode;
	className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => {
	return <header className={cl(modal.header({ className }))}>{children}</header>;
};

ModalHeader.displayName = 'ModalHeader';
