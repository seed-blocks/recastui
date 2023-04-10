import React, { forwardRef, isValidElement, cloneElement, ReactElement, PropsWithRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useModalContext } from './ModalContext';

export type ModalTriggerProps = {
	children: ReactElement;
	asChild?: boolean;
};

export const ModalTrigger = forwardRef<HTMLElement, ModalTriggerProps>(function ModalTrigger(
	{ children, asChild = false, ...props },
	propRef,
) {
	const context = useModalContext();

	if (asChild && isValidElement(children)) {
		const childrenWithRef = React.Children.only(children);
		const { ref: childrenRef, ...childProps } = childrenWithRef.props as PropsWithRef<any>;

		const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

		return cloneElement(
			childrenWithRef,
			context.getReferenceProps({
				ref,
				...props,
				...childProps,
				'data-state': context.open ? 'open' : 'closed',
			}),
		);
	}

	const ref = useMergeRefs([context.refs.setReference, propRef]);

	return (
		<div
			ref={ref}
			data-state={context.open ? 'open' : 'closed'}
			{...context.getReferenceProps(props)}>
			{children}
		</div>
	);
});

ModalTrigger.displayName = 'ModalTrigger';
