import React, { forwardRef, Ref, ReactNode } from 'react';
import {
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
	useMergeRefs,
	useTransitionStyles,
} from '@floating-ui/react';
import { useModalContext } from './ModalContext';
import { modal } from '@recastui/themes';
import { cl } from '../utils';

export type ModalContentProps = {
	className?: string;
	overlayClassName?: string;
	children: ReactNode;
};

export const ModalContent = forwardRef(
	({ className, overlayClassName, ...props }: ModalContentProps, propRef: Ref<HTMLDivElement>) => {
		const {
			context: floatingContext,
			initialFocus,
			returnFocus,
			size,
			isCentered,
			...context
		} = useModalContext();
		const ref = useMergeRefs([context.refs.setFloating, propRef]);

		const { isMounted, styles } = useTransitionStyles(floatingContext, {
			duration: { open: 400 },
		});

		return (
			<FloatingPortal>
				{isMounted && (
					<FloatingOverlay
						className={cl(modal.overlay({ isCentered, className: overlayClassName }))}
						lockScroll>
						<FloatingFocusManager
							modal
							context={floatingContext}
							initialFocus={initialFocus}
							returnFocus={returnFocus}>
							<div
								ref={ref}
								aria-labelledby={context.labelId}
								aria-describedby={context.descriptionId}
								style={styles}
								className={cl(modal.content({ size, isCentered, className }))}
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

ModalContent.displayName = 'ModalContent';
