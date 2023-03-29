import React, { createContext, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { drawer, DrawerTheme } from '@recastui/themes';
import { cl, uuid } from '../utils';

export type DrawerContextProps = DrawerTheme & {
	isOpen: boolean;
	onClose: () => void;
	closeOnOverlayClick?: boolean;
	blockScrollOnMount?: boolean;
	autoFocus?: boolean;
	initialFocusRef?: React.RefObject<HTMLElement>;
	finalFocusRef?: React.RefObject<HTMLElement>;
	headerId?: string;
	bodyId?: string;
};

export const DrawerContext = createContext<DrawerContextProps>({
	isOpen: false,
	onClose: () => {},
});

export type DrawerProps = DrawerContextProps & {
	children: React.ReactNode;
	className?: string;
};

export const Drawer: React.FC<DrawerProps> = ({
	isOpen,
	onClose,
	closeOnOverlayClick = true,
	blockScrollOnMount = true,
	autoFocus = true,
	placement,
	initialFocusRef,
	finalFocusRef,
	size,
	children,
	className,
}) => {
	if (!isOpen) return null;

	const handleOverlayClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (closeOnOverlayClick && e.target === e.currentTarget) {
				onClose();
			}
		},
		[closeOnOverlayClick, onClose],
	);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);

	return createPortal(
		<DrawerContext.Provider
			value={{
				isOpen,
				onClose,
				closeOnOverlayClick,
				blockScrollOnMount,
				autoFocus,
				initialFocusRef,
				finalFocusRef,
				placement,
				size,
				headerId: `drawer-header-${uuid()}`,
				bodyId: `drawer-body-${uuid()}`,
			}}>
			<div className={cl(drawer.overlay({ className }))} onClick={handleOverlayClick}>
				{children}
			</div>
		</DrawerContext.Provider>,
		document.body,
	);
};

Drawer.displayName = 'Drawer';
