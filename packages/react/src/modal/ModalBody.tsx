import React, { ReactNode, useContext } from 'react';
import { modal } from '@recastui/themes';
import { cl } from '../utils';

export type ModalBodyProps = {
	children: ReactNode;
	className?: string;
};

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
	return <div className={cl(modal.body({ className }))}>{children}</div>;
};

ModalBody.displayName = 'ModalBody';
