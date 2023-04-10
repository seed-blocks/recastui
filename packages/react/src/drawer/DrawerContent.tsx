import React, { forwardRef, Ref, ReactNode } from 'react';
import {
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
	useMergeRefs,
	useTransitionStyles,
} from '@floating-ui/react';
import { useDrawerContext } from './DrawerContext';
import { drawer } from '@recastui/themes';
import { cl } from '../utils';

export type DrawerContentProps = {
	className?: string;
	overlayClassName?: string;
	children: ReactNode;
};

export const drawerTranitionStyleProps = {
	left: {
		initial: {
			opacity: 0,
			transform: 'translateX(-100%)',
		},
		open: {
			opacity: 1,
			transform: 'translateX(0)',
		},
		close: {
			opacity: 0,
			transform: 'translateX(-100%)',
		},
	},
	right: {
		initial: {
			opacity: 0,
			transform: 'translateX(100%)',
		},
		open: {
			opacity: 1,
			transform: 'translateX(0)',
		},
		close: {
			opacity: 0,
			transform: 'translateX(100%)',
		},
	},
	top: {
		initial: {
			opacity: 0,
			transform: 'translateY(-100%)',
		},
		open: {
			opacity: 1,
			transform: 'translateY(0)',
		},
		close: {
			opacity: 0,
			transform: 'translateY(-100%)',
		},
	},
	bottom: {
		initial: {
			opacity: 0,
			transform: 'translateY(100%)',
		},
		open: {
			opacity: 1,
			transform: 'translateY(0)',
		},
		close: {
			opacity: 0,
			transform: 'translateY(100%)',
		},
	},
};

export const DrawerContent = forwardRef(
	({ className, overlayClassName, ...props }: DrawerContentProps, propRef: Ref<HTMLDivElement>) => {
		const {
			context: floatingContext,
			initialFocus,
			returnFocus,
			size,
			position = 'left',
			...context
		} = useDrawerContext();
		const ref = useMergeRefs([context.refs.setFloating, propRef]);

		const { isMounted, styles } = useTransitionStyles(floatingContext, {
			duration: { open: 300, close: 200 },
			...(drawerTranitionStyleProps[position as keyof typeof drawerTranitionStyleProps] ?? {}),
		});

		return (
			<FloatingPortal>
				{isMounted && (
					<FloatingOverlay
						className={cl(drawer.overlay({ className: overlayClassName }))}
						lockScroll>
						<FloatingFocusManager
							modal
							context={floatingContext}
							initialFocus={initialFocus}
							returnFocus={returnFocus}>
							<div
								ref={ref}
								aria-modal={true}
								aria-labelledby={context.labelId}
								aria-describedby={context.descriptionId}
								style={styles}
								className={cl(drawer.content({ size, position, className }))}
								{...context.getFloatingProps(props)}>
								{props.children}
							</div>
						</FloatingFocusManager>
					</FloatingOverlay>
				)}
			</FloatingPortal>
		);
	},
);

DrawerContent.displayName = 'DrawerContent';
