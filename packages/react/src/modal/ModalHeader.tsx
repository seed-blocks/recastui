import React, { ReactNode, useContext } from 'react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';
import { ModalContext } from './Modal';
interface ModalHeaderProps {
	children: ReactNode;
	className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => {
	const context = useContext(ModalContext);
	return (
		<div id={context.headerId} className={cl(modal.header({ className }))}>
			{children}
		</div>
	);
};

ModalHeader.displayName = 'ModalHeader';
