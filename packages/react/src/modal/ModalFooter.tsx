import React, { ReactNode } from 'react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';

export type ModalFooterProps = {
	children: ReactNode;
	className?: string;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
	return <div className={cl(modal.footer({ className }))}>{children}</div>;
};

ModalFooter.displayName = 'ModalFooter';
