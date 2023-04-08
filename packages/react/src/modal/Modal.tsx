import React, { ReactNode } from 'react';
import ModalContext from './ModalContext';
import { UseModalOptions, useModal } from './useModal';

export type ModalProps = UseModalOptions & {
	children: ReactNode;
};

export const Modal = ({ children, ...options }: ModalProps) => {
	const modal = useModal(options);

	return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>;
};

Modal.displayName = 'Modal';
