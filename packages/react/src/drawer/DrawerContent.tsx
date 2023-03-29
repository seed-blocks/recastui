import React, { useCallback, useContext } from 'react';
import { drawer } from '@recastui/themes';
import FocusLock from 'react-focus-lock';
import { DrawerContext } from './Drawer';
import { cl } from '../utils';

export type DrawerContentProps = {
	className?: string;
	children: React.ReactNode;
};

export const DrawerContent = ({ className, children, ...props }: DrawerContentProps) => {
	const context = useContext(DrawerContext);

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
				role='dialog'
				aria-modal='true'
				aria-labelledby={context.headerId}
				aria-describedby={context.bodyId}
				className={cl(
					drawer.content({ size: context.size, placement: context.placement, className }),
				)}
				{...props}>
				{children}
			</div>
		</FocusLock>
	);
};

DrawerContent.displayName = 'DrawerContent';
