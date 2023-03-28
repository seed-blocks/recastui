import React, { ReactNode, useContext } from 'react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';
import { ModalContext } from './Modal';

export type ModalBodyProps = {
	children: ReactNode;
	className?: string;
};

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
	const context = useContext(ModalContext);
	return (
		<div id={context.bodyId} className={cl(modal.body({ className }))}>
			{children}
		</div>
	);
};

ModalBody.displayName = 'ModalBody';
