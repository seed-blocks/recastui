import React, { ReactNode } from 'react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';

interface ModalFooterProps {
	children: ReactNode;
	className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
	return <footer className={cl(modal.footer({ className }))}>{children}</footer>;
};

ModalFooter.displayName = 'ModalFooter';
