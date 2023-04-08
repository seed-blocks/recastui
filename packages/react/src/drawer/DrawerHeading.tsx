import React, { useLayoutEffect, forwardRef, Ref, ReactNode } from 'react';
import { useDrawerContext } from './DrawerContext';
import { useId } from '@floating-ui/react';
import { drawer } from '@recastui/themes';
import { cl } from '../utils';

export type DrawerHeadingProps = {
	className?: string;
	children: ReactNode;
};

export const DrawerHeading = forwardRef(
	({ className, children, ...rest }: DrawerHeadingProps, ref: Ref<HTMLHeadingElement>) => {
		const { setLabelId } = useDrawerContext();
		const id = useId();

		useLayoutEffect(() => {
			setLabelId(id);
			return () => setLabelId(undefined);
		}, [id, setLabelId]);

		return (
			<h2 {...rest} ref={ref} id={id} className={cl(drawer.heading({ className }))}>
				{children}
			</h2>
		);
	},
);

DrawerHeading.displayName = 'DrawerHeading';
