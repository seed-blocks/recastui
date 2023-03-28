import React, { useCallback, useContext } from 'react';
import { modal } from '@recastui/themes';
import FocusLock from 'react-focus-lock';
import { ModalContext } from './Modal';
import { cl } from '../utils';

export type ModalContentProps = {
	className?: string;
	children: React.ReactNode;
};

export const ModalContent = ({ className, children, ...props }: ModalContentProps) => {
	const context = useContext(ModalContext);

	const onActivation = useCallback(() => {
		if (context.initialFocusRef?.current) {
			context.initialFocusRef.current.focus();
		}
		if (context.blockScrollOnMount) {
			document.body.style.overflow = 'hidden';
		}
	}, [context.initialFocusRef]);

	const onDeactivation = useCallback(() => {
		if (context.finalFocusRef) {
			context.finalFocusRef?.current?.focus();
		}
		if (context.blockScrollOnMount) {
			document.body.style.overflow = '';
		}
	}, [context.finalFocusRef]);

	const returnFocus = !context.finalFocusRef;

	return (
		<FocusLock
			autoFocus={context.autoFocus}
			onActivation={onActivation}
			onDeactivation={onDeactivation}
			returnFocus={returnFocus}
			data-autofocus-inside={context.autoFocus}>
			<div
				role='alertdialog'
				aria-modal='true'
				aria-labelledby={context.headerId}
				aria-describedby={context.bodyId}
				className={cl(
					modal.content({ size: context.size, isCentered: context.isCentered, className }),
				)}
				{...props}>
				{children}
			</div>
		</FocusLock>
	);
};

ModalContent.displayName = 'ModalContent';
