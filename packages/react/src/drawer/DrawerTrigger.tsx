import React, { forwardRef, isValidElement, cloneElement, ReactElement, PropsWithRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useDrawerContext } from './DrawerContext';

export type DrawerTriggerProps = {
	children: ReactElement;
	asChild?: boolean;
};

export const DrawerTrigger = forwardRef<HTMLElement, DrawerTriggerProps>(function DrawerTrigger(
	{ children, asChild = false, ...props },
	propRef,
) {
	const context = useDrawerContext();

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

DrawerTrigger.displayName = 'DrawerTrigger';
